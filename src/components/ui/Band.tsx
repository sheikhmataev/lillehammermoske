import { ReactNode } from 'react';
import { PatternOverlay, Glow } from './ornaments';

type Tone = 'ink' | 'cream' | 'parchment';

interface BandProps {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  /** size of vertical padding */
  size?: 'sm' | 'md' | 'lg';
  /** show the tessellated pattern overlay */
  pattern?: boolean;
  /** show soft gold/emerald glow orbs */
  glow?: boolean;
  id?: string;
}

const paddings: Record<NonNullable<BandProps['size']>, string> = {
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-20',
  lg: 'py-20 sm:py-28',
};

/**
 * A full-width themed section. Two main tones:
 *  - `ink`   : deep emerald radial background, light text (dramatic)
 *  - `cream` : warm parchment background, dark text (calm)
 * Both carry the shared geometric pattern + optional glow so the whole
 * site reads as one cohesive surface.
 */
export function Band({
  tone = 'cream',
  children,
  className = '',
  size = 'lg',
  pattern = true,
  glow = false,
  id,
}: BandProps) {
  const toneClass =
    tone === 'ink' ? 'band band-ink' : tone === 'parchment' ? 'band band-parchment' : 'band band-cream';
  const patternTone = tone === 'ink' ? 'gold' : 'emerald';
  const patternOpacity = tone === 'ink' ? 0.07 : 0.04;

  return (
    <section id={id} className={`${toneClass} ${paddings[size]} ${className}`}>
      {pattern && <PatternOverlay tone={patternTone} opacity={patternOpacity} />}
      {glow && tone === 'ink' && (
        <>
          <Glow className="-top-32 -right-32 h-[28rem] w-[28rem]" color="rgba(212,175,55,0.16)" />
          <Glow className="top-1/2 -left-40 h-[26rem] w-[26rem]" color="rgba(27,94,32,0.18)" />
        </>
      )}
      {glow && tone !== 'ink' && (
        <Glow className="-top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2" color="rgba(212,175,55,0.10)" />
      )}
      <div className="container-custom relative px-4">{children}</div>
    </section>
  );
}
