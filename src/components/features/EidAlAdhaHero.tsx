'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, Coffee } from 'lucide-react';
import { EID_PRAYER_TIME } from '@/lib/eid';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
}

function calcCountdown(now: Date): Countdown {
  const diff = EID_PRAYER_TIME.getTime() - now.getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
  }
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff / 3_600_000) % 24);
  const minutes = Math.floor((diff / 60_000) % 60);
  const seconds = Math.floor((diff / 1_000) % 60);
  return { days, hours, minutes, seconds, finished: false };
}

export function EidAlAdhaHero() {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const countdown = useMemo(() => calcCountdown(now), [now]);

  return (
    <section
      dir="ltr"
      className="relative isolate overflow-hidden bg-[#0c2a1a] text-white"
      aria-label="Eid al-Adha 1447 / 2026"
    >
      {/* Layered backgrounds */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1b5e20_0%,#0c2a1a_60%,#06150d_100%)]"
      />
      {/* Geometric tessellation */}
      <div aria-hidden className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: ISLAMIC_PATTERN_URI, backgroundSize: '180px 180px' }} />
      {/* Soft gold glows */}
      <div aria-hidden className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#D4AF37]/15 blur-[120px]" />
      <div aria-hidden className="absolute top-1/2 -left-40 h-[26rem] w-[26rem] rounded-full bg-emerald-500/10 blur-[120px]" />
      {/* Drifting crescent */}
      <motion.div
        aria-hidden
        className="absolute right-6 top-10 hidden h-40 w-40 text-[#D4AF37] sm:block md:right-16 md:top-16 md:h-52 md:w-52"
        initial={{ opacity: 0, y: -10, rotate: -8 }}
        animate={{ opacity: 0.55, y: 0, rotate: 0 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
      >
        <CrescentStar />
      </motion.div>

      <div className="container-custom relative px-4 pb-24 pt-20 sm:pt-24 md:pt-28">
        {/* Header eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-max items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#E6C547]">
            Eid al-Adha · 1447 H
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
        </motion.div>

        {/* Arched calligraphy */}
        <div className="relative mt-10 sm:mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex max-w-3xl items-center justify-center"
          >
            <ArchFrame />
            <h1
              dir="rtl"
              lang="ar"
              className="relative font-arabic text-[clamp(3.5rem,12vw,7.5rem)] font-bold leading-[1.1] text-[#E9D08A] [text-shadow:0_2px_30px_rgba(212,175,55,0.35)]"
            >
              عيد مبارك
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-center text-sm font-semibold uppercase tracking-[0.45em] text-white/80 sm:text-base"
          >
            Eid&nbsp;Mubarak
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mx-auto mt-6 flex max-w-md items-center gap-3"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]/60" />
            <EightPointStar className="h-4 w-4 text-[#D4AF37]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]/60" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Hele Lillehammer Moske ønsker familien din en velsignet og fredfull
            Offerfest.
          </motion.p>
        </div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          {countdown.finished ? (
            <div className="rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-6 text-center backdrop-blur-md">
              <p className="font-arabic text-2xl text-[#E9D08A]">تقبل الله منا ومنكم</p>
              <p className="mt-2 text-sm text-white/80">
                Taqabbal Allahu minna wa minkum — må Allah akseptere fra oss og dere.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-[#D4AF37]/25 bg-white/[0.04] p-5 backdrop-blur-md sm:p-6">
              <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-[#E6C547]/80">
                Eid-bønn starter om
              </p>
              <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-4">
                <TimeBlock value={countdown.days} label="Dager" />
                <TimeBlock value={countdown.hours} label="Timer" />
                <TimeBlock value={countdown.minutes} label="Minutter" />
                <TimeBlock value={countdown.seconds} label="Sekunder" pulse />
              </div>
            </div>
          )}
        </motion.div>

        {/* Practical info cards */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 1.1 } } }}
          className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3"
        >
          <InfoCard
            icon={<Calendar className="h-5 w-5" />}
            eyebrow="Dato & tid"
            title="Onsdag 27. mai"
            lines={['Iqamah kl. 09:30', 'Deretter khutbah']}
          />
          <InfoCard
            icon={<MapPin className="h-5 w-5" />}
            eyebrow="Sted"
            title="Gymsalen, Jorekstad"
            lines={['Jøstadmovegen 690']}
            cta={{
              label: 'Få veibeskrivelse',
              href: 'https://www.google.com/maps/dir/?api=1&destination=Jorekstad+Lillehammer',
            }}
          />
          <InfoCard
            icon={<Sparkles className="h-5 w-5" />}
            eyebrow="Husk å ta med"
            title="Bønneteppe"
            lines={['Lett servering etterpå']}
            secondIcon={<Coffee className="h-4 w-4" />}
          />
        </motion.div>

        {/* Quran verse */}
        <motion.figure
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mx-auto mt-16 max-w-3xl rounded-3xl border border-[#D4AF37]/15 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.10)_0%,rgba(255,255,255,0)_60%)] px-6 py-10 text-center sm:px-10"
        >
          <div className="mx-auto flex max-w-xs items-center gap-3">
            <span className="h-px flex-1 bg-[#D4AF37]/30" />
            <EightPointStar className="h-3 w-3 text-[#D4AF37]" />
            <span className="h-px flex-1 bg-[#D4AF37]/30" />
          </div>
          <blockquote
            dir="rtl"
            lang="ar"
            className="mt-6 font-arabic text-2xl leading-[2.4] text-[#F5E9C3] sm:text-3xl sm:leading-[2.4]"
          >
            لَن يَنَالَ ٱللَّهَ لُحُومُهَا وَلَا دِمَآؤُهَا وَلَـٰكِن يَنَالُهُ ٱلتَّقْوَىٰ مِنكُمْ
          </blockquote>
          <figcaption className="mx-auto mt-6 max-w-xl text-base italic leading-relaxed text-white/75 sm:text-lg">
            «Verken kjøttet eller blodet [av offerdyrene] når Allah, men det er
            deres gudsfrykt som når Ham.»
            <span className="mt-3 block not-italic text-sm uppercase tracking-[0.32em] text-[#E6C547]/80">
              Sūra al-Ḥajj 22:37
            </span>
          </figcaption>
        </motion.figure>
      </div>

      {/* Bottom mosque silhouette + transition fade */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-48">
        <MosqueSkyline />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

/* -------------------- subcomponents -------------------- */

function TimeBlock({ value, label, pulse = false }: { value: number; label: string; pulse?: boolean }) {
  return (
    <div className="relative rounded-xl border border-[#D4AF37]/15 bg-black/20 px-2 py-3 text-center sm:px-3 sm:py-4">
      <span
        suppressHydrationWarning
        className={`block font-arabic text-3xl font-bold tabular-nums text-[#F5E9C3] sm:text-4xl ${
          pulse ? 'animate-pulse [animation-duration:1s]' : ''
        }`}
      >
        {value.toString().padStart(2, '0')}
      </span>
      <span className="mt-1 block text-[0.625rem] uppercase tracking-[0.2em] text-white/55 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  lines: string[];
  cta?: { label: string; href: string };
  secondIcon?: React.ReactNode;
}

function InfoCard({ icon, eyebrow, title, lines, cta, secondIcon }: InfoCardProps) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-colors hover:border-[#D4AF37]/35 sm:p-6"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#E6C547]">
          {icon}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E6C547]/80">
          {eyebrow}
        </span>
      </div>
      <p className="mt-4 text-xl font-semibold text-white sm:text-2xl">{title}</p>
      <ul className="mt-2 space-y-1 text-sm text-white/70">
        {lines.map((l, i) => (
          <li key={l} className="flex items-center gap-2">
            {i === 1 && secondIcon}
            <span>{l}</span>
          </li>
        ))}
      </ul>
      {cta && (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#E6C547] hover:text-white"
        >
          {cta.label}
          <span aria-hidden>→</span>
        </a>
      )}
    </motion.div>
  );
}

function EightPointStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0l2.85 6.36L21 5l-2.79 6L21 19l-6.36-2.85L12 22l-2.64-5.85L3 19l2.79-7.79L3 5l6.36 1.36L12 0z" />
    </svg>
  );
}

function CrescentStar() {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M68 18a35 35 0 1 0 0 64 27 27 0 1 1 0-64z" fill="currentColor" fillOpacity="0.85" />
      <g transform="translate(78 38)">
        <path d="M0 -8 L1.9 -2.5 L8 -2.5 L3.1 1 L4.9 7 L0 3.5 L-4.9 7 L-3.1 1 L-8 -2.5 L-1.9 -2.5 Z" fill="currentColor" />
      </g>
    </svg>
  );
}

function ArchFrame() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 240"
      className="pointer-events-none absolute inset-0 h-full w-full text-[#D4AF37]/30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M40 230 V120 Q300 -30 560 120 V230" />
      <path d="M60 230 V128 Q300 -10 540 128 V230" opacity="0.5" />
      <circle cx="300" cy="40" r="2.5" fill="currentColor" />
    </svg>
  );
}

function MosqueSkyline() {
  return (
    <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="silhouetteFade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#06150d" stopOpacity="0" />
          <stop offset="100%" stopColor="#06150d" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        d="M0 200 L0 150 L60 150 L60 130 L80 130 L80 150 L160 150 L160 100 L170 90 L180 100 L180 150 L260 150 L260 110 L290 70 Q300 60 310 70 L340 110 L340 150 L430 150 L430 120 L450 110 L470 120 L470 150 L560 150 L560 90 L590 60 Q600 50 610 60 L640 90 L640 150 L740 150 L740 130 L760 130 L760 150 L840 150 L840 100 L860 80 L880 100 L880 150 L970 150 L970 80 Q1000 40 1030 80 L1030 150 L1130 150 L1130 110 L1150 100 L1170 110 L1170 150 L1260 150 L1260 130 L1280 130 L1280 150 L1360 150 L1360 100 L1380 90 L1400 100 L1400 150 L1440 150 L1440 200 Z"
        fill="url(#silhouetteFade)"
      />
    </svg>
  );
}

/* Eight-point star tessellation, embedded as data URI to avoid extra assets */
const ISLAMIC_PATTERN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'>
  <g fill='none' stroke='%23D4AF37' stroke-width='0.8'>
    <path d='M90 10 L110 50 L150 50 L120 80 L130 130 L90 100 L50 130 L60 80 L30 50 L70 50 Z' />
    <path d='M0 90 L20 50 L60 50 L30 80 L40 130 L0 100 Z' />
    <path d='M180 90 L160 50 L120 50 L150 80 L140 130 L180 100 Z' />
    <path d='M90 180 L110 140 L150 140 L120 170' />
    <circle cx='90' cy='90' r='6' />
  </g>
</svg>`;
const ISLAMIC_PATTERN_URI = `url("data:image/svg+xml;utf8,${ISLAMIC_PATTERN_SVG.replace(/\n/g, '').replace(/  +/g, ' ')}")`;
