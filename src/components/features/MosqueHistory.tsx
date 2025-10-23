import { Calendar, Users, Building, Award } from 'lucide-react';

export function MosqueHistory() {
  return (
    <section className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Vår Historie
            </h2>
            <p className="text-xl text-gray-600">
              Fra et lite fellesskap til et etablert kulturelt senter i Lillehammer.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-900 rounded-full"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {/* 2005 - Foundation */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-6 h-6 text-emerald-900 mr-3" />
                      <span className="text-2xl font-bold text-emerald-900">2005</span>
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                      Grunnleggelse
                    </h3>
                    <p className="text-gray-600">
                      The Muslim Cultural Center Lillehammer ble grunnlagt av en gruppe 
                      engasjerte muslimer som ønsket å skape et fellesskap i Lillehammer.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-900 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2010 - First Building */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold-500 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <Building className="w-6 h-6 text-gold-500 mr-3" />
                      <span className="text-2xl font-bold text-emerald-900">2010</span>
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                      Første Lokaler
                    </h3>
                    <p className="text-gray-600">
                      Vi flyttet inn i våre første permanente lokaler i Bankgata 22A, 
                      som gav oss mulighet til å utvide våre aktiviteter.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2015 - Quran School */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <Users className="w-6 h-6 text-emerald-900 mr-3" />
                      <span className="text-2xl font-bold text-emerald-900">2015</span>
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                      Quranskole Startet
                    </h3>
                    <p className="text-gray-600">
                      Vi startet vår første Quranskole for barn, som har vokst 
                      til å bli en viktig del av vårt tilbud.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-900 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2020 - Digital Transformation */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold-500 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <Award className="w-6 h-6 text-gold-500 mr-3" />
                      <span className="text-2xl font-bold text-emerald-900">2020</span>
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                      Digital Utvikling
                    </h3>
                    <p className="text-gray-600">
                      Under pandemien utviklet vi digitale løsninger for å holde 
                      fellesskapet sammen, inkludert online bønnetider og undervisning.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2024 - New Website */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-6 h-6 text-emerald-900 mr-3" />
                      <span className="text-2xl font-bold text-emerald-900">2024</span>
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                      Moderne Nettside
                    </h3>
                    <p className="text-gray-600">
                      Vi lanserer vår nye, moderne nettside for å bedre tjene 
                      fellesskapet og gjøre informasjon mer tilgjengelig.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-900 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-emerald-900 text-center mb-12">
              Våre Tall
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-900 mb-2">19+</div>
                <div className="text-gray-600">År i fellesskapet</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-900 mb-2">200+</div>
                <div className="text-gray-600">Aktive medlemmer</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-900 mb-2">50+</div>
                <div className="text-gray-600">Barn i Quranskole</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-900 mb-2">365</div>
                <div className="text-gray-600">Dager åpent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
