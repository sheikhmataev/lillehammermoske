import { Heart, Users, BookOpen, Globe } from 'lucide-react';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';

const values = [
  { icon: Users, title: 'Fellesskap', text: 'Vi bygger sterke bånd mellom medlemmer og skaper et støttende miljø.' },
  { icon: BookOpen, title: 'Utdanning', text: 'Vi tilbyr religiøs utdanning og opplæring for alle aldre.' },
  { icon: Heart, title: 'Medmenneskelighet', text: 'Vi praktiserer islamske verdier om omsorg og medmenneskelighet.' },
];

export function MissionVision() {
  return (
    <Band tone="cream">
      <SectionHeading
        tone="cream"
        eyebrow="Hvorfor vi finnes"
        arabic="رسالتنا ورؤيتنا"
        title="Vår misjon & visjon"
        lead="Vi jobber for å styrke det muslimske fellesskapet og fremme forståelse mellom kulturer."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
        {[
          {
            icon: Heart,
            title: 'Vår misjon',
            paragraphs: [
              'Å skape et sterkt og inkluderende muslimsk fellesskap i Lillehammer som støtter hverandre gjennom religiøs praksis, utdanning og fellesskap — et hjem langt fra hjemmet.',
              'Vi ønsker å være en bro mellom kulturer og bidra til harmonisk sameksistens. Alle er velkommen — muslim eller ikke.',
            ],
          },
          {
            icon: Globe,
            title: 'Vår visjon',
            paragraphs: [
              'Å være et moderne, åpent og inkluderende kulturelt senter som tjener fellesskapet i Lillehammer og omegn — ikke bare en moské, men et sted hvor fellesskapet vokser.',
              'Vi vil være en ressurs for både muslimer og ikke-muslimer som ønsker å lære om islam og muslimsk kultur.',
            ],
          },
        ].map(({ icon: Icon, title, paragraphs }) => (
          <div key={title} className="rounded-3xl border border-[#1B5E20]/10 bg-white/70 p-8 backdrop-blur-sm">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0c2a1a] text-[#E6C547]">
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="font-display mt-6 text-2xl font-semibold text-[#0c2a1a]">{title}</h3>
            {paragraphs.map((p, i) => (
              <p key={i} className="mt-3 leading-relaxed text-[#3a3a32]">{p}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-5xl">
        <h3 className="font-display text-center text-2xl font-semibold text-[#0c2a1a]">Våre verdier</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center">
              <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/12 text-[#9A7A15] ring-1 ring-inset ring-[#D4AF37]/25">
                <Icon className="h-8 w-8" />
              </span>
              <h4 className="font-display mt-4 text-xl font-semibold text-[#0c2a1a]">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#3a3a32]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Band>
  );
}
