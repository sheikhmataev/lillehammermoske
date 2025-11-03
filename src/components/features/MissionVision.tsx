import { Heart, Users, BookOpen, Globe } from 'lucide-react';

export function MissionVision() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Vår Misjon & Visjon
            </h2>
            <p className="text-xl text-gray-600">
              Vi jobber for å styrke det muslimske fellesskapet og fremme forståelse mellom kulturer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="card">
              <div className="w-16 h-16 bg-emerald-900 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-emerald-900 mb-4">
                Vår Misjon
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Å skape et sterkt og inkluderende muslimsk fellesskap i Lillehammer som 
                støtter hverandre gjennom religiøs praksis, utdanning og fellesskapsaktiviteter. 
                Vi jobber hver dag for å være et hjem langt fra hjemmet.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Vi ønsker å være en bro mellom kulturer og bidra til en harmonisk 
                sameksistens i det norske samfunnet. Alle er velkommen – muslim eller ikke!
              </p>
            </div>

            {/* Vision */}
            <div className="card">
              <div className="w-16 h-16 bg-gold-500 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-emerald-900 mb-4">
                Vår Visjon
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Å være et moderne, åpent og inkluderende kulturelt senter som tjener 
                det muslimske fellesskapet i Lillehammer og omegn – ikke bare en moske, 
                men et sted hvor fellesskapet vokser og blomstrer.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Vi ønsker å være en ressurs for både muslimer og ikke-muslimer som 
                ønsker å lære om islam og muslimsk kultur. Har du spørsmål? Bare kom innom!
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-emerald-900 text-center mb-12">
              Våre Verdier
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-emerald-900" />
                </div>
                <h4 className="text-xl font-semibold text-emerald-900 mb-3">
                  Felleskap
                </h4>
                <p className="text-gray-600">
                  Vi bygger sterke bånd mellom medlemmer og skaper et støttende miljø.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-10 h-10 text-gold-500" />
                </div>
                <h4 className="text-xl font-semibold text-emerald-900 mb-3">
                  Utdanning
                </h4>
                <p className="text-gray-600">
                  Vi tilbyr religiøs utdanning og opplæring for alle aldre.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-emerald-900" />
                </div>
                <h4 className="text-xl font-semibold text-emerald-900 mb-3">
                  Medmenneskelighet
                </h4>
                <p className="text-gray-600">
                  Vi praktiserer islamiske verdier om omsorg og medmenneskelighet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
