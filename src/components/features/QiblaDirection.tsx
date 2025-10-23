import { Compass, Navigation } from 'lucide-react';

export function QiblaDirection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Qibla Retning
            </h2>
            <p className="text-xl text-gray-600">
              Finn retningen til Kaaba i Mekka for bønn
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Compass */}
            <div className="card text-center">
              <div className="w-64 h-64 mx-auto mb-8 relative">
                <div className="w-full h-full border-4 border-emerald-900 rounded-full flex items-center justify-center relative">
                  {/* Compass needle pointing to Qibla */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1 h-24 bg-emerald-900 transform rotate-45 origin-bottom"></div>
                  </div>
                  
                  {/* Direction labels */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-emerald-900 font-bold">
                    N
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-emerald-900 font-bold">
                    S
                  </div>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-900 font-bold">
                    V
                  </div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-900 font-bold">
                    Ø
                  </div>
                  
                  {/* Qibla direction indicator */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-gold-500 font-bold text-lg">
                    Qibla
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-emerald-900 mb-4">
                Qibla Retning fra Lillehammer
              </h3>
              <p className="text-3xl font-bold text-gold-500 mb-4">
                135° SØ
              </p>
              <p className="text-gray-600">
                Retningen til Kaaba i Mekka fra vår lokasjon
              </p>
            </div>

            {/* Instructions */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4 flex items-center">
                  <Compass className="w-6 h-6 mr-3" />
                  Hvordan Finne Qibla
                </h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-emerald-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <span>Stå med ryggen mot nord (mot Lillehammer sentrum)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <span>Vend deg 135 grader mot høyre (sørøst)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <span>Du står nå vendt mot Qibla (Kaaba i Mekka)</span>
                  </li>
                </ol>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4 flex items-center">
                  <Navigation className="w-6 h-6 mr-3" />
                  Tips for Bønn
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bruk en kompass-app på telefonen for nøyaktig retning</li>
                  <li>• I moskeen er Qibla-retningen allerede markert</li>
                  <li>• Hvis du er usikker, spør en annen muslim</li>
                  <li>• Qibla-retningen er viktig for alle bønner</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-2">
                  Qibla i Moskeen
                </h4>
                <p className="text-emerald-100">
                  I vår moske er Qibla-retningen tydelig markert med en pil på veggen. 
                  Alle bønnerom har markeringer som viser retningen til Kaaba.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
