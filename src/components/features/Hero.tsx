'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Clock, Users, MessageCircle, Moon, ArrowRight, Sparkles, Smartphone } from 'lucide-react';
import { config } from '@/lib/config';

const norwayTimeFormatter = new Intl.DateTimeFormat('nb-NO', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZone: 'Europe/Oslo',
});

function getRamadanState(now: Date) {
  const ramadanStart = new Date('2026-02-18T00:00:00+01:00');
  const ramadanEnd = new Date('2026-03-19T23:59:59+01:00');
  const isRamadan = now >= ramadanStart && now <= ramadanEnd;

  return {
    isRamadan,
    ramadanDay: isRamadan
      ? Math.floor((now.getTime() - ramadanStart.getTime()) / (1000 * 60 * 60 * 24)) + 1
      : 0,
  };
}

export function Hero() {
  const [currentTime, setCurrentTime] = useState<Date>(() => new Date());
  const [seasonalState, setSeasonalState] = useState(() => getRamadanState(new Date()));
  const [showRamadanContent, setShowRamadanContent] = useState(false);
  const { isRamadan, ramadanDay } = seasonalState;

  useEffect(() => {
    const updateTimeState = () => {
      const now = new Date();
      setCurrentTime(now);
      setSeasonalState(getRamadanState(now));
    };

    updateTimeState();

    const timer = setInterval(updateTimeState, 1000);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        updateTimeState();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!isRamadan) {
      setShowRamadanContent(false);
      return;
    }

    // Intentional cinematic delay so users can perceive the transition.
    const transitionTimer = setTimeout(() => {
      setShowRamadanContent(true);
    }, 700);

    return () => clearTimeout(transitionTimer);
  }, [isRamadan]);

  const displayRamadan = isRamadan && showRamadanContent;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/mosque/inside_image.png"
          alt="Lillehammer Moske - Interiør"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-900/80 to-emerald-900/60"></div>
      </div>

      <div className="relative container-custom py-16 sm:py-20 md:py-28 px-4">
        <div className="max-w-3xl">
          <div className="w-full text-left">
            {/* Ramadan-aware badge */}
            <div className="relative mb-6 min-h-[44px] sm:mb-8">
              <motion.div
                initial={false}
                animate={{ opacity: displayRamadan ? 0 : 1, y: displayRamadan ? -6 : 0 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                className="absolute left-0 top-0"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-5 py-2 backdrop-blur-sm">
                  <Moon className="w-4 h-4 text-gold-400" />
                  <span className="text-sm font-medium text-white/90">Siden 2005 &middot; Lillehammer</span>
                </div>
              </motion.div>

              <motion.div
                initial={false}
                animate={{ opacity: displayRamadan ? 1 : 0, y: displayRamadan ? 0 : 6 }}
                transition={{ duration: 0.65, ease: 'easeInOut' }}
                className="absolute left-0 top-0"
              >
                <motion.div
                  initial={false}
                  animate={{
                    boxShadow: displayRamadan
                      ? [
                          '0 0 0 rgba(245, 158, 11, 0.00)',
                          '0 0 24px rgba(245, 158, 11, 0.18)',
                          '0 0 10px rgba(245, 158, 11, 0.10)',
                        ]
                      : '0 0 0 rgba(245, 158, 11, 0)',
                  }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/20 px-5 py-2 ring-1 ring-gold-300/20 backdrop-blur-sm"
                >
                  <Moon className="w-4 h-4 text-gold-400" />
                  <span className="text-sm font-medium text-gold-300">Ramadan Mubarak &middot; Dag {ramadanDay}</span>
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                </motion.div>
              </motion.div>
            </div>

            <h1 className="relative mb-6 min-h-[168px] text-left text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:min-h-[208px] sm:text-5xl md:min-h-[236px] md:text-6xl lg:text-7xl">
              <motion.span
                initial={false}
                animate={{ opacity: displayRamadan ? 0 : 1, y: displayRamadan ? -8 : 0 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                className="absolute left-0 top-0 block w-full"
              >
                <span className="block">Velkommen til</span>
                <span className="mt-2 block text-left text-gold-400">Lillehammer Moske</span>
              </motion.span>

              <motion.span
                initial={false}
                animate={{ opacity: displayRamadan ? 1 : 0, y: displayRamadan ? 0 : 8 }}
                transition={{ duration: 0.65, ease: 'easeInOut' }}
                className="absolute left-0 top-0 block w-full"
              >
                <span className="block">Ramadan Kareem</span>
                <span className="mt-2 block text-left text-gold-400" lang="ar">رَمَضَانَ كَرِيم</span>
              </motion.span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-2 sm:mb-3 max-w-2xl">
            The Muslim Cultural Center
          </p>
          
          <div className="mb-6 min-h-[84px] max-w-xl sm:mb-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={displayRamadan ? 'ramadan-description' : 'default-description'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.65, ease: 'easeInOut' }}
                className="text-base sm:text-lg text-white/70 leading-relaxed"
              >
                {displayRamadan
                  ? 'Isha-bønn kl. 20:00 etterfulgt av Taraweeh. Velkommen til fellesskap, bønn og iftar.'
                  : 'Et fellesskap for muslimer i Lillehammer og omegn. Vi er her for deg, hver dag, hele året.'}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Current Time */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-3 border border-white/15 mb-8 sm:mb-10">
            <Clock className="w-5 h-5 text-gold-400" />
            <div>
              <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Nåværende tid</p>
              <p className="text-lg sm:text-xl font-bold font-mono text-white" suppressHydrationWarning>
                {norwayTimeFormatter.format(currentTime)}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Link
              href="/prayer-times"
              className="btn-secondary inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Se Bønnetider</span>
            </Link>
            <Link
              href="/ramadan"
              className="bg-gold-500/20 backdrop-blur-sm border-2 border-gold-500/30 text-white hover:bg-gold-500 hover:text-white px-6 sm:px-8 py-3.5 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-colors"
            >
              <Moon className="w-5 h-5" />
              <span>{displayRamadan ? 'Ramadan-side' : 'Ramadan 2026'}</span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
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
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
