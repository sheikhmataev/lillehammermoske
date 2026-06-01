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
  const [leader, ...rest] = boardMembers;

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
        {/* Leader, featured */}
        <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#0c2a1a] to-[#13391f] p-8 text-center text-white sm:p-10">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#E6C547] to-[#B8941F] shadow-lg">
            <span className="font-display text-4xl font-semibold text-[#0c2a1a]">{initials(leader.name)}</span>
          </div>
          <h3 className="font-display mt-5 text-2xl font-semibold text-white">{leader.name}</h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.22em] text-[#E6C547]">{leader.position}</p>
          <p className="mx-auto mt-4 max-w-xl text-white/75">{leader.bio}</p>
        </div>

        {/* Rest, grid */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {rest.map((m) => (
            <div key={m.name} className="flex items-start gap-4 rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-6 backdrop-blur-sm">
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
