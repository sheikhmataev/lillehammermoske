'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, MessageCircle, Moon, ArrowRight, Smartphone, Star } from 'lucide-react';
import { config } from '@/lib/config';

const norwayTimeFormatter = new Intl.DateTimeFormat('nb-NO', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZone: 'Europe/Oslo',
});

const hijriDateFormatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Oslo',
});

const hijriDayFormatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', {
  day: 'numeric',
  timeZone: 'Europe/Oslo',
});

const hijriMonthFormatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', {
  month: 'long',
  timeZone: 'Europe/Oslo',
});

const hijriYearFormatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', {
  year: 'numeric',
  timeZone: 'Europe/Oslo',
});

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
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/mosque/inside_image.png"
          alt="Lillehammer Moske - Interiør"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-900/80 to-emerald-900/60" />
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative container-custom py-20 sm:py-24 md:py-32 lg:py-40 px-4">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm">
              <Star className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium text-white/90">Siden 2005 &middot; Lillehammer</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Velkommen til</span>
            <span className="mt-1 block text-gold-400">Lillehammer Moske</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/85 leading-relaxed mb-2 sm:mb-3 max-w-2xl">
            The Muslim Cultural Center
          </p>

          <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mb-8 sm:mb-10">
            Et fellesskap for muslimer i Lillehammer og omegn. Vi er her for deg, hver dag, hele året.
          </p>

          {/* Islamic Calendar & Time Cards */}
          <div className="flex flex-wrap gap-3 mb-8 sm:mb-10">
            {/* Hijri Date */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-3 border border-white/15">
              <Moon className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <div>
                <p className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Islamsk dato</p>
                <p className="text-sm sm:text-base font-semibold text-white font-arabic" dir="rtl" suppressHydrationWarning>
                  {hijriDay} {hijriMonth} {hijriYear}
                </p>
              </div>
            </div>

            {/* Current Time */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-3 border border-white/15">
              <Clock className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <div>
                <p className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Klokken nå</p>
                <p className="text-lg sm:text-xl font-bold font-mono text-white" suppressHydrationWarning>
                  {norwayTimeFormatter.format(currentTime)}
                </p>
              </div>
            </div>

            {/* Jummah */}
            <div className="flex items-center gap-3 bg-gold-500/10 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-3 border border-gold-500/20">
              <Calendar className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <div>
                <p className="text-[10px] sm:text-xs text-gold-300/70 uppercase tracking-wider">Jummah fredag</p>
                <p className="text-sm sm:text-base font-semibold text-gold-300">
                  Khutbah {config.jummah.khutbah} &middot; Iqamah {config.jummah.jamat}
                </p>
              </div>
            </div>
          </div>

          {/* Gregorian date */}
          <p className="text-xs sm:text-sm text-white/40 mb-6 sm:mb-8 capitalize" suppressHydrationWarning>
            {gregorianDate}
          </p>

          {/* CTA Buttons */}
          <div className="grid grid-cols-1 sm:flex sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Link
              href="/prayer-times"
              className="btn-secondary inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Se Bønnetider</span>
            </Link>
            <a
              href="https://qr.vipps.no/28/2/05/031/4p3k_Hf7g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FF5B24] hover:bg-[#E54A1F] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold transition-colors shadow-lg text-sm sm:text-base"
            >
              <Smartphone className="w-5 h-5" />
              <span>Støtt moskéen</span>
            </a>
            <a
              href={config.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold transition-colors shadow-lg text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp-gruppe</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
