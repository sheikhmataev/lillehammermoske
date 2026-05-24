'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { PrayerTimesService, getNextPrayerTime, getCurrentPrayerTime } from '@/services/prayer-times';
import { config } from '@/lib/config';
import { PrayerTime } from '@/types/prayer-times';

interface PrayerTimeDisplay {
  name: string;
  time: string;
  isNext: boolean;
  isCurrent: boolean;
  arabicName: string;
}

const PRAYER_ORDER: { name: string; arabicName: string }[] = [
  { name: 'Fajr', arabicName: 'الفجر' },
  { name: 'Duhr', arabicName: 'الظهر' },
  { name: 'Asr', arabicName: 'العصر' },
  { name: 'Maghrib', arabicName: 'المغرب' },
  { name: 'Isha', arabicName: 'العشاء' },
];

export function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimeDisplay[]>([]);
  const [todayPrayerTimes, setTodayPrayerTimes] = useState<PrayerTime | null>(null);
  const [nextPrayerCountdown, setNextPrayerCountdown] = useState<string>('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const prayerService = PrayerTimesService.getInstance();

  useEffect(() => {
    const loadPrayerTimes = async () => {
      try {
        setLoading(true);
        const todayTimes = await prayerService.getTodayPrayerTimes();

        if (todayTimes) {
          setTodayPrayerTimes(todayTimes);

          const currentPrayer = getCurrentPrayerTime(todayTimes);
          const nextPrayer = getNextPrayerTime(todayTimes);

          const timesMap: Record<string, string> = {
            Fajr: todayTimes.fajr,
            Duhr: todayTimes.duhr,
            Asr: todayTimes.asr,
            Maghrib: todayTimes.maghrib,
            Isha: todayTimes.isha,
          };

          const times: PrayerTimeDisplay[] = PRAYER_ORDER.map((p) => ({
            name: p.name,
            arabicName: p.arabicName,
            time: timesMap[p.name],
            isNext: nextPrayer?.name === p.name,
            isCurrent: currentPrayer?.name === p.name,
          }));

          setPrayerTimes(times);

          if (nextPrayer) {
            setNextPrayerCountdown(nextPrayer.countdown);
          }
        } else {
          setError('Kunne ikke hente dagens bønnetider');
        }
      } catch (err) {
        setError('Feil ved lasting av bønnetider');
        console.error('Error loading prayer times:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPrayerTimes();
  }, [prayerService]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentDate(now);
      if (todayPrayerTimes) {
        const nextPrayer = getNextPrayerTime(todayPrayerTimes);
        if (nextPrayer) {
          setNextPrayerCountdown(nextPrayer.countdown);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [todayPrayerTimes]);

  const highlightPrayer = prayerTimes.find((p) => p.isCurrent) ?? prayerTimes.find((p) => p.isNext);
  const highlightLabel = prayerTimes.find((p) => p.isCurrent) ? 'Pågår nå' : 'Neste bønn';

  return (
    <section className="relative overflow-hidden bg-[#F9F5EB] py-20 sm:py-24">
      {/* Subtle Islamic pattern background */}
      <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: PARCHMENT_PATTERN_URI, backgroundSize: '160px 160px' }} />
      {/* Soft warm radial */}
      <div aria-hidden className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="container-custom relative px-4">
        {/* Eyebrow + title */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9A7A15]">
              Bønnetider
            </span>
            <span className="h-px w-8 bg-[#D4AF37]/60" />
          </div>
          <h2 className="mt-4 font-arabic text-4xl text-[#0c2a1a] sm:text-5xl md:text-6xl">
            صَلَوات اليَوم
          </h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.32em] text-[#1B5E20]/70">
            Dagens bønner · Lillehammer
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#3a3a32]">
            Tider for Fajr, Duhr, Asr, Maghrib og Isha — beregnet automatisk for
            Lillehammer og oppdatert hver dag.
          </p>

          <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-[#1B5E20]/15 bg-white/60 px-5 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-sm font-medium text-[#0c2a1a]">
              Jummah · Khutbah {config.jummah.khutbah} · Iqamah {config.jummah.jamat}
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="mx-auto mt-12 max-w-5xl">
          {error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50/80 p-6 text-center text-red-700">
              {error}
            </div>
          ) : loading ? (
            <div className="rounded-3xl border border-[#1B5E20]/10 bg-white/60 p-10 text-center text-sm text-[#3a3a32]/60">
              Laster bønnetider…
            </div>
          ) : (
            <>
              {/* Highlight card */}
              {highlightPrayer && (
                <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#0c2a1a] via-[#13391f] to-[#0c2a1a] p-6 text-white shadow-[0_30px_60px_-30px_rgba(12,42,26,0.5)] sm:p-10">
                  <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: ISLAMIC_PATTERN_URI, backgroundSize: '160px 160px' }} />
                  <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#D4AF37]/15 blur-[100px]" />

                  <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E6C547]/90">
                        {highlightLabel}
                      </p>
                      <div className="mt-3 flex items-baseline gap-4">
                        <h3 className="text-3xl font-bold text-white sm:text-4xl">
                          {highlightPrayer.name}
                        </h3>
                        <span dir="rtl" className="font-arabic text-2xl text-[#E9D08A]">
                          {highlightPrayer.arabicName}
                        </span>
                      </div>
                      {nextPrayerCountdown && !highlightPrayer.isCurrent && (
                        <p className="mt-3 text-sm text-white/70">
                          Starter om{' '}
                          <span className="font-medium text-[#E6C547]" suppressHydrationWarning>
                            {nextPrayerCountdown}
                          </span>
                        </p>
                      )}
                      {highlightPrayer.isCurrent && (
                        <p className="mt-3 text-sm text-white/70">Pågår — neste bønn varsles snart.</p>
                      )}
                    </div>

                    <div className="text-right">
                      <p className="font-arabic text-6xl font-bold tabular-nums text-[#F5E9C3] sm:text-7xl">
                        {highlightPrayer.time}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Date + location bar */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 px-1 text-sm">
                <div className="flex items-center gap-2 text-[#0c2a1a]/80">
                  <Calendar className="h-4 w-4 text-[#9A7A15]" />
                  <span className="font-medium capitalize" suppressHydrationWarning>
                    {currentDate.toLocaleDateString('nb-NO', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#0c2a1a]/60">
                  <MapPin className="h-4 w-4 text-[#9A7A15]" />
                  <span>Lillehammer</span>
                </div>
              </div>

              {/* All prayer times */}
              <div className="mt-4 overflow-hidden rounded-2xl border border-[#1B5E20]/10 bg-white/70 backdrop-blur-sm">
                {prayerTimes.map((prayer, idx) => {
                  const isLast = idx === prayerTimes.length - 1;
                  const isActive = prayer.isCurrent || prayer.isNext;
                  return (
                    <div
                      key={prayer.name}
                      className={`relative flex items-center justify-between gap-4 px-5 py-4 sm:px-7 sm:py-5 ${
                        isLast ? '' : 'border-b border-[#1B5E20]/10'
                      } ${prayer.isCurrent ? 'bg-[#1B5E20]/[0.04]' : ''}`}
                    >
                      {prayer.isCurrent && (
                        <span aria-hidden className="absolute inset-y-0 left-0 w-1 bg-[#D4AF37]" />
                      )}
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span
                          className={`font-arabic text-2xl ${
                            isActive ? 'text-[#0c2a1a]' : 'text-[#0c2a1a]/40'
                          } sm:text-3xl`}
                          dir="rtl"
                        >
                          {prayer.arabicName}
                        </span>
                        <div>
                          <p
                            className={`text-base font-semibold sm:text-lg ${
                              prayer.isCurrent
                                ? 'text-[#0c2a1a]'
                                : prayer.isNext
                                  ? 'text-[#9A7A15]'
                                  : 'text-[#0c2a1a]/75'
                            }`}
                          >
                            {prayer.name}
                          </p>
                          {prayer.isCurrent && (
                            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9A7A15]">
                              Pågår nå
                            </p>
                          )}
                          {prayer.isNext && !prayer.isCurrent && (
                            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9A7A15]">
                              Neste
                            </p>
                          )}
                        </div>
                      </div>
                      <p
                        className={`font-arabic text-2xl tabular-nums sm:text-3xl ${
                          isActive ? 'text-[#0c2a1a]' : 'text-[#0c2a1a]/65'
                        }`}
                      >
                        {prayer.time}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Footer row */}
              <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
                <p className="text-xs text-[#0c2a1a]/55">
                  Tider er beregnet for Lillehammer og oppdateres automatisk.
                </p>
                <Link
                  href="/prayer-times"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0c2a1a] hover:text-[#9A7A15]"
                >
                  <span>Se full kalender</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

const ISLAMIC_PATTERN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>
  <g fill='none' stroke='%23D4AF37' stroke-width='0.7'>
    <path d='M80 10 L98 44 L132 44 L106 70 L114 110 L80 86 L46 110 L54 70 L28 44 L62 44 Z' />
    <circle cx='80' cy='80' r='4' />
  </g>
</svg>`;
const ISLAMIC_PATTERN_URI = `url("data:image/svg+xml;utf8,${ISLAMIC_PATTERN_SVG.replace(/\n/g, '').replace(/  +/g, ' ')}")`;

const PARCHMENT_PATTERN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>
  <g fill='none' stroke='%231B5E20' stroke-width='0.6'>
    <path d='M80 10 L98 44 L132 44 L106 70 L114 110 L80 86 L46 110 L54 70 L28 44 L62 44 Z' />
    <circle cx='80' cy='80' r='3' />
    <path d='M0 80 L20 50 L40 80 L20 110 Z' opacity='0.4' />
    <path d='M160 80 L140 50 L120 80 L140 110 Z' opacity='0.4' />
  </g>
</svg>`;
const PARCHMENT_PATTERN_URI = `url("data:image/svg+xml;utf8,${PARCHMENT_PATTERN_SVG.replace(/\n/g, '').replace(/  +/g, ' ')}")`;
