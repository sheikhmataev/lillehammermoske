'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Clock, MessageCircle, Moon, ArrowRight, Smartphone, UserPlus } from 'lucide-react';
import { config } from '@/lib/config';
import { PatternOverlay, Glow, EightPointStar, CrescentStar, MosqueSkyline, ArchFrame } from '@/components/ui/ornaments';

const norwayTimeFormatter = new Intl.DateTimeFormat('nb-NO', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZone: 'Europe/Oslo',
});

const hijriDayFormatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', { day: 'numeric', timeZone: 'Europe/Oslo' });
const hijriMonthFormatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', { month: 'long', timeZone: 'Europe/Oslo' });
const hijriYearFormatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', { year: 'numeric', timeZone: 'Europe/Oslo' });
const gregorianDateFormatter = new Intl.DateTimeFormat('nb-NO', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Oslo',
});

export function Hero() {
  const [currentTime, setCurrentTime] = useState<Date>(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') setCurrentTime(new Date());
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const hijriDay = hijriDayFormatter.format(currentTime);
  const hijriMonth = hijriMonthFormatter.format(currentTime);
  const hijriYear = hijriYearFormatter.format(currentTime);
  const gregorianDate = gregorianDateFormatter.format(currentTime);

  return (
    <section className="band band-ink isolate min-h-[90vh] flex items-center">
      <PatternOverlay tone="gold" opacity={0.08} />
      <Glow className="-top-40 -right-32 h-[34rem] w-[34rem]" color="rgba(212,175,55,0.16)" />
      <Glow className="bottom-0 -left-40 h-[30rem] w-[30rem]" color="rgba(27,94,32,0.28)" />

      {/* Drifting crescent */}
      <div className="absolute right-6 top-16 hidden h-32 w-32 text-[#D4AF37]/45 animate-float-slow sm:block md:right-20 md:h-44 md:w-44">
        <CrescentStar className="h-full w-full" />
      </div>

      <div className="container-custom relative w-full px-4 py-24 sm:py-28 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D4AF37]/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[#E6C547]">
              The Muslim Cultural Center · Siden 2005
            </span>
            <span className="h-px w-10 bg-[#D4AF37]/60" />
          </div>

          {/* Arabic + arch-framed title */}
          <p className="mb-3 font-arabic text-2xl text-[#E9D08A] sm:text-3xl" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          <div className="relative mx-auto flex max-w-3xl items-center justify-center">
            <ArchFrame className="absolute inset-0 h-full w-full text-[#D4AF37]/25" />
            <h1 className="font-display relative text-5xl font-semibold leading-[1.04] tracking-tight text-white text-balance sm:text-6xl md:text-7xl">
              Lillehammer
              <span className="mt-1 block text-gold-gradient">Moske</span>
            </h1>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Et hjem for bønn, kunnskap og fellesskap i Lillehammer og omegn — hver dag, hele året.
          </p>

          {/* Live info pills */}
          <div className="mt-9 flex flex-wrap items-stretch justify-center gap-3">
            <InfoPill icon={<Moon className="h-5 w-5" />} label="Islamsk dato">
              <span className="font-arabic text-base" dir="rtl" suppressHydrationWarning>
                {hijriDay} {hijriMonth} {hijriYear}
              </span>
            </InfoPill>
            <InfoPill icon={<Clock className="h-5 w-5" />} label="Klokken nå">
              <span className="font-mono text-lg font-bold" suppressHydrationWarning>
                {norwayTimeFormatter.format(currentTime)}
              </span>
            </InfoPill>
            <InfoPill icon={<Calendar className="h-5 w-5" />} label="Jummah fredag" highlight>
              <span className="text-sm font-semibold">
                Khutbah {config.jummah.khutbah} · Iqamah {config.jummah.jamat}
              </span>
            </InfoPill>
          </div>

          <p className="mt-4 text-xs tracking-wide text-white/40 sm:text-sm" suppressHydrationWarning>
            <span className="capitalize">{gregorianDate}</span> · Bønnetider fra IRN
          </p>

          <div className="mt-7 flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-[#D4AF37]/50" />
            <EightPointStar className="h-3 w-3 text-[#D4AF37]" />
            <span className="h-px w-12 bg-[#D4AF37]/50" />
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/prayer-times"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#E6C547] to-[#B8941F] px-7 py-3.5 font-semibold text-[#0c2a1a] shadow-[0_8px_30px_-8px_rgba(212,175,55,0.6)] transition-transform hover:-translate-y-0.5"
            >
              <Calendar className="h-5 w-5" />
              Se bønnetider
            </Link>
            <a
              href="https://forms.gle/XFiqQsontqLdpiMP9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <UserPlus className="h-5 w-5 text-[#E6C547]" />
              Bli medlem
            </a>
            <a
              href="https://qr.vipps.no/28/2/05/031/4p3k_Hf7g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Smartphone className="h-5 w-5 text-[#E6C547]" />
              Støtt moskéen
            </a>
            <a
              href={config.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
              WhatsApp-gruppe
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Skyline + seam into the cream PrayerTimes band */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40">
        <MosqueSkyline className="h-full w-full" fadeTo="#06150d" />
      </div>
    </section>
  );
}

function InfoPill({
  icon,
  label,
  children,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 backdrop-blur-sm ${
        highlight ? 'border-[#D4AF37]/30 bg-[#D4AF37]/10' : 'border-white/15 bg-white/5'
      }`}
    >
      <span className="flex-shrink-0 text-[#E6C547]">{icon}</span>
      <div className="text-left">
        <p className="text-[10px] uppercase tracking-wider text-white/50 sm:text-xs">{label}</p>
        <div className="text-white">{children}</div>
      </div>
    </div>
  );
}
