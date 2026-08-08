import { Phone, Mail } from 'lucide-react';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MaleSilhouette, HijabSilhouette } from '@/components/ui/Silhouettes';
import { config } from '@/lib/config';

interface StaffMember {
  name: string;
  role: string;
  phone: string;
  tel: string;
}

interface StaffGroupProps {
  title: string;
  members: StaffMember[];
  variant: 'boys' | 'girls';
}

function StaffGroup({ title, members, variant }: StaffGroupProps) {
  const Silhouette = variant === 'boys' ? MaleSilhouette : HijabSilhouette;

  return (
    <div>
      <div className="flex items-center gap-3 border-b border-[#D4AF37]/20 pb-4">
        <span className="bg-[#D4AF37]/12 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl text-[#E6C547] ring-1 ring-inset ring-[#D4AF37]/20">
          <Silhouette className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-white">
            {title}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6C547]/80">
            Quranskolen
          </p>
        </div>
      </div>

      <ul className="mt-5 space-y-4">
        {members.map((member) => (
          <li
            key={member.name}
            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/30 hover:bg-white/[0.06]"
          >
            <span className="bg-[#D4AF37]/12 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-[#E6C547] ring-1 ring-inset ring-[#D4AF37]/20">
              <Silhouette className="h-8 w-8" />
            </span>
            <div className="min-w-0">
              <h4 className="font-display text-lg font-semibold leading-tight text-white">
                {member.name}
              </h4>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6C547]/80">
                {member.role}
              </p>
              <a
                href={`tel:${member.tel}`}
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/85 transition-colors hover:text-[#E6C547]"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-[#E6C547]" />
                {member.phone}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function QuranSchoolStaff() {
  const { boys, girls } = config.quranSchoolStaff;

  return (
    <Band tone="ink" glow id="ansatte">
      <SectionHeading
        tone="ink"
        eyebrow="Ansatte"
        arabic="المعلمون"
        title="Lærere og administrasjon"
        lead="Ta gjerne direkte kontakt med læreren for klassen det gjelder — om timeplan, oppmøte eller oppfølging av eleven."
      />

      <div className="mx-auto mt-14 grid max-w-4xl gap-10 md:grid-cols-2 md:gap-8">
        <StaffGroup variant="boys" title="Gutter / menn" members={boys} />
        <StaffGroup variant="girls" title="Jenter / kvinner" members={girls} />
      </div>

      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/70 backdrop-blur-sm">
        <Mail className="h-4 w-4 flex-shrink-0 text-[#E6C547]" />
        Generelle spørsmål om Quranskolen kan sendes til
        <a
          href="mailto:info@lillehammermoske.no"
          className="font-medium text-white underline decoration-[#D4AF37]/60 underline-offset-4 transition-colors hover:text-[#E6C547]"
        >
          info@lillehammermoske.no
        </a>
      </div>
    </Band>
  );
}
