import Link from 'next/link';
import { BookOpen, Calendar, Users, Heart, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const services = [
  {
    icon: Clock,
    title: 'Bønnetider',
    description: 'Daglige bønnetider for Lillehammer. Automatisk oppdatert hver dag basert på vår lokasjon.',
    href: '/prayer-times',
    color: 'emerald',
  },
  {
    icon: Calendar,
    title: 'Ramadan',
    description: 'Komplett oversikt over Ramadan med kalender, iftar-tider, og spesielle arrangementer.',
    href: '/ramadan',
    color: 'gold',
  },
  {
    icon: BookOpen,
    title: 'Quranskole',
    description: 'Religiøs utdanning og opplæring for barn og voksne. Vi tilbyr både grunnleggende og avanserte kurs.',
    href: '/quran-school',
    color: 'emerald',
  },
  {
    icon: Heart,
    title: 'Donasjoner',
    description: 'Støtt moskeen og våre aktiviteter gjennom donasjoner. Alle bidrag bidrar til å styrke fellesskapet.',
    href: '/donate',
    color: 'gold',
  },
  {
    icon: Users,
    title: 'Om Moskeen',
    description: 'Lær mer om vår historie, misjon, visjon og hvordan vi jobber for fellesskapet.',
    href: '/about',
    color: 'emerald',
  },
  {
    icon: MessageCircle,
    title: 'Kontakt',
    description: 'Kontakt oss for spørsmål, informasjon eller for å melde deg på våre aktiviteter.',
    href: '/contact',
    color: 'gold',
  },
];

export function Services() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Clean Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-900">
            Våre Tjenester
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-2">
            Vi tilbyr en rekke tjenester for å støtte det muslimske fellesskapet i Lillehammer 
            og omegn. Fra religiøs utdanning til fellesskapsaktiviteter – det er noe for alle.
          </p>
          <p className="text-sm text-gray-500">
            Har du et behov vi ikke dekker? Snakk med oss – vi er alltid åpne for nye ideer!
          </p>
        </div>

        {/* Services Grid - Enhanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isGold = service.color === 'gold';

            return (
              <Link
                key={index}
                href={service.href}
                className="group block h-full"
              >
                <Card hover variant="elevated" className="h-full flex flex-col">
                  {/* Icon - Enhanced */}
                  <div className={`w-16 h-16 ${isGold ? 'bg-gold-500' : 'bg-emerald-900'} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200 shadow-sm`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 ${isGold ? 'text-gold-900' : 'text-emerald-900'} group-hover:opacity-90 transition-opacity`}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-grow">
                    {service.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center font-semibold text-emerald-900 group-hover:text-emerald-800 transition-colors pt-4 border-t border-gray-100">
                    <span className="text-sm">Lær mer</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Simple CTA */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <Card variant="elevated" className="bg-emerald-900 text-white border-0">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
              Har du spørsmål om våre tjenester?
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Vi er her for å hjelpe deg. Kontakt oss for mer informasjon eller 
              for å melde deg på våre aktiviteter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Kontakt oss</span>
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Lær mer om oss</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
