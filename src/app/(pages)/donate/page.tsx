import { DonateHero } from '@/components/features/DonateHero';
import { Smartphone, Building2, Heart } from 'lucide-react';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <DonateHero />

      {/* Donation Methods */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-4">
                Støtt Lillehammer Moske
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Din donasjon bidrar til å opprettholde moskeen, støtte utdanning, og styrke det muslimske fellesskapet i Lillehammer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vipps */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-emerald-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-[#FF5B24] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-3">Vipps</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Send donasjon enkelt via Vipps. Søk etter nummeret eller bruk Vipps-appen direkte.
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Vipps-nummer</p>
                  <p className="text-3xl font-extrabold text-emerald-900">503175</p>
                </div>
              </div>

              {/* Bank Account */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-emerald-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-emerald-900 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-3">Bankoverføring</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Overfør direkte til vår bankkonto.
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Kontonummer</p>
                    <p className="text-xl font-bold text-emerald-900">05394493661</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Org.nr</p>
                    <p className="text-lg font-bold text-emerald-900">988 588 660</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-emerald-900 text-white rounded-2xl p-10 shadow-lg">
              <Heart className="w-12 h-12 text-gold-400 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Jazak Allahu Khairan
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Måtte Allah belønne deg for din generøsitet. Hver donasjon, uansett størrelse, gjør en forskjell for vårt fellesskap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
