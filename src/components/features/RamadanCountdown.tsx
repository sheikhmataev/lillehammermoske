'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, Coffee, Clock, Star, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

// Approximate Ramadan start dates (1st day of fasting).
// The Islamic calendar shifts ~10-11 days earlier each Gregorian year.
// These should be confirmed each year based on moon sighting.
const RAMADAN_DATES: Record<number, { start: string; end: string }> = {
  2026: { start: '2026-02-18', end: '2026-03-19' },
  2027: { start: '2027-02-07', end: '2027-03-08' },
  2028: { start: '2028-01-28', end: '2028-02-26' },
  2029: { start: '2029-01-16', end: '2029-02-14' },
  2030: { start: '2030-01-06', end: '2030-02-04' },
};

function getNextRamadan(now: Date) {
  const currentYear = now.getFullYear();
  
  for (let year = currentYear; year <= currentYear + 5; year++) {
    const dates = RAMADAN_DATES[year];
    if (!dates) continue;
    
    const start = new Date(dates.start + 'T00:00:00');
    const end = new Date(dates.end + 'T23:59:59');
    
    if (now <= end) {
      return { year, start, end };
    }
  }
  
  // Fallback: estimate based on ~10.63 day annual shift
  const lastKnown = 2030;
  const yearsDiff = currentYear - lastKnown;
  const estimatedYear = currentYear + 1;
  const baseStart = new Date(RAMADAN_DATES[2030].start);
  baseStart.setFullYear(baseStart.getFullYear() + yearsDiff + 1);
  const estimatedEnd = new Date(baseStart);
  estimatedEnd.setDate(estimatedEnd.getDate() + 29);
  
  return { year: estimatedYear, start: baseStart, end: estimatedEnd };
}

function getTimeDiff(target: Date, now: Date) {
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

type Phase = 'before' | 'during' | 'after';

export function RamadanCountdown() {
  const [phase, setPhase] = useState<Phase>('before');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentDay, setCurrentDay] = useState(0);
  const [totalDays, setTotalDays] = useState(30);
  const [ramadanYear, setRamadanYear] = useState(2026);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const tick = () => {
      const now = new Date();
      const ramadan = getNextRamadan(now);
      setRamadanYear(ramadan.year);
      
      const total = Math.ceil((ramadan.end.getTime() - ramadan.start.getTime()) / (1000 * 60 * 60 * 24));
      setTotalDays(total);

      if (now >= ramadan.start && now <= ramadan.end) {
        // During Ramadan
        setPhase('during');
        const dayNum = Math.floor((now.getTime() - ramadan.start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        setCurrentDay(dayNum);
        const daysRemaining = total - dayNum;
        // Count down to end of Ramadan (Eid)
        setTimeLeft(getTimeDiff(ramadan.end, now));
      } else if (now < ramadan.start) {
        // Before Ramadan
        setPhase('before');
        setTimeLeft(getTimeDiff(ramadan.start, now));
      } else {
        // After this Ramadan — getNextRamadan should already return next year
        setPhase('before');
        setTimeLeft(getTimeDiff(ramadan.start, now));
      }
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse h-48 bg-gray-100 rounded-2xl" />
          </div>
        </div>
      </section>
    );
  }

  const progressPercent = phase === 'during' ? Math.min((currentDay / totalDays) * 100, 100) : 0;

  // ── During Ramadan ──
  if (phase === 'during') {
    const daysLeft = totalDays - currentDay;
    
    return (
      <section className="py-12 md:py-16 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gold-500 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gold-500 blur-3xl" />
        </div>
        
        <div className="container-custom relative px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-5 py-1.5 mb-5">
                <Moon className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 font-medium text-xs uppercase tracking-wider">Ramadan Mubarak</span>
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
                Dag {currentDay} <span className="text-gold-400">av {totalDays}</span>
              </h2>
              <p className="text-emerald-200 text-base sm:text-lg">
                {daysLeft === 0 
                  ? 'Siste dag av Ramadan — Eid al-Fitr i morgen!' 
                  : daysLeft === 1 
                    ? '1 dag igjen av Ramadan'
                    : `${daysLeft} dager igjen av Ramadan`
                }
              </p>
            </div>

            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex justify-between text-xs text-emerald-300 mb-2 px-1">
                <span>1. Ramadan</span>
                <span>Eid al-Fitr</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                <div 
                  className="h-full bg-gradient-to-r from-gold-400 to-gold-500 rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-gold-300 rounded-full shadow-lg shadow-gold-500/50 border-2 border-white" />
                </div>
              </div>
            </div>

            {/* Dager igjen nedtelling */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto mb-8">
              {[
                { value: timeLeft.days, label: 'Dager' },
                { value: timeLeft.hours, label: 'Timer' },
                { value: timeLeft.minutes, label: 'Min' },
                { value: timeLeft.seconds, label: 'Sek' },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-mono mb-0.5">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-emerald-300 text-[10px] sm:text-xs font-medium uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-emerald-300/70 text-xs mb-8">Tid igjen til Eid al-Fitr</p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <Coffee className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                <p className="text-[10px] text-emerald-300 uppercase tracking-wider mb-1">Suhoor</p>
                <p className="font-bold text-white text-sm">Før Fajr</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <Sun className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                <p className="text-[10px] text-emerald-300 uppercase tracking-wider mb-1">Faste</p>
                <p className="font-bold text-white text-sm">Fajr &ndash; Maghrib</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <Moon className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                <p className="text-[10px] text-emerald-300 uppercase tracking-wider mb-1">Taraweeh</p>
                <p className="font-bold text-white text-sm">Etter Isha 19:30</p>
              </div>
            </div>

            {/* Motivational message based on stage of Ramadan */}
            <div className="text-center">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 max-w-2xl mx-auto">
                {currentDay <= 10 ? (
                  <>
                    <p className="text-emerald-100 italic text-sm sm:text-base leading-relaxed">
                      &laquo;De første 10 dagene av Ramadan er <span className="text-gold-400 font-semibold">barmhjertighet</span> (Rahma)&raquo;
                    </p>
                    <p className="text-emerald-400 text-xs mt-2">1. tredjedel — Barmhjertighetens dager</p>
                  </>
                ) : currentDay <= 20 ? (
                  <>
                    <p className="text-emerald-100 italic text-sm sm:text-base leading-relaxed">
                      &laquo;De neste 10 dagene av Ramadan er <span className="text-gold-400 font-semibold">tilgivelse</span> (Maghfira)&raquo;
                    </p>
                    <p className="text-emerald-400 text-xs mt-2">2. tredjedel — Tilgivelsens dager</p>
                  </>
                ) : (
                  <>
                    <p className="text-emerald-100 italic text-sm sm:text-base leading-relaxed">
                      &laquo;De siste 10 dagene av Ramadan er <span className="text-gold-400 font-semibold">beskyttelse fra ilden</span> (Najah)&raquo;
                    </p>
                    <p className="text-emerald-400 text-xs mt-2">3. tredjedel — Søk Laylatul Qadr i de odde nettene</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── Before Ramadan (countdown to start) ──
  return (
    <section className="py-14 md:py-20 bg-cream-50">
      <div className="container-custom px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-gold-500" />
              <span className="text-emerald-900 font-semibold text-sm uppercase tracking-wider">
                Nedtelling til Ramadan {ramadanYear}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-900 mb-3">
              Ramadan <span className="text-gold-500">{ramadanYear}</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Forbered deg på den mest velsignede måneden
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 max-w-2xl mx-auto mb-10">
            {[
              { value: timeLeft.days, label: 'Dager' },
              { value: timeLeft.hours, label: 'Timer' },
              { value: timeLeft.minutes, label: 'Minutter' },
              { value: timeLeft.seconds, label: 'Sekunder' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-md border border-gray-100 text-center">
                <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-emerald-900 mb-0.5 sm:mb-1 font-mono">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-gray-500 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Quick Info */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 sm:p-6 md:p-8 max-w-2xl mx-auto mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-5 h-5 text-emerald-900" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Suhoor</p>
                  <p className="font-bold text-emerald-900">Før Fajr</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sun className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Faste</p>
                  <p className="font-bold text-emerald-900">Fajr &ndash; Maghrib</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-end">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Moon className="w-5 h-5 text-emerald-900" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Iftar</p>
                  <p className="font-bold text-emerald-900">Ved Maghrib</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/ramadan"
              className="inline-flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
            >
              <BookOpen className="w-4 h-4" />
              <span>Les mer om Ramadan {ramadanYear}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
