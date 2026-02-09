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
            <p className="text-xl text-gray-800">
              Fra et lite fellesskap til et etablert kulturelt senter i Lillehammer.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-900 rounded-full"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {/* 1998 - Foundation */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-6 h-6 text-emerald-900 mr-3" />
                      <span className="text-2xl font-bold text-emerald-900">1998</span>
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                      Moskeen Etablert
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      The Muslim Cultural Center Lillehammer ble etablert med 150 medlemmer. 
                      Vi startet i enkle lokaler, men med et sterkt ønske om å skape et permanent samlingspunkt 
                      for muslimer i Lillehammer og Gudbrandsdalen. Dette var begynnelsen på det som skulle bli 
                      det største muslimske trossamfunnet i Innlandet.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-900 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2015 - Bliksethjørnet */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold-500 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <Building className="w-6 h-6 text-gold-500 mr-3" />
                      <span className="text-2xl font-bold text-emerald-900">2015</span>
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                      Brannsikkerhetskrise
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      Etter 17 år i lokalene på Bliksethjørnet, ble moskeen stengt av kommunen på grunn av brannsikkerhet. 
                      Bygget var sterkt forfallent og manglet nødvendige godkjenninger. Plutselig sto 750 medlemmer uten et sted å samles. 
                      Dette startet en lang kamp for å finne nye, egnede lokaler sentralt i Lillehammer.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2016 - Søk etter Nye Lokaler */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <Users className="w-6 h-6 text-emerald-900 mr-3" />
                      <span className="text-2xl font-bold text-emerald-900">2016</span>
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                      Søk etter Nye Lokaler
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      Etter stengningen av Bliksethjørnet, startet vi intensivt søk etter nye lokaler. 
                      Vi fant gode egnede lokaler i Fagstadhaven (400 kvm), men kommunen var skeptisk. 
                      De mente det ikke var heldig med trossamfunn i første etasje i boligblokk og foreslo alternativer utenfor sentrum.
                    </p>
                    <p className="text-gray-800 leading-relaxed">
                      Samtidig startet vi arbeidet med å reise kapital for å bygge egen moské på sikt. 
                      Sharif Mukhtar og Javaid Sheikh ledet arbeidet med å finne en kortsiktig løsning mens vi planla for fremtiden.
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
                    <p className="text-gray-800 leading-relaxed">
                      2020 var tøft. Alle var hjemme, men vi kunne ikke bare gi opp. Vi lærte oss å bruke Zoom, 
                      lagde YouTube-videoer, og sendte ut daglige oppdateringer. Det som startet som nødvendighet 
                      ble faktisk en del av hvem vi er i dag – vi er bedre på digitale løsninger nå!
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
                    <p className="text-gray-800 leading-relaxed">
                      Vi er alltid tilgjengelige for spørsmål og samtaler. Mange lurer på: 
                      &quot;hvordan ser bønnetidene ut?&quot;, &quot;når er neste arrangement?&quot;, 
                      &quot;hvordan melder jeg meg på?&quot;. Vi er her for å hjelpe!
                    </p>
                    <p className="text-gray-800 leading-relaxed">
                      Nå har vi endelig et sted hvor alt finnes. Vi håper du liker den! 🤲
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
                <div className="text-4xl font-bold text-emerald-900 mb-2">25+</div>
                <div className="text-gray-600">År i fellesskapet</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-900 mb-2">750+</div>
                <div className="text-gray-600">Medlemmer i Lillehammer</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-900 mb-2">700+</div>
                <div className="text-gray-600">Medlemmer i Innlandet</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-900 mb-2">100+</div>
                <div className="text-gray-600">Fredagsbønn-gjester</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                Fra 150 medlemmer i 1998 til over 750 i dag – vi er den største moskeen i Innlandet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
