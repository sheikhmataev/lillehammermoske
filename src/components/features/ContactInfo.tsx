import Link from 'next/link';
import { MapPin, Mail, Clock, MessageCircle, Building2 } from 'lucide-react';
import { config } from '@/lib/config';

const card = 'rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-6 backdrop-blur-sm';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9A7A15]">
            Kontaktinformasjon
          </span>
          <span className="h-px w-10 bg-[#D4AF37]/70" />
        </div>
        <h2 className="font-display mt-3 text-3xl font-semibold text-[#0c2a1a] sm:text-4xl">
          Snakk med oss
        </h2>
        <p className="mt-4 leading-relaxed text-[#3a3a32]">
          Vi er her for å hjelpe deg — via e-post, WhatsApp, eller et besøk ved moskéen.
        </p>
      </div>

      <div className={card}>
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#0c2a1a]/5 text-[#9A7A15]">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-semibold text-[#0c2a1a]">Adresse</h4>
              <p className="text-[#3a3a32]">Bankgata 12, 2609 Lillehammer</p>
              <Link
                href="https://maps.google.com/?q=Bankgata+12,+2609+Lillehammer"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-[#9A7A15] hover:text-[#0c2a1a]"
              >
                Se på kart →
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t border-[#1B5E20]/10 pt-5">
            <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#0c2a1a]/5 text-[#9A7A15]">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-semibold text-[#0c2a1a]">E-post</h4>
              <a href="mailto:info@lillehammermoske.no" className="break-all text-[#3a3a32] hover:text-[#0c2a1a]">
                info@lillehammermoske.no
              </a>
              <p className="text-sm text-[#3a3a32]/60">Vi svarer innen 1–2 virkedager.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t border-[#1B5E20]/10 pt-5">
            <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#0c2a1a]/5 text-[#9A7A15]">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-semibold text-[#0c2a1a]">WhatsApp</h4>
              <a href={config.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#3a3a32] hover:text-[#0c2a1a]">
                Bli med i WhatsApp-gruppen
              </a>
              <p className="text-sm text-[#3a3a32]/60">Rask respons og oppdateringer.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={card}>
        <h4 className="flex items-center gap-2 font-display text-lg font-semibold text-[#0c2a1a]">
          <Clock className="h-5 w-5 text-[#9A7A15]" /> Åpningstider
        </h4>
        <dl className="mt-4 space-y-2.5 text-sm">
          <div className="flex justify-between border-b border-[#1B5E20]/10 pb-2.5">
            <dt className="text-[#3a3a32]">Mandag – søndag</dt>
            <dd className="font-semibold text-[#0c2a1a]">05:00 – 22:00</dd>
          </div>
          <div className="flex justify-between border-b border-[#1B5E20]/10 pb-2.5">
            <dt className="text-[#3a3a32]">Jummah (fredag)</dt>
            <dd className="font-semibold text-[#9A7A15]">Khutbah {config.jummah.khutbah} · Jamat {config.jummah.jamat}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[#3a3a32]">Ramadan</dt>
            <dd className="font-semibold text-[#0c2a1a]">24/7</dd>
          </div>
        </dl>
      </div>

      <div className="rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#0c2a1a] to-[#13391f] p-6 text-white">
        <h4 className="flex items-center gap-2 font-display text-lg font-semibold text-white">
          <Building2 className="h-5 w-5 text-[#E6C547]" /> Organisasjonen
        </h4>
        <dl className="mt-4 space-y-2.5 text-sm">
          <div className="flex justify-between border-b border-white/10 pb-2.5">
            <dt className="text-white/75">Organisasjonsnummer</dt>
            <dd className="font-semibold text-white">988 588 660</dd>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-2.5">
            <dt className="text-white/75">Stiftet</dt>
            <dd className="font-semibold text-white">2005</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-white/75">Organisasjonsform</dt>
            <dd className="font-semibold text-white">Forening</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
