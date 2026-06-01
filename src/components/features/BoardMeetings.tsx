import { Calendar, Mail, ArrowRight } from 'lucide-react';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function BoardMeetings() {
  return (
    <Band tone="cream">
      <SectionHeading
        tone="cream"
        eyebrow="Åpen dialog"
        arabic="اجتماعات المجلس"
        title="Styrets møter"
        lead="Vi møtes jevnlig — og medlemmene er velkomne til å bidra med innspill."
      />

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-7 backdrop-blur-sm">
          <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-[#0c2a1a]">
            <Calendar className="h-5 w-5 text-[#9A7A15]" />
            Møtefrekvens
          </h3>
          <p className="mt-4 leading-relaxed text-[#3a3a32]">
            Vi møtes vanligvis månedlig, ofte første lørdag i måneden. Tidspunktet kan variere
            med andre arrangementer, så sjekk kunngjøringene.
          </p>
          <p className="mt-3 leading-relaxed text-[#3a3a32]">
            Alle medlemmer er velkomne til å delta — vi setter stor pris på innspill fra
            fellesskapet.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#0c2a1a] to-[#13391f] p-7 text-white">
          <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-white">
            <Mail className="h-5 w-5 text-[#E6C547]" />
            Kontakt styret
          </h3>
          <p className="mt-4 leading-relaxed text-white/80">
            Har du spørsmål, forslag eller bekymringer? Vi lytter alltid. Send oss en e-post
            eller bruk kontaktskjemaet.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:styret@lillehammermoske.no"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#E6C547] to-[#B8941F] px-5 py-2.5 font-semibold text-[#0c2a1a] transition-transform hover:-translate-y-0.5"
            >
              Send e-post
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Kontaktskjema
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </Band>
  );
}
