import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Phone, Users, UtensilsCrossed, Moon, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

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
  {
    id: 1,
    name: 'Pakke 1',
    price: 1250,
    highlight: false,
    items: [
      'Dadler',
      'Linsesuppe',
      'Stekt kylling kubber (5 kg)',
      'Kokt ris',
      'Saus / garebi',
      'Salat',
    ],
  },
  {
    id: 2,
    name: 'Pakke 2',
    price: 2200,
    highlight: true,
    items: [
      'Dadler',
      'Linsesuppe',
      'Kyllinglår (ca. 40 biter)',
      'Kokt ris',
      'Saus / garebi',
      'Salat',
    ],
  },
  {
    id: 3,
    name: 'Pakke 3',
    price: 1500,
    highlight: false,
    items: [
      'Dadler',
      'Linsesuppe',
      'Pasta med tomatsaus og kjøttdeig (3 kg)',
      'Salat',
    ],
  },
  {
    id: 4,
    name: 'Pakke 4',
    price: 2200,
    highlight: false,
    items: [
      'Dadler',
      'Linsesuppe',
      'Stekt laks (ca. 44 biter)',
      'Grønnsaker, pasta og poteter',
      'Salat',
    ],
  },
];

export default function IftarPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gold-500 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gold-500 blur-3xl" />
        </div>

        <div className="relative container-custom py-20 md:py-28 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 backdrop-blur-sm rounded-full px-5 py-2 border border-gold-500/30 mb-6">
              <Moon className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium text-gold-300">Ramadan 2026</span>
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
              Doner en Iftar
              <span className="block text-gold-400 mt-2 text-3xl sm:text-4xl md:text-5xl">
                til Lillehammer Moske
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Gi en varm iftar til hele fellesskapet. Profeten ﷺ sa:
              <span className="block mt-3 text-gold-300 italic text-base sm:text-lg">
                &laquo;Den som gir en fastende person mat til iftar, får samme belønning som den fastende.&raquo;
              </span>
              <span className="block text-white/50 text-sm mt-1">(Tirmidhi)</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/10">
                <Users className="w-4 h-4 text-gold-400" />
                <span className="text-white/80">Servering for ca. 40 personer</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/10">
                <UtensilsCrossed className="w-4 h-4 text-gold-400" />
                <span className="text-white/80">Matlaging, servering &amp; rydding inkludert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 md:py-20 bg-cream-50">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-4">
              Slik fungerer det
            </h2>
            <p className="text-gray-600 text-lg">
              Du donerer en iftarpakke – moskeen tar seg av resten.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { step: '1', title: 'Velg en pakke', desc: 'Se gjennom iftarpakkene nedenfor og velg den du ønsker å donere.' },
              { step: '2', title: 'Ta kontakt', desc: 'Ring eller send melding til oss for å avtale dato og pakke.' },
              { step: '3', title: 'Vi ordner alt', desc: 'Moskeen lager maten, serverer den til iftar og rydder opp etterpå.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-900 text-white text-lg font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-emerald-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iftar Packages */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-4">
              Velg en iftarpakke å donere
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Alle pakker inkluderer matlaging, servering, rydding og vasking. Maten serveres for ca. 40 personer ved moskeen.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {iftarPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl border-2 p-6 sm:p-8 transition-all hover:shadow-lg ${
                  pkg.highlight
                    ? 'border-gold-500 bg-gold-500/5 shadow-md'
                    : 'border-gray-200 bg-white hover:border-emerald-300'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Populær
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xl font-bold text-emerald-900">{pkg.name}</h3>
                  <div className="text-right">
                    <p className="text-2xl sm:text-3xl font-extrabold text-emerald-900">
                      {pkg.price.toLocaleString('nb-NO')} <span className="text-base font-semibold text-gray-500">kr</span>
                    </p>
                    <p className="text-xs text-gray-500">donasjon</p>
                  </div>
                </div>

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Iftar-menyen inkluderer
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:+4790083159"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-colors ${
                    pkg.highlight
                      ? 'bg-gold-500 hover:bg-gold-600 text-white'
                      : 'bg-emerald-900 hover:bg-emerald-800 text-white'
                  }`}
                >
                  <Phone className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                  Doner denne pakken
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-14 md:py-20 bg-emerald-900 text-white">
        <div className="container-custom px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="w-12 h-12 text-gold-400 mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-white">
              Klar til å donere en iftar?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Ta kontakt med oss for å avtale dato og pakke. Vi hjelper deg gjerne med å velge.
            </p>

            <a
              href="tel:+4790083159"
              className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Ring 900 83 159
            </a>

            <p className="text-white/50 text-sm mt-6">
              Du kan også sende SMS eller WhatsApp til samme nummer.
            </p>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm mb-3">Vil du støtte moskeen på andre måter?</p>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
              >
                Se andre donasjonsmetoder
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
