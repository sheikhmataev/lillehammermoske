import { MapPin, Clock, Mail, Car, Bus, ArrowRight } from 'lucide-react';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EightPointStar } from '@/components/ui/ornaments';
import { config } from '@/lib/config';

const card = 'rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-6 backdrop-blur-sm';

export function LocationInfo() {
  return (
    <Band tone="cream">
      <SectionHeading
        tone="cream"
        eyebrow="Finn fram"
        arabic="زورونا"
        title="Besøk oss"
        lead="Vi ligger sentralt i Lillehammer og er lett tilgjengelig med bil og kollektivtransport."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className={card}>
            <h3 className="font-display text-xl font-semibold text-[#0c2a1a]">Adresse & kontakt</h3>
            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#9A7A15]" />
                <div>
                  <h4 className="font-semibold text-[#0c2a1a]">Adresse</h4>
                  <p className="text-[#3a3a32]">Bankgata 12<br />2609 Lillehammer, Norge</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#9A7A15]" />
                <div>
                  <h4 className="font-semibold text-[#0c2a1a]">E-post</h4>
                  <p className="text-[#3a3a32]">info@lillehammermoske.no</p>
                </div>
              </div>
            </div>
          </div>

          <div className={card}>
            <h3 className="font-display text-xl font-semibold text-[#0c2a1a]">Åpningstider</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-[#1B5E20]/10 pb-2.5">
                <dt className="flex items-center gap-2 text-[#3a3a32]"><Clock className="h-4 w-4 text-[#9A7A15]" /> Mandag – søndag</dt>
                <dd className="font-semibold text-[#0c2a1a]">05:00 – 22:00</dd>
              </div>
              <div className="flex items-center justify-between border-b border-[#1B5E20]/10 pb-2.5">
                <dt className="flex items-center gap-2 text-[#3a3a32]"><Clock className="h-4 w-4 text-[#9A7A15]" /> Jummah (fredag)</dt>
                <dd className="font-semibold text-[#9A7A15]">Khutbah {config.jummah.khutbah} · Jamat {config.jummah.jamat}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-2 text-[#3a3a32]"><Clock className="h-4 w-4 text-[#9A7A15]" /> Ramadan</dt>
                <dd className="font-semibold text-[#0c2a1a]">24/7</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="space-y-6">
          <div className={card}>
            <h3 className="font-display text-xl font-semibold text-[#0c2a1a]">Hvordan komme hit</h3>
            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-4">
                <Car className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#9A7A15]" />
                <div>
                  <h4 className="font-semibold text-[#0c2a1a]">Med bil</h4>
                  <p className="text-sm leading-relaxed text-[#3a3a32]">Gratis parkering i nærheten. Vi ligger 5 minutter fra E6 og er lett tilgjengelig fra hele Lillehammer.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Bus className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#9A7A15]" />
                <div>
                  <h4 className="font-semibold text-[#0c2a1a]">Kollektivtransport</h4>
                  <p className="text-sm leading-relaxed text-[#3a3a32]">Bussholdeplassen «Bankgata» ligger 2 minutters gange fra moskéen.</p>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Bankgata+12+2609+Lillehammer"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0c2a1a] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#13391f]"
            >
              Få veibeskrivelse
              <ArrowRight className="h-4 w-4 text-[#E6C547]" />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#0c2a1a] to-[#13391f] p-6 text-white">
            <h3 className="font-display text-xl font-semibold text-white">For førstegangsbesøkende</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {[
                'Ta av skoene før du går inn i bønnerommet.',
                'Kle deg anstendig og respektfullt.',
                'Sett mobilen på lydløs.',
                'Spør gjerne om hjelp — vi tar imot deg.',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <EightPointStar className="mt-1.5 h-3 w-3 flex-shrink-0 text-[#E6C547]" />
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
