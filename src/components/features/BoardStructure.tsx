import { Crown, Shield, Briefcase, Users } from 'lucide-react';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';

const roles = [
  { icon: Crown, title: 'Styreleder', text: 'Leder styret og representerer moskéen utad.' },
  { icon: Shield, title: 'Nestleder', text: 'Støtter lederen og trer inn ved behov.' },
  { icon: Briefcase, title: 'Daglig leder', text: 'Koordinerer den daglige driften og administrasjonen.' },
  { icon: Users, title: 'Styremedlemmer', text: 'Bidrar med kompetanse og stemme i beslutninger.' },
];

export function BoardStructure() {
  return (
    <Band tone="ink" glow>
      <SectionHeading
        tone="ink"
        eyebrow="Slik er vi organisert"
        arabic="هيكل المجلس"
        title="Styrets struktur"
        lead="Et lite, dedikert team med tydelige roller — valgt av medlemmene."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm"
          >
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/12 text-[#E6C547] ring-1 ring-inset ring-[#D4AF37]/20">
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="font-display mt-5 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
          </div>
        ))}
      </div>
    </Band>
  );
}
