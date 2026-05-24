import { ReactNode } from 'react';

interface LegalShellProps {
  eyebrow: string;
  title: string;
  arabicTitle?: string;
  lead: string;
  children: ReactNode;
  lastUpdated: string;
}

export function LegalShell({ eyebrow, title, arabicTitle, lead, children, lastUpdated }: LegalShellProps) {
  return (
    <>
      {/* Dark hero */}
      <section className="relative isolate overflow-hidden bg-[#0c2a1a] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1b5e20_0%,#0c2a1a_60%,#06150d_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: HERO_PATTERN_URI, backgroundSize: '180px 180px' }}
        />
        <div aria-hidden className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#D4AF37]/15 blur-[120px]" />

        <div className="container-custom relative px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#D4AF37]/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E6C547]">
                {eyebrow}
              </span>
              <span className="h-px w-8 bg-[#D4AF37]/60" />
            </div>
            <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            {arabicTitle && (
              <p className="mt-3 font-arabic text-2xl text-[#E9D08A] sm:text-3xl" dir="rtl">
                {arabicTitle}
              </p>
            )}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {lead}
            </p>
          </div>
        </div>

        {/* Soft transition into cream body */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-[#0c2a1a]/60 to-[#F9F5EB]"
        />
      </section>

      {/* Cream body */}
      <section className="relative bg-[#F9F5EB] py-16 sm:py-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: BODY_PATTERN_URI, backgroundSize: '160px 160px' }}
        />
        <div className="container-custom relative px-4">
          <article className="legal-prose mx-auto max-w-3xl">
            {children}
            <hr className="my-10 border-t border-[#D4AF37]/30" />
            <p className="text-sm text-[#0c2a1a]/55">
              Sist oppdatert: <span className="font-medium text-[#0c2a1a]/80">{lastUpdated}</span>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

const HERO_PATTERN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'>
  <g fill='none' stroke='%23D4AF37' stroke-width='0.8'>
    <path d='M90 10 L110 50 L150 50 L120 80 L130 130 L90 100 L50 130 L60 80 L30 50 L70 50 Z' />
    <circle cx='90' cy='90' r='6' />
  </g>
</svg>`;
const HERO_PATTERN_URI = `url("data:image/svg+xml;utf8,${HERO_PATTERN_SVG.replace(/\n/g, '').replace(/  +/g, ' ')}")`;

const BODY_PATTERN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>
  <g fill='none' stroke='%231B5E20' stroke-width='0.6'>
    <path d='M80 10 L98 44 L132 44 L106 70 L114 110 L80 86 L46 110 L54 70 L28 44 L62 44 Z' />
    <circle cx='80' cy='80' r='3' />
  </g>
</svg>`;
const BODY_PATTERN_URI = `url("data:image/svg+xml;utf8,${BODY_PATTERN_SVG.replace(/\n/g, '').replace(/  +/g, ' ')}")`;
