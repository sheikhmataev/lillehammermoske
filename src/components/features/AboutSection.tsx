import Link from 'next/link';
import { Users, Heart, BookOpen, Clock, MapPin } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
                Om Lillehammer Moske
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                The Muslim Cultural Center Lillehammer er et kulturelt senter som har vært 
                en del av det muslimske fellesskapet i Lillehammer siden 2005. Vi jobber 
                for å styrke det muslimske fellesskapet og fremme forståelse mellom kulturer.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vårt senter tilbyr bønnetider, religiøs utdanning, fellesskapsaktiviteter 
                og støtte for muslimske familier i Lillehammer og omegn.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-900 mb-2">19+</div>
                <div className="text-gray-600">År i fellesskapet</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-900 mb-2">200+</div>
                <div className="text-gray-600">Medlemmer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-900 mb-2">5</div>
                <div className="text-gray-600">Daglige bønner</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-900 mb-2">24/7</div>
                <div className="text-gray-600">Tilgjengelighet</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary">
                Lær mer om oss
              </Link>
              <Link href="/contact" className="btn-outline">
                Kontakt oss
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card-hover">
              <div className="w-12 h-12 bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                Felleskap
              </h3>
              <p className="text-gray-600">
                Et sterkt muslimsk fellesskap som støtter hverandre gjennom gode og vanskelige tider.
              </p>
            </div>

            <div className="card-hover">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                Utdanning
              </h3>
              <p className="text-gray-600">
                Quranskole for barn og voksne, samt religiøs veiledning og opplæring.
              </p>
            </div>

            <div className="card-hover">
              <div className="w-12 h-12 bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                Bønnetider
              </h3>
              <p className="text-gray-600">
                Regelmessige bønnetider og religiøse aktiviteter for hele familien.
              </p>
            </div>

            <div className="card-hover">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-3">
                Støtte
              </h3>
              <p className="text-gray-600">
                Støtte og veiledning for muslimske familier og enkeltpersoner.
              </p>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="mt-16 bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Besøk oss</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-medium">Bankgata 12</p>
                    <p className="text-gray-200">2609 Lillehammer, Norge</p>
                  </div>
                </div>
                <p className="text-gray-200">
                  Vårt senter ligger sentralt i Lillehammer og er lett tilgjengelig 
                  med bil og kollektivtransport.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4">Åpningstider</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Mandag - Søndag</span>
                  <span>05:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Jummah (Fredag)</span>
                  <span>12:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Ramadan</span>
                  <span>24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
