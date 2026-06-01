import { Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Band } from '@/components/ui/Band';
import { StarDivider } from '@/components/ui/ornaments';

const GOOGLE_FORM_URL = 'https://forms.gle/XFiqQsontqLdpiMP9';

const benefits = [
  'Støtt moskeens drift og aktiviteter',
  'Delta i beslutningsprosesser',
  'Bygg nettverk med fellesskapet',
];

export function JoinCTA() {
  return (
    <Band tone="ink" glow>
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-1.5">
            <Users className="h-4 w-4 text-[#E6C547]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E6C547]">
              Bli en del av oss
            </span>
          </div>

          <h2 className="font-display mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Bli medlem av <span className="text-gold-gradient">Lillehammer Moske</span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-white/75">
            Meld deg inn og vær med på å styrke fellesskapet. Som medlem støtter du moskéens
            arbeid og er med på å forme veien videre.
          </p>

          <ul className="mt-7 space-y-3">
            {benefits.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/85">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#E6C547]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#E6C547] to-[#B8941F] px-7 py-3.5 font-semibold text-[#0c2a1a] shadow-[0_8px_30px_-8px_rgba(212,175,55,0.6)] transition-transform hover:-translate-y-0.5"
          >
            Meld deg inn nå
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Quote card */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] p-8 text-center backdrop-blur-sm sm:p-10">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            <p className="font-arabic text-3xl leading-[2] text-[#E9D08A]" dir="rtl">
              وَتَعَاوَنُوا عَلَى ٱلْبِرِّ وَٱلتَّقْوَىٰ
            </p>
            <div className="my-6">
              <StarDivider tone="gold" />
            </div>
            <p className="text-lg italic leading-relaxed text-white/85">
              «Og hjelp hverandre til godhet og gudsfrykt.»
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.28em] text-[#E6C547]/80">
              Sūra al-Māʾida 5:2
            </p>
          </div>
        </div>
      </div>
    </Band>
  );
}
