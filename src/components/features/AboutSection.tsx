import Link from 'next/link';
import Image from 'next/image';
import { Users, Heart, BookOpen, Clock, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { config } from '@/lib/config';

export function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-extrabold text-emerald-900 mb-6">
                Om Lillehammer Moske
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                The Muslim Cultural Center Lillehammer er et kulturelt senter som har vært 
                en del av det muslimske fellesskapet i Lillehammer siden 2005. Vi startet smått, 
                men har vokst til å bli en viktig del av det muslimske fellesskapet her. 
                Vi jobber hver dag for å styrke fellesskapet og fremme forståelse mellom kulturer.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vårt senter tilbyr bønnetider, religiøs utdanning, fellesskapsaktiviteter 
                og støtte for muslimske familier i Lillehammer og omegn. 
                Hvis du er ny i området, kom gjerne innom og si hei – vi hjelper deg gjerne! 😊
              </p>
            </div>

            {/* Stats - Enhanced */}
            <div className="grid grid-cols-2 gap-6">
              <Card variant="subtle" className="text-center">
                <div className="text-4xl font-extrabold text-emerald-900 mb-2">19+</div>
                <div className="text-gray-600 text-sm font-medium">År i fellesskapet</div>
              </Card>
              <Card variant="subtle" className="text-center">
                <div className="text-4xl font-extrabold text-emerald-900 mb-2">1000+</div>
                <div className="text-gray-600 text-sm font-medium">Medlemmer</div>
              </Card>
              <Card variant="subtle" className="text-center">
                <div className="text-4xl font-extrabold text-emerald-900 mb-2">5</div>
                <div className="text-gray-600 text-sm font-medium">Daglige bønner</div>
              </Card>
              <Card variant="subtle" className="text-center">
                <div className="text-4xl font-extrabold text-emerald-900 mb-2">24/7</div>
                <div className="text-gray-600 text-sm font-medium">Tilgjengelighet</div>
              </Card>
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

          {/* Mosque Interior Images */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/assets/images/mosque/inside_image.png" 
                  alt="Lillehammer Moske - Interiør"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-5 shadow-lg">
                    <h3 className="text-emerald-900 font-bold text-xl mb-2">
                      Vakkert Bønnerom
                    </h3>
                    <p className="text-gray-600">
                      Romslige og fredfulle omgivelser for bønn og meditasjon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/assets/images/mosque/inside2.png" 
                  alt="Lillehammer Moske - Interiør 2"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-5 shadow-lg">
                    <h3 className="text-emerald-900 font-bold text-xl mb-2">
                      Fellesskapsområder
                    </h3>
                    <p className="text-gray-600">
                      Møteplasser for sosiale og kulturelle aktiviteter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Info - Enhanced Card */}
        <div className="mt-16">
          <div className="bg-emerald-900 text-white rounded-xl shadow-md p-10 border-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Besøk oss</h3>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white mb-1">Bankgata 12</p>
                      <p className="text-white/80">2609 Lillehammer, Norge</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed ml-16">
                    Vårt senter ligger sentralt i Lillehammer og er lett tilgjengelig 
                    med bil og kollektivtransport.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-bold mb-5 text-white">Åpningstider</h4>
                <div className="space-y-3">
                  <div className="flex justify-between py-2.5 border-b border-white/10">
                    <span className="text-white/90">Mandag - Søndag</span>
                    <span className="font-bold text-white">05:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between py-2.5 border-b border-white/10">
                    <span className="text-white/90">Jummah (Fredag)</span>
                    <span className="font-bold text-gold-400">Khutbah {config.jummah.khutbah} | Jamat {config.jummah.jamat}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-white/90">Ramadan</span>
                    <span className="font-bold text-white">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
