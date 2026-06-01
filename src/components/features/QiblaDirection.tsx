import { Compass, Navigation } from 'lucide-react';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EightPointStar } from '@/components/ui/ornaments';

const QIBLA_DEG = 135;

export function QiblaDirection() {
  // needle angle: 0° = up (North). SVG rotation clockwise.
  return (
    <Band tone="cream">
      <SectionHeading
        tone="cream"
        eyebrow="Retning til Kaaba"
        arabic="القبلة"
        title="Qibla fra Lillehammer"
        lead="Bønneretningen mot Kaaba i Mekka er omtrent 135° — sørøst."
      />

      <div className="mx-auto mt-14 grid max-w-5xl items-center gap-10 lg:grid-cols-2">
        {/* Compass */}
        <div className="flex flex-col items-center rounded-3xl border border-[#1B5E20]/10 bg-white/70 p-8 backdrop-blur-sm">
          <svg viewBox="0 0 240 240" className="h-64 w-64">
            <defs>
              <radialGradient id="qiblaFace" cx="50%" cy="40%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f4eddc" />
              </radialGradient>
              <linearGradient id="qiblaNeedle" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E6C547" />
                <stop offset="100%" stopColor="#B8941F" />
              </linearGradient>
            </defs>
            <circle cx="120" cy="120" r="112" fill="url(#qiblaFace)" stroke="#0c2a1a" strokeWidth="2" />
            <circle cx="120" cy="120" r="96" fill="none" stroke="#1B5E20" strokeOpacity="0.15" strokeWidth="1" />
            {/* ticks */}
            {Array.from({ length: 72 }).map((_, i) => {
              const a = (i * 5 * Math.PI) / 180;
              const major = i % 9 === 0;
              const r1 = 112;
              const r2 = major ? 98 : 105;
              return (
                <line
                  key={i}
                  x1={120 + r1 * Math.sin(a)}
                  y1={120 - r1 * Math.cos(a)}
                  x2={120 + r2 * Math.sin(a)}
                  y2={120 - r2 * Math.cos(a)}
                  stroke="#0c2a1a"
                  strokeOpacity={major ? 0.5 : 0.2}
                  strokeWidth={major ? 1.5 : 1}
                />
              );
            })}
            {/* cardinal labels */}
            <text x="120" y="32" textAnchor="middle" className="fill-[#0c2a1a] font-bold" fontSize="14">N</text>
            <text x="120" y="216" textAnchor="middle" className="fill-[#0c2a1a] font-bold" fontSize="14">S</text>
            <text x="216" y="125" textAnchor="middle" className="fill-[#0c2a1a] font-bold" fontSize="14">Ø</text>
            <text x="24" y="125" textAnchor="middle" className="fill-[#0c2a1a] font-bold" fontSize="14">V</text>

            {/* needle group rotated to Qibla */}
            <g transform={`rotate(${QIBLA_DEG} 120 120)`}>
              <polygon points="120,34 130,120 120,128 110,120" fill="url(#qiblaNeedle)" />
              <polygon points="120,206 130,120 120,112 110,120" fill="#0c2a1a" opacity="0.25" />
              <g transform="translate(120 44)">
                <path d="M0 -10 L2.4 -3 L9.5 -3 L3.8 1.5 L6 8.5 L0 4.5 L-6 8.5 L-3.8 1.5 L-9.5 -3 L-2.4 -3 Z" fill="#0c2a1a" />
              </g>
            </g>
            <circle cx="120" cy="120" r="6" fill="#0c2a1a" />
          </svg>

          <p className="mt-6 font-display text-4xl font-semibold text-[#0c2a1a]">135° <span className="text-[#9A7A15]">SØ</span></p>
          <p className="mt-1 text-sm text-[#3a3a32]/70">Retningen til Kaaba fra moskéen</p>
        </div>

        {/* Instructions */}
        <div className="space-y-5">
          <div className="rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-6 backdrop-blur-sm">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-[#0c2a1a]">
              <Compass className="h-5 w-5 text-[#9A7A15]" />
              Slik finner du Qibla
            </h3>
            <ol className="mt-4 space-y-3">
              {[
                'Stå vendt mot nord (mot Lillehammer sentrum).',
                'Vend deg 135 grader mot høyre — mot sørøst.',
                'Du står nå vendt mot Qibla, retning Kaaba i Mekka.',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-[#3a3a32]">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0c2a1a] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-6 backdrop-blur-sm">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-[#0c2a1a]">
              <Navigation className="h-5 w-5 text-[#9A7A15]" />
              Tips
            </h3>
            <ul className="mt-4 space-y-2 text-[#3a3a32]">
              {[
                'Bruk en kompass-app for nøyaktig retning.',
                'I moskéen er Qibla allerede tydelig markert.',
                'Er du usikker, spør gjerne en av oss.',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <EightPointStar className="mt-1.5 h-3 w-3 flex-shrink-0 text-[#D4AF37]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Band>
  );
}
