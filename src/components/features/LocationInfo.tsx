import { MapPin, Clock, Phone, Mail, Car, Bus } from 'lucide-react';

export function LocationInfo() {
  return (
    <section className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Besøk Oss
            </h2>
            <p className="text-xl text-gray-600">
              Vi ligger sentralt i Lillehammer og er lett tilgjengelig.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location Details */}
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-2xl font-semibold text-emerald-900 mb-6">
                  Adresse & Kontakt
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-emerald-900 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                      <p className="text-gray-600">
                        Bankgata 12<br />
                        2609 Lillehammer<br />
                        Norge
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-emerald-900 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                      <p className="text-gray-600">Se mobilnummer</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-emerald-900 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">E-post</h4>
                      <p className="text-gray-600">info@lillehammermoske.no</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="card">
                <h3 className="text-2xl font-semibold text-emerald-900 mb-6">
                  Åpningstider
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-emerald-900" />
                    <div className="flex justify-between w-full">
                      <span className="text-gray-600">Mandag - Søndag</span>
                      <span className="font-medium">05:00 - 22:00</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-emerald-900" />
                    <div className="flex justify-between w-full">
                      <span className="text-gray-600">Jummah (Fredag)</span>
                      <span className="font-medium">12:00 - 13:00</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-emerald-900" />
                    <div className="flex justify-between w-full">
                      <span className="text-gray-600">Ramadan</span>
                      <span className="font-medium">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-2xl font-semibold text-emerald-900 mb-6">
                  Hvordan Komme Hit
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Car className="w-6 h-6 text-emerald-900 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Med Bil</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Gratis parkering tilgjengelig i nærheten. Vi ligger 5 minutter 
                        fra E6 og er lett tilgjengelig fra alle deler av Lillehammer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Bus className="w-6 h-6 text-emerald-900 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Kollektivtransport</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Bussholdeplass &quot;Bankgata&quot; ligger 2 minutter gange fra moskeen. 
                        Busslinje 1 og 3 stopper her.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card">
                <h3 className="text-2xl font-semibold text-emerald-900 mb-6">
                  Kart
                </h3>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Interaktivt kart kommer snart</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Bankgata 22A, 2609 Lillehammer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Instructions */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-emerald-900 mb-6 text-center">
              Viktig Informasjon for Besøkende
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-emerald-900 mb-4">
                  For Første Gang Besøkende
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ta av skoene før du går inn i bønnerommet</li>
                  <li>• Kle deg anstendig og respektfullt</li>
                  <li>• Mobiltelefoner skal være på lydløs</li>
                  <li>• Spør gjerne om hjelp hvis du er usikker</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-900 mb-4">
                  For Skolebesøk
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Kontakt oss på forhånd for avtale</li>
                  <li>• Vi tilbyr guidet omvisning</li>
                  <li>• Tilpasset program for alle aldersgrupper</li>
                  <li>• Gratis opplæring om islam og muslimsk kultur</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
