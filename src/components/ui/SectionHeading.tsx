import { EightPointStar } from './ornaments';

type Tone = 'ink' | 'cream';

interface SectionHeadingProps {
  eyebrow?: string;
  arabic?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: Tone;
  align?: 'center' | 'left';
  className?: string;
}

/**
 * Consistent section header: small gold eyebrow flanked by hairlines,
 * optional Amiri Arabic line, a Fraunces display title, and a lead.
 */
export function SectionHeading({
  eyebrow,
  arabic,
  title,
  lead,
  tone = 'cream',
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isInk = tone === 'ink';
  const eyebrowColor = isInk ? 'text-[#E6C547]' : 'text-[#9A7A15]';
  const ruleColor = isInk ? 'bg-[#D4AF37]/60' : 'bg-[#D4AF37]/70';
  const titleColor = isInk ? 'text-white' : 'text-[#0c2a1a]';
  const arabicColor = isInk ? 'text-[#E9D08A]' : 'text-[#1B5E20]';
  const leadColor = isInk ? 'text-white/75' : 'text-[#3a3a32]';
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center items-center' : 'max-w-3xl text-left items-start';

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-3">
          {align === 'center' && <span className={`h-px w-8 ${ruleColor}`} />}
          <span className={`text-xs font-semibold uppercase tracking-[0.32em] ${eyebrowColor}`}>
            {eyebrow}
          </span>
          <span className={`h-px w-8 ${ruleColor}`} />
        </div>
      )}
      {arabic && (
        <p className={`mt-4 font-arabic text-3xl leading-tight sm:text-4xl ${arabicColor}`} dir="rtl">
          {arabic}
        </p>
      )}
      <h2 className={`font-display mt-3 text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${leadColor}`}>{lead}</p>
      )}
      {align === 'center' && (
        <div className="mt-6 flex items-center gap-2">
          <span className={`h-px w-10 ${ruleColor}`} />
          <EightPointStar className={`h-3 w-3 ${isInk ? 'text-[#D4AF37]' : 'text-[#D4AF37]'}`} />
          <span className={`h-px w-10 ${ruleColor}`} />
        </div>
      )}
    </div>
  );
}
