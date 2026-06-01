import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface Member {
  name: string;
  position: string;
  bio: string;
}

const boardMembers: Member[] = [
  {
    name: 'Mukhtar Sharif Mukhtar',
    position: 'Styreleder',
    bio: 'Leder styret og arbeider for å styrke det muslimske fellesskapet i Lillehammer.',
  },
  {
    name: 'Hossein Sharipovitsj Aldamov',
    position: 'Nestleder',
    bio: 'Nestleder med fokus på utdanning og ungdomsaktiviteter.',
  },
  {
    name: 'Muhammad Talha Habib',
    position: 'Daglig leder',
    bio: 'Koordinerer daglige aktiviteter og administrasjon ved moskéen.',
  },
  {
    name: 'Javaid Akhtar Sheikh',
    position: 'Styremedlem',
    bio: 'Erfaren styremedlem med lang historie i det muslimske fellesskapet.',
  },
  {
    name: 'Ahmed Macalin Yahye',
    position: 'Styremedlem',
    bio: 'Styremedlem med fokus på fellesskapsutvikling og kultur.',
  },
];

function initials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
}

export function BoardMembers() {
  return (
    <Band tone="cream">
      <SectionHeading
        tone="cream"
        eyebrow="Frivillige ildsjeler"
        arabic="أعضاء المجلس"
        title="Menneskene bak"
        lead="Dedikerte styremedlemmer som jobber frivillig for å holde moskéen i gang — ved siden av jobb og familie."
      />

      <div className="mx-auto mt-14 max-w-5xl">
        <div className="flex flex-wrap justify-center gap-6">
          {boardMembers.map((m) => (
            <div
              key={m.name}
              className="flex w-full items-start gap-4 rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1B5E20]/25 hover:shadow-md sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
            >
              <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#0c2a1a] font-display text-xl font-semibold text-[#E6C547]">
                {initials(m.name)}
              </span>
              <div>
                <h4 className="font-display text-lg font-semibold text-[#0c2a1a]">{m.name}</h4>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7A15]">{m.position}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#3a3a32]">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Band>
  );
}
