'use client';

import { UserPlus, ExternalLink, CheckCircle, Heart, Vote, Users } from 'lucide-react';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';

const MEMBERSHIP_URL = 'https://forms.gle/XFiqQsontqLdpiMP9';

const benefits = [
  { icon: Heart, title: 'Støtt fellesskapet', text: 'Medlemskapet ditt bidrar til å opprettholde moskéens daglige drift og tjenester.' },
  { icon: Vote, title: 'Vær med å bestemme', text: 'Som medlem har du stemmerett på årsmøter og kan påvirke moskéens retning.' },
  { icon: Users, title: 'Bygg nettverk', text: 'Knytt kontakter med andre medlemmer og delta i sosiale og religiøse aktiviteter.' },
];

const formBenefits = [
  'Støtt moskéens drift og aktiviteter',
  'Delta i beslutningsprosesser',
  'Få tilgang til medlemsfordeler',
  'Vær med å bygge et sterkere fellesskap',
];

export function MembershipRegistration() {
  return (
    <Band tone="cream">
      <SectionHeading
        tone="cream"
        eyebrow="Hvorfor bli medlem?"
        arabic="انضم إلينا"
        title="Bli en del av fellesskapet"
        lead="Som medlem støtter du moskéens arbeid og får muligheten til å forme fremtiden sammen med oss."
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
        {benefits.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-6 text-center backdrop-blur-sm">
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/12 text-[#9A7A15] ring-1 ring-inset ring-[#D4AF37]/25">
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="font-display mt-4 text-lg font-semibold text-[#0c2a1a]">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#3a3a32]">{text}</p>
          </div>
        ))}
      </div>

      {/* Form card */}
      <div className="mx-auto mt-10 max-w-2xl">
        <a
          href={MEMBERSHIP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#0c2a1a] to-[#13391f] p-8 text-white transition-transform hover:-translate-y-1"
        >
          <div className="flex items-start gap-4">
            <span className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#E6C547] ring-1 ring-inset ring-[#D4AF37]/25">
              <UserPlus className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">Bli medlem</h3>
              <p className="mt-1 text-white/75">Meld deg inn og bli en del av vårt fellesskap.</p>
            </div>
          </div>
          <ul className="mt-6 space-y-2">
            {formBenefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-white/85">
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#E6C547]" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
          <span className="mt-6 inline-flex items-center gap-2 border-t border-white/10 pt-5 font-semibold text-[#E6C547] group-hover:text-white">
            Åpne innmeldingsskjema
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </a>
        <p className="mt-6 text-center text-xs text-[#3a3a32]/55">
          Ved innsending samtykker du til at vi behandler personopplysningene dine i tråd med vår{' '}
          <a href="/privacy" className="underline decoration-[#D4AF37]/60 underline-offset-2 hover:text-[#0c2a1a]">personvernerklæring</a>.
        </p>
      </div>
    </Band>
  );
}
