import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Phone, Users, UtensilsCrossed, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StarDivider } from '@/components/ui/ornaments';

export const metadata: Metadata = {
  title: 'Doner Iftar – Sponor en Iftar i Ramadan',
  description:
    'Doner en iftar til Lillehammer Moske i Ramadan 2026. Velg en iftarpakke og gi hele fellesskapet en varm måltid. Alt fra matlaging til rydding er inkludert.',
  openGraph: {
    title: 'Doner Iftar – Lillehammer Moske',
    description: 'Sponsor en iftar for ca. 40 personer ved Lillehammer Moske i Ramadan.',
  },
  alternates: { canonical: 'https://lillehammermoske.no/iftar/' },
};

const iftarPackages = [
  { id: 1, name: 'Pakke 1', price: 1250, highlight: false, items: ['Dadler', 'Linsesuppe', 'Stekt kylling kubber (5 kg)', 'Kokt ris', 'Saus / garebi', 'Salat'] },
  { id: 2, name: 'Pakke 2', price: 2200, highlight: true, items: ['Dadler', 'Linsesuppe', 'Kyllinglår (ca. 40 biter)', 'Kokt ris', 'Saus / garebi', 'Salat'] },
  { id: 3, name: 'Pakke 3', price: 1500, highlight: false, items: ['Dadler', 'Linsesuppe', 'Pasta med tomatsaus og kjøttdeig (3 kg)', 'Salat'] },
  { id: 4, name: 'Pakke 4', price: 2200, highlight: false, items: ['Dadler', 'Linsesuppe', 'Stekt laks (ca. 44 biter)', 'Grønnsaker, pasta og poteter', 'Salat'] },
];

export default function IftarPage() {
  return (
    <>
      <PageHero
        eyebrow="Ramadan 2026"
        arabic="إفطار صائم"
        title="Doner en iftar"
        lead="Gi en varm iftar til hele fellesskapet. Profeten ﷺ sa: «Den som gir en fastende mat til iftar, får samme belønning som den fastende.» (Tirmidhi)"
      >
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80">
            <Users className="h-4 w-4 text-[#E6C547]" /> Servering for ca. 40 personer
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80">
            <UtensilsCrossed className="h-4 w-4 text-[#E6C547]" /> Matlaging, servering & rydding inkludert
          </span>
        </div>
      </PageHero>

      {/* How it works */}
      <Band tone="cream">
        <SectionHeading
          tone="cream"
          eyebrow="Enkelt og trygt"
          title="Slik fungerer det"
          lead="Du donerer en iftarpakke — moskéen tar seg av resten."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            { step: '1', title: 'Velg en pakke', desc: 'Se gjennom pakkene nedenfor og velg den du ønsker å donere.' },
            { step: '2', title: 'Ta kontakt', desc: 'Ring eller send melding for å avtale dato og pakke.' },
            { step: '3', title: 'Vi ordner alt', desc: 'Moskéen lager maten, serverer til iftar og rydder opp.' },
          ].map((item) => (
            <div key={item.step} className="rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-6 text-center backdrop-blur-sm">
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0c2a1a] font-display text-lg font-semibold text-[#E6C547]">
                {item.step}
              </span>
              <h3 className="font-display mt-4 text-lg font-semibold text-[#0c2a1a]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3a3a32]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Band>

      {/* Packages */}
      <Band tone="parchment">
        <SectionHeading
          tone="cream"
          eyebrow="Menyene"
          title="Velg en iftarpakke"
          lead="Alle pakker inkluderer matlaging, servering, rydding og vasking — for ca. 40 personer."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {iftarPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl border p-7 backdrop-blur-sm transition-all hover:-translate-y-1 ${
                pkg.highlight ? 'border-[#D4AF37]/50 bg-[#D4AF37]/5 shadow-md' : 'border-[#1B5E20]/10 bg-white/70'
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0c2a1a]">
                  Populær
                </span>
              )}
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-[#0c2a1a]">{pkg.name}</h3>
                <div className="text-right">
                  <p className="font-display text-2xl font-semibold text-[#0c2a1a]">
                    {pkg.price.toLocaleString('nb-NO')} <span className="text-base text-[#3a3a32]/60">kr</span>
                  </p>
                  <p className="text-xs text-[#3a3a32]/60">donasjon</p>
                </div>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#9A7A15]">Menyen inkluderer</p>
              <ul className="mt-3 space-y-2">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#3a3a32]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1B5E20]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+4790083159"
                className={`mt-6 block w-full rounded-xl py-3 text-center font-semibold transition-colors ${
                  pkg.highlight ? 'bg-[#D4AF37] text-[#0c2a1a] hover:bg-[#c79f2f]' : 'bg-[#0c2a1a] text-white hover:bg-[#13391f]'
                }`}
              >
                <Phone className="mr-2 -mt-0.5 inline-block h-4 w-4" />
                Doner denne pakken
              </a>
            </div>
          ))}
        </div>
      </Band>

      {/* CTA */}
      <Band tone="ink" glow>
        <div className="mx-auto max-w-2xl text-center">
          <Heart className="mx-auto h-12 w-12 text-[#E6C547]" />
          <div className="my-6"><StarDivider tone="gold" /></div>
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Klar til å donere en iftar?</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Ta kontakt for å avtale dato og pakke — vi hjelper deg gjerne med å velge.
          </p>
          <a
            href="tel:+4790083159"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#E6C547] to-[#B8941F] px-8 py-4 font-bold text-[#0c2a1a] shadow-[0_8px_30px_-8px_rgba(212,175,55,0.6)] transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-5 w-5" />
            Ring 900 83 159
          </a>
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-sm text-white/60">Vil du støtte moskéen på andre måter?</p>
            <Link href="/donate" className="mt-2 inline-flex items-center gap-2 font-semibold text-[#E6C547] hover:text-white">
              Se andre donasjonsmetoder
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Band>
    </>
  );
}
