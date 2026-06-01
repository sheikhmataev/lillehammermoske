'use client';

import { Users, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';

const forms = [
  {
    id: 'boys-registration',
    title: 'Påmelding — Gutter',
    description: 'Meld på gutter til Quranskolen. For alle aldre fra 6 år.',
    url: 'https://forms.gle/Hmwg58USDAze8YA77',
  },
  {
    id: 'girls-registration',
    title: 'Påmelding — Jenter',
    description: 'Meld på jenter til Quranskolen. For alle aldre fra 6 år.',
    url: 'https://forms.gle/zS8crjpTtZQAt3J26',
  },
];

export function RegistrationForms() {
  return (
    <Band tone="cream" id="registration">
      <SectionHeading
        tone="cream"
        eyebrow="Påmelding"
        arabic="التسجيل"
        title="Meld på til Quranskolen"
        lead="Velg riktig skjema for gutter eller jenter. Det tar bare et par minutter."
      />

      <div className="mx-auto mt-12 max-w-3xl">
        <div className="flex items-start gap-3 rounded-2xl border border-[#1B5E20]/15 bg-[#D4AF37]/10 p-5">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#9A7A15]" />
          <p className="text-sm text-[#3a3a32]">
            For barn under 18 år må foresatte fylle ut skjemaet. Skjemaene sendes via Google
            Forms og behandles konfidensielt. Du får bekreftelse på e-post etter innsending.
          </p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {forms.map((form) => (
            <a
              key={form.id}
              href={form.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-[#1B5E20]/10 bg-white/70 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#D4AF37]/40"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0c2a1a] text-[#E6C547]">
                <Users className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold text-[#0c2a1a]">{form.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3a3a32]">{form.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#9A7A15] group-hover:text-[#0c2a1a]">
                Åpne skjema
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#0c2a1a] to-[#13391f] p-8 text-center text-white">
          <CheckCircle className="mx-auto h-10 w-10 text-[#E6C547]" />
          <h3 className="font-display mt-4 text-xl font-semibold text-white">Trenger du hjelp?</h3>
          <p className="mt-2 text-white/75">
            Spørsmål om påmelding eller problemer med skjemaet? Vi hjelper deg gjerne.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="mailto:info@lillehammermoske.no" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#E6C547] to-[#B8941F] px-6 py-3 font-semibold text-[#0c2a1a]">
              Send e-post
            </a>
            <a href="tel:+4790083159" className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Ring oss
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[#3a3a32]/55">
          Ved innsending samtykker du til at vi behandler personopplysningene dine i tråd med vår{' '}
          <a href="/privacy" className="underline decoration-[#D4AF37]/60 underline-offset-2 hover:text-[#0c2a1a]">personvernerklæring</a>.
        </p>
      </div>
    </Band>
  );
}
