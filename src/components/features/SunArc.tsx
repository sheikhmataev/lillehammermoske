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
  isBoundary?: boolean;
}

const ORDER: { key: keyof PrayerTime; name: string; arabic: string; isBoundary?: boolean }[] = [
  { key: 'fajr', name: 'Fajr', arabic: 'الفجر' },
  { key: 'fajrEnd', name: 'Fajr slutt', arabic: 'الشروق', isBoundary: true },
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

function getPrayerAnchor(name: string, ptX: number): 'start' | 'end' | 'middle' {
  if (name === 'Fajr') return 'end';
  if (name === 'Fajr slutt') return 'start';
  if (name === 'Duhr') return 'middle';
  if (name === 'Asr') return 'start';
  if (name === 'Maghrib') return 'end';
  if (name === 'Isha') return 'start';
  
  // Fallback
  return ptX < CX - 40 ? 'end' : ptX > CX + 40 ? 'start' : 'middle';
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
    let lastMin = -1;
    return ORDER.map((p) => {
      let mins = toMinutes(today[p.key] as string);
      if (mins < lastMin) {
        // Wrap around midnight for chronological ordering in summer months
        mins += 1440;
      }
      lastMin = mins;
      return {
        name: p.name,
        arabic: p.arabic,
        time: today[p.key] as string,
        minutes: mins,
        isBoundary: p.isBoundary,
      };
    });
  }, [today]);

  const nextPrayer = today ? getNextPrayerTime(today) : null;
  const currentPrayer = today ? getCurrentPrayerTime(today) : null;

  const fajrMin = useMemo(() => nodes.find((n) => n.name === 'Fajr')?.minutes ?? 0, [nodes]);
  const ishaMin = useMemo(() => nodes.find((n) => n.name === 'Isha')?.minutes ?? 1440, [nodes]);
  const span = useMemo(() => Math.max(ishaMin - fajrMin, 1), [fajrMin, ishaMin]);
  const fractionFor = (min: number) => Math.min(Math.max((min - fajrMin) / span, 0), 1);

  // Multi-pass vertical offset collision resolver for all label pairs
  const labelOffsets = useMemo(() => {
    const n = nodes.length;
    const offsets = new Array(n).fill(0);
    if (n === 0) return offsets;

    const cycle = [0, -30, 24];

    // Compute original X coordinates for each node
    const xCoords = nodes.map((node) => {
      const f = Math.min(Math.max((node.minutes - fajrMin) / span, 0), 1);
      return pointAt(f).x;
    });

    for (let i = 0; i < n; i++) {
      let cycleIdx = 0;
      let hasCollision = true;
      
      while (hasCollision && cycleIdx < cycle.length) {
        offsets[i] = cycle[cycleIdx];
        hasCollision = false;
        
        // Multi-pass collision check against ALL other nodes
        for (let j = 0; j < n; j++) {
          if (i === j) continue;
          
          const dx = Math.abs(xCoords[i] - xCoords[j]);
          const sameAnchor = getPrayerAnchor(nodes[i].name, xCoords[i]) === getPrayerAnchor(nodes[j].name, xCoords[j]);
          
          // Collision if they share the same anchor, horizontal distance is under 70px, and same offset
          if (sameAnchor && dx < 70 && offsets[i] === offsets[j]) {
            hasCollision = true;
            break;
          }
        }
        
        if (hasCollision) {
          cycleIdx++;
        }
      }
      
      if (cycleIdx >= cycle.length) {
        offsets[i] = cycle[i % cycle.length];
      }
    }

    return offsets;
  }, [nodes, fajrMin, span]);

  const nowMin = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
  const isNight = nowMin < fajrMin || nowMin > ishaMin;
  const sunFraction = fractionFor(nowMin);
  const sun = pointAt(sunFraction);

  const arcPath = `M ${pointAt(0).x} ${pointAt(0).y} A ${R} ${R} 0 0 1 ${pointAt(1).x} ${pointAt(1).y}`;
  const fillPath = `${arcPath} L ${pointAt(1).x} ${BASE_Y} L ${pointAt(0).x} ${BASE_Y} Z`;

  return (
    <section className="band band-ink-continue isolate py-16 sm:py-20">
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
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
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
                <line x1={pointAt(0).x} y1={BASE_Y} x2={pointAt(1).x} y2={BASE_Y} stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
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
                {nodes.map((p, idx) => {
                  const f = fractionFor(p.minutes);
                  const pt = pointAt(f);
                  const isCurrent = currentPrayer?.name === p.name;
                  const isNext = nextPrayer?.name === p.name;
                  const active = isCurrent || isNext;
                  const isBoundary = p.isBoundary;

                  // Get optimized alternating text anchors to eliminate horizontal/vertical overlap
                  const anchor = getPrayerAnchor(p.name, pt.x);
                  const dx = anchor === 'end' ? -14 : anchor === 'start' ? 14 : 0;
                  const offsetY = labelOffsets[idx] ?? 0;
                  return (
                    <g key={p.name}>
                      <line 
                        x1={pt.x} 
                        y1={pt.y} 
                        x2={pt.x} 
                        y2={BASE_Y} 
                        stroke="#ffffff" 
                        strokeOpacity={active ? 0.18 : isBoundary ? 0.04 : 0.07} 
                        strokeWidth="1" 
                        strokeDasharray={isBoundary ? "2 2" : "3 4"} 
                      />
                      <circle 
                        cx={pt.x} 
                        cy={pt.y} 
                        r={active ? 9 : isBoundary ? 5 : 6} 
                        fill={isCurrent ? '#FBE38A' : isNext ? '#E6C547' : isBoundary ? '#5c3e07' : '#0c2a1a'} 
                        stroke={active ? '#FBE38A' : isBoundary ? '#D4AF37' : '#D4AF37'} 
                        strokeWidth={isBoundary ? "1.5" : "2.5"} 
                      />
                      {/* Name always on top (dy=-38), time always below (dy=-20) */}
                      <text 
                        x={pt.x + dx} 
                        y={pt.y - 38 + offsetY} 
                        textAnchor={anchor} 
                        className={`font-semibold ${isBoundary ? 'fill-white/60' : 'fill-white'}`} 
                        style={{ fontSize: isBoundary ? '16px' : '19px' }}
                      >
                        {p.name}
                      </text>
                      <text 
                        x={pt.x + dx} 
                        y={pt.y - 20 + offsetY} 
                        textAnchor={anchor} 
                        className={isBoundary ? 'fill-[#E9D08A]/75' : 'fill-[#E9D08A]'} 
                        style={{ fontSize: isBoundary ? '15px' : '17px', fontVariantNumeric: 'tabular-nums' }}
                      >
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
            <div className="mx-auto mt-4 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-6">
              {nodes.map((p) => {
                const isCurrent = currentPrayer?.name === p.name;
                const isNext = nextPrayer?.name === p.name && !currentPrayer;
                const isBoundary = p.isBoundary;
                return (
                  <div
                    key={p.name}
                    className={`rounded-2xl border p-3 text-center backdrop-blur-sm ${
                      isCurrent
                        ? 'border-[#FBE38A]/50 bg-[#D4AF37]/15'
                        : isNext
                          ? 'border-[#D4AF37]/35 bg-white/[0.05]'
                          : isBoundary
                            ? 'border-orange-500/10 bg-orange-500/[0.02]'
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
              <span className="block mt-1 text-xs text-white/35">Bønnetider er levert av Islamsk Råd Norge (IRN)</span>
            </p>
          </>
        )}
      </div>
    </section>
  );
}
