import { ReactNode } from 'react';
import { PatternOverlay, Glow, EightPointStar, CrescentStar, MosqueSkyline } from './ornaments';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  /** Arabic line shown above the title (Amiri) */
  arabic?: string;
  lead?: ReactNode;
  children?: ReactNode;
  /** color the bottom seam fades into — match the band that follows */
  seamTo?: string;
  /** show the bottom mosque skyline silhouette */
  skyline?: boolean;
}

/**
 * The shared dark hero used at the top of every sub-page. Deep emerald
 * radial field, gold geometric pattern, a drifting crescent, framed
 * title, and a soft seam into the next section.
 */
export function PageHero({
  eyebrow,
  title,
  arabic,
  lead,
  children,
  seamTo = '#f9f5eb',
  skyline = false,
}: PageHeroProps) {
  return (
    <section className="band band-ink isolate">
      <PatternOverlay tone="gold" opacity={0.07} />
      <Glow className="-top-32 -right-24 h-[26rem] w-[26rem]" color="rgba(212,175,55,0.16)" />
      <Glow className="top-10 -left-32 h-[24rem] w-[24rem]" color="rgba(27,94,32,0.22)" />

      <div className="absolute right-5 top-8 hidden h-28 w-28 text-[#D4AF37]/50 animate-float-slow sm:block md:right-12 md:h-36 md:w-36">
        <CrescentStar className="h-full w-full" />
      </div>

      <div className="container-custom relative px-4 py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#D4AF37]/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E6C547]">
                {eyebrow}
              </span>
              <span className="h-px w-8 bg-[#D4AF37]/60" />
            </div>
          )}

          {arabic && (
            <p className="mb-4 font-arabic text-3xl text-[#E9D08A] sm:text-4xl" dir="rtl">
              {arabic}
            </p>
          )}

          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>

          {lead && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {lead}
            </p>
          )}

          <div className="mt-7 flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-[#D4AF37]/50" />
            <EightPointStar className="h-3 w-3 text-[#D4AF37]" />
            <span className="h-px w-12 bg-[#D4AF37]/50" />
          </div>

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>

      {skyline && (
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40">
          <MosqueSkyline className="h-full w-full" fadeTo="#06150d" />
        </div>
      )}

      {/* Soft seam into the next band */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{ background: `linear-gradient(to bottom, transparent, ${seamTo})` }}
      />
    </section>
  );
}
