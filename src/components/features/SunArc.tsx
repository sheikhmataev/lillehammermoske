'use client';

import { useEffect, useMemo, useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import {
  PrayerTimesService,
  getNextPrayerTime,
  getCurrentPrayerTime,
} from '@/services/prayer-times';
import { config } from '@/lib/config';
import type { PrayerTime } from '@/types/prayer-times';

interface PrayerNode {
  name: string;
  arabic: string;
  time: string;
  minutes: number;
}

const ORDER: { key: keyof PrayerTime; name: string; arabic: string }[] = [
  { key: 'fajr', name: 'Fajr', arabic: 'الفجر' },
  { key: 'duhr', name: 'Duhr', arabic: 'الظهر' },
  { key: 'asr', name: 'Asr', arabic: 'العصر' },
  { key: 'maghrib', name: 'Maghrib', arabic: 'المغرب' },
  { key: 'isha', name: 'Isha', arabic: 'العشاء' },
];

function toMinutes(t: string): number {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

// Geometry for the dome arc
const VB_W = 800;
const VB_H = 360;
const CX = 400;
const BASE_Y = 318;
const R = 286;

function pointAt(fraction: number): { x: number; y: number } {
  const angle = Math.PI - fraction * Math.PI; // 180°→0°
  return { x: CX + R * Math.cos(angle), y: BASE_Y - R * Math.sin(angle) };
}

export function SunArc() {
  const [today, setToday] = useState<PrayerTime | null>(null);
  const [now, setNow] = useState<Date>(() => new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const service = PrayerTimesService.getInstance();
    service
      .getTodayPrayerTimes()
      .then((t) => {
        if (t) setToday(t);
        else setError('Kunne ikke hente dagens bønnetider.');
      })
      .catch(() => setError('Feil ved lasting av bønnetider.'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const nodes: PrayerNode[] = useMemo(() => {
    if (!today) return [];
    return ORDER.map((p) => ({
      name: p.name,
      arabic: p.arabic,
      time: today[p.key] as string,
      minutes: toMinutes(today[p.key] as string),
    }));
  }, [today]);

  const nextPrayer = today ? getNextPrayerTime(today) : null;
  const currentPrayer = today ? getCurrentPrayerTime(today) : null;

  const fajrMin = nodes[0]?.minutes ?? 0;
  const ishaMin = nodes[4]?.minutes ?? 1;
  const span = Math.max(ishaMin - fajrMin, 1);
  const fractionFor = (min: number) => Math.min(Math.max((min - fajrMin) / span, 0), 1);

  const nowMin = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
  const isNight = nowMin < fajrMin || nowMin > ishaMin;
  const sunFraction = fractionFor(nowMin);
  const sun = pointAt(sunFraction);

  const arcPath = `M ${pointAt(0).x} ${pointAt(0).y} A ${R} ${R} 0 0 1 ${pointAt(1).x} ${pointAt(1).y}`;
  const fillPath = `${arcPath} L ${pointAt(1).x} ${BASE_Y} L ${pointAt(0).x} ${BASE_Y} Z`;

  return (
    <section className="band band-ink isolate py-16 sm:py-20">
      <div className="container-custom relative px-4">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E6C547]">
              Dagens bønner
            </span>
            <span className="h-px w-8 bg-[#D4AF37]/60" />
          </div>
          <h2 className="font-arabic mt-4 text-4xl text-[#E9D08A] sm:text-5xl" dir="rtl">
            مواقيت الصلاة
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-[#E6C547]" />
              <span className="capitalize" suppressHydrationWarning>
                {now.toLocaleDateString('nb-NO', { weekday: 'long', day: 'numeric', month: 'long' })}
              </span>
            </span>
            <span className="text-white/30">·</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-[#E6C547]" />
              Lillehammer
            </span>
          </div>
        </div>

        {error ? (
          <p className="mx-auto mt-10 max-w-md rounded-2xl border border-red-300/30 bg-red-500/10 p-5 text-center text-red-200">
            {error}
          </p>
        ) : loading ? (
          <p className="mt-12 text-center text-sm text-white/50">Laster bønnetider…</p>
        ) : (
          <>
            {/* The sun arc */}
            <div className="mx-auto mt-8 max-w-4xl">
              <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full overflow-visible" role="img" aria-label="Bønnetider langs solens bane">
                <defs>
                  <linearGradient id="sunPath" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6CA8B8" />
                    <stop offset="22%" stopColor="#E6C547" />
                    <stop offset="48%" stopColor="#F7DE7E" />
                    <stop offset="68%" stopColor="#E8923C" />
                    <stop offset="85%" stopColor="#C75B3A" />
                    <stop offset="100%" stopColor="#4C3A86" />
                  </linearGradient>
                  <linearGradient id="sunFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient id="sunGlow">
                    <stop offset="0%" stopColor="#FBE38A" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#FBE38A" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* horizon */}
                <line x1="40" y1={BASE_Y} x2={VB_W - 40} y2={BASE_Y} stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
                {/* area under arc */}
                <path d={fillPath} fill="url(#sunFill)" />
                {/* the path itself */}
                <path d={arcPath} fill="none" stroke="url(#sunPath)" strokeWidth="3" strokeLinecap="round" />

                {/* progress overlay up to now (brighter) */}
                {!isNight && (
                  <path
                    d={`M ${pointAt(0).x} ${pointAt(0).y} A ${R} ${R} 0 0 1 ${sun.x} ${sun.y}`}
                    fill="none"
                    stroke="#FBE38A"
                    strokeOpacity="0.5"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                )}

                {/* prayer nodes */}
                {nodes.map((p) => {
                  const f = fractionFor(p.minutes);
                  const pt = pointAt(f);
                  const isCurrent = currentPrayer?.name === p.name;
                  const isNext = nextPrayer?.name === p.name;
                  const active = isCurrent || isNext;
                  const anchor = pt.x < CX - 40 ? 'end' : pt.x > CX + 40 ? 'start' : 'middle';
                  const dx = anchor === 'end' ? -14 : anchor === 'start' ? 14 : 0;
                  return (
                    <g key={p.name}>
                      <line x1={pt.x} y1={pt.y} x2={pt.x} y2={BASE_Y} stroke="#ffffff" strokeOpacity={active ? 0.18 : 0.07} strokeWidth="1" strokeDasharray="3 4" />
                      <circle cx={pt.x} cy={pt.y} r={active ? 9 : 6} fill={isCurrent ? '#FBE38A' : isNext ? '#E6C547' : '#0c2a1a'} stroke={active ? '#FBE38A' : '#D4AF37'} strokeWidth="2.5" />
                      <text x={pt.x + dx} y={pt.y - 18} textAnchor={anchor} className="fill-white font-semibold" style={{ fontSize: '19px' }}>
                        {p.name}
                      </text>
                      <text x={pt.x + dx} y={pt.y + (anchor === 'middle' ? -38 : 2)} textAnchor={anchor} className="fill-[#E9D08A]" style={{ fontSize: '17px', fontVariantNumeric: 'tabular-nums' }}>
                        {p.time}
                      </text>
                    </g>
                  );
                })}

                {/* sun / moon marker */}
                {isNight ? (
                  <g transform={`translate(${pointAt(sunFraction < 0.5 ? 0 : 1).x}, ${BASE_Y - 8})`}>
                    <circle r="26" fill="url(#sunGlow)" />
                    <circle r="9" fill="#E9D08A" />
                    <circle r="9" cx="4" cy="-3" fill="#0c2a1a" />
                  </g>
                ) : (
                  <g transform={`translate(${sun.x}, ${sun.y})`}>
                    <circle r="30" fill="url(#sunGlow)" />
                    <circle r="11" fill="#FCEFB4" />
                    <circle r="11" fill="none" stroke="#FBE38A" strokeWidth="2" />
                  </g>
                )}
              </svg>
            </div>

            {/* next prayer banner */}
            <div className="mx-auto mt-6 max-w-2xl">
              <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-[#D4AF37]/25 bg-white/[0.04] px-6 py-4 backdrop-blur-sm sm:flex-row">
                <p className="text-sm text-white/70">
                  {currentPrayer ? 'Pågår nå' : 'Neste bønn'}
                </p>
                <p className="font-display text-xl font-semibold text-white">
                  {currentPrayer?.name ?? nextPrayer?.name ?? '—'}
                  <span className="ml-3 font-arabic text-[#E9D08A]">
                    {currentPrayer
                      ? nodes.find((n) => n.name === currentPrayer.name)?.time
                      : nextPrayer?.time}
                  </span>
                </p>
                {!currentPrayer && nextPrayer && (
                  <p className="text-sm text-[#E6C547]" suppressHydrationWarning>
                    om {nextPrayer.countdown}
                  </p>
                )}
              </div>
            </div>

            {/* times row */}
            <div className="mx-auto mt-4 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-5">
              {nodes.map((p) => {
                const isCurrent = currentPrayer?.name === p.name;
                const isNext = nextPrayer?.name === p.name && !currentPrayer;
                return (
                  <div
                    key={p.name}
                    className={`rounded-2xl border p-3 text-center backdrop-blur-sm ${
                      isCurrent
                        ? 'border-[#FBE38A]/50 bg-[#D4AF37]/15'
                        : isNext
                          ? 'border-[#D4AF37]/35 bg-white/[0.05]'
                          : 'border-white/10 bg-white/[0.02]'
                    }`}
                  >
                    <p className="font-arabic text-xl text-[#E9D08A]" dir="rtl">{p.arabic}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{p.name}</p>
                    <p className="font-arabic text-xl tabular-nums text-white">{p.time}</p>
                  </div>
                );
              })}
            </div>

            <p className="mx-auto mt-6 max-w-xl text-center text-sm text-white/55">
              Jummah · Khutbah {config.jummah.khutbah} · Iqamah {config.jummah.jamat}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
