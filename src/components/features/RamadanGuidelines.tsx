import { Moon, BookOpen, Heart, AlertCircle, CheckCircle } from 'lucide-react';

export function RamadanGuidelines() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-6">
              Sawm &ndash; Islams Fjerde Søyle
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Sawm er det arabiske begrepet for faste. Når muslimer har passert pubertetsalderen, 
              er de pålagt å faste i Ramadan.
            </p>
          </div>

          {/* What is Sawm */}
          <div className="bg-cream-50 rounded-2xl p-8 md:p-10 border border-gray-100 mb-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <Moon className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-3">Hva er Sawm?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Faste innebærer å avstå fra mat, drikke, seksuelle relasjoner og anstøtelig tale og 
                  oppførsel fra daggry til skumring. I løpet av denne hellige tiden ber Allah muslimene om 
                  midlertidig å avstå fra de grunnleggende behovene, noe som gir rom for økt selvrefleksjon 
                  og tilbedelse.
                </p>
              </div>
            </div>

            {/* Quran verse */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-gray-700 italic leading-relaxed mb-2">
                &laquo;Dere som tror, det er foreskrevet dere å faste, slik det var foreskrevet dem som levde 
                før dere, så dere må bli gudfryktige.&raquo;
              </p>
              <p className="text-emerald-900 text-sm font-medium">— Surah Al-Baqarah (2:183)</p>
            </div>
          </div>

          {/* Fakta om Sawm */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-emerald-900" />
                <h4 className="font-bold text-emerald-900">En av islams fem søyler</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sawm er obligatorisk under Ramadan. Muslimer kan imidlertid holde sawm når som helst 
                på året som en form for tilbedelse.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-emerald-900" />
                <h4 className="font-bold text-emerald-900">Datoene endres hvert år</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Den islamske kalenderen følger månens syklus. Ramadan forskyves med ca. 11 dager hvert år 
                sammenlignet med den gregorianske kalenderen.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-emerald-900" />
                <h4 className="font-bold text-emerald-900">Noen er unntatt</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                De som har menstruasjon, ammer, er gravide, lider av dårlig helse eller har andre 
                gode grunner er fritatt fra fasten.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-emerald-900" />
                <h4 className="font-bold text-emerald-900">Dadler er Sunnah</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Profeten Muhammad (fvmh) pleide å bryte fasten med dadler. 
                &laquo;Når en av dere bryter fasten, skal han bryte den med dadler, for de er velsignet.&raquo;
              </p>
            </div>
          </div>

          {/* Missed fasting */}
          <div className="bg-emerald-900 rounded-2xl p-8 md:p-10 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">Hva om du går glipp av en fastedag?</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Hvis du ikke faster noen av dagene i Ramadan, vil du bli pålagt å betale en veldedig 
                  form for kompensasjon:
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <h4 className="font-bold text-gold-400 mb-2">Fidya (Fidyah)</h4>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  For de som har gått glipp av faste på grunn av en gyldig grunn og ikke kan ta 
                  igjen de dagene etter Ramadan.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <h4 className="font-bold text-gold-400 mb-2">Kaffarah</h4>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  For fasten man går glipp av uten gyldig grunn. Man må faste 60 sammenhengende dager 
                  eller mate 60 fattige.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
