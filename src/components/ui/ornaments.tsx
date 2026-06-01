import { CSSProperties } from 'react';

/* ------------------------------------------------------------------ */
/* Background patterns (embedded as data URIs so there are no extra    */
/* network requests and they scale crisply at any size).              */
/* ------------------------------------------------------------------ */

function patternUri(svg: string): string {
  return `url("data:image/svg+xml;utf8,${svg.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim()}")`;
}

// Eight-point khatim star tessellation, gold stroke (for dark bands)
const STAR_GOLD = patternUri(`<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'>
  <g fill='none' stroke='%23D4AF37' stroke-width='0.8'>
    <path d='M90 8 L112 50 L154 50 L122 82 L134 134 L90 104 L46 134 L58 82 L26 50 L68 50 Z' />
    <circle cx='90' cy='90' r='6' />
    <path d='M0 90 L22 50 L44 90 L22 130 Z' opacity='0.5' />
    <path d='M180 90 L158 50 L136 90 L158 130 Z' opacity='0.5' />
  </g>
</svg>`);

// Same motif, emerald stroke (for cream bands)
const STAR_EMERALD = patternUri(`<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'>
  <g fill='none' stroke='%231B5E20' stroke-width='0.7'>
    <path d='M90 8 L112 50 L154 50 L122 82 L134 134 L90 104 L46 134 L58 82 L26 50 L68 50 Z' />
    <circle cx='90' cy='90' r='5' />
    <path d='M0 90 L22 50 L44 90 L22 130 Z' opacity='0.5' />
    <path d='M180 90 L158 50 L136 90 L158 130 Z' opacity='0.5' />
  </g>
</svg>`);

type PatternTone = 'gold' | 'emerald';

interface PatternOverlayProps {
  tone?: PatternTone;
  opacity?: number;
  size?: number;
  className?: string;
}

/** Subtle tessellated geometric pattern, absolutely positioned to fill its parent. */
export function PatternOverlay({ tone = 'gold', opacity = 0.07, size = 180, className = '' }: PatternOverlayProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: tone === 'gold' ? STAR_GOLD : STAR_EMERALD,
        backgroundSize: `${size}px ${size}px`,
        opacity,
      }}
    />
  );
}

interface GlowProps {
  className?: string;
  color?: string;
  style?: CSSProperties;
}

/** Soft blurred radial glow orb for atmospheric depth. */
export function Glow({ className = '', color = 'rgba(212,175,55,0.15)', style }: GlowProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[120px] ${className}`}
      style={{ background: color, ...style }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Vector ornaments                                                    */
/* ------------------------------------------------------------------ */

export function EightPointStar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0l2.85 6.36L21 5l-2.79 6L21 19l-6.36-2.85L12 22l-2.64-5.85L3 19l2.79-7.79L3 5l6.36 1.36L12 0z" />
    </svg>
  );
}

interface StarDividerProps {
  tone?: 'gold' | 'cream' | 'emerald';
  className?: string;
}

/** A hairline rule with a centered eight-point star — the signature divider. */
export function StarDivider({ tone = 'gold', className = '' }: StarDividerProps) {
  const line =
    tone === 'emerald'
      ? 'via-[#1B5E20]/40'
      : tone === 'cream'
        ? 'via-white/40'
        : 'via-[#D4AF37]/60';
  const star = tone === 'emerald' ? 'text-[#1B5E20]' : tone === 'cream' ? 'text-white' : 'text-[#D4AF37]';
  return (
    <div className={`mx-auto flex max-w-xs items-center gap-3 ${className}`}>
      <span className={`h-px flex-1 bg-gradient-to-r from-transparent ${line} to-transparent`} />
      <EightPointStar className={`h-3.5 w-3.5 ${star}`} />
      <span className={`h-px flex-1 bg-gradient-to-r from-transparent ${line} to-transparent`} />
    </div>
  );
}

/** Crescent + small star ornament. */
export function CrescentStar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden>
      <path d="M68 18a35 35 0 1 0 0 64 27 27 0 1 1 0-64z" fill="currentColor" fillOpacity="0.85" />
      <g transform="translate(80 38)">
        <path d="M0 -7 L1.7 -2.2 L7 -2.2 L2.8 1 L4.4 6 L0 3 L-4.4 6 L-2.8 1 L-7 -2.2 L-1.7 -2.2 Z" fill="currentColor" />
      </g>
    </svg>
  );
}

/** A pointed Islamic arch outline, used to frame hero content. */
export function ArchFrame({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 260"
      className={`pointer-events-none ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
    >
      <path d="M36 250 V128 Q300 -34 564 128 V250" />
      <path d="M58 250 V136 Q300 -14 542 136 V250" opacity="0.45" />
      <circle cx="300" cy="44" r="2.5" fill="currentColor" />
    </svg>
  );
}

interface SkylineProps {
  className?: string;
  /** the color the silhouette fades down into (matches the band below) */
  fadeTo?: string;
}

/** A mosque/city skyline silhouette that fades into the next band. */
export function MosqueSkyline({ className = '', fadeTo = '#06150d' }: SkylineProps) {
  return (
    <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className={className} aria-hidden>
      <defs>
        <linearGradient id={`sky-${fadeTo.replace('#', '')}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={fadeTo} stopOpacity="0" />
          <stop offset="100%" stopColor={fadeTo} stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        d="M0 200 L0 150 L60 150 L60 130 L80 130 L80 150 L160 150 L160 100 L170 90 L180 100 L180 150 L260 150 L260 110 L290 70 Q300 60 310 70 L340 110 L340 150 L430 150 L430 120 L450 110 L470 120 L470 150 L560 150 L560 90 L590 60 Q600 50 610 60 L640 90 L640 150 L740 150 L740 130 L760 130 L760 150 L840 150 L840 100 L860 80 L880 100 L880 150 L970 150 L970 80 Q1000 40 1030 80 L1030 150 L1130 150 L1130 110 L1150 100 L1170 110 L1170 150 L1260 150 L1260 130 L1280 130 L1280 150 L1360 150 L1360 100 L1380 90 L1400 100 L1400 150 L1440 150 L1440 200 Z"
        fill={`url(#sky-${fadeTo.replace('#', '')})`}
      />
    </svg>
  );
}

/** Soft gradient seam to blend one band into the next (avoids hard color slams). */
export function BandSeam({ from = 'transparent', to = '#f9f5eb', className = '' }: { from?: string; to?: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 ${className}`}
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    />
  );
}
