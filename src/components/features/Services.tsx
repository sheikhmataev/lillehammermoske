import Link from 'next/link';
import { BookOpen, Calendar, Users, Heart, MessageCircle, Download } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Quranskole for Barn',
    description: 'Religiøs utdanning og opplæring for barn i alle aldre. Vi tilbyr både grunnleggende og avanserte kurs.',
    href: '/quran-school',
    color: 'emerald',
  },
  {
    icon: Calendar,
    title: 'Ramadan Kalender',
    description: 'Komplett oversikt over Ramadan med bønnetider, iftar-tider og spesielle aktiviteter.',
    href: '/ramadan',
    color: 'gold',
  },
  {
    icon: Users,
    title: 'Fellesskapsaktiviteter',
    description: 'Regelmessige aktiviteter og arrangementer for å styrke det muslimske fellesskapet.',
    href: '/about',
    color: 'emerald',
  },
  {
    icon: Heart,
    title: 'Donasjoner',
    description: 'Støtt moskeen og våre aktiviteter gjennom donasjoner. Hver bidrag teller.',
    href: '/donate',
    color: 'gold',
  },
  {
    icon: MessageCircle,
    title: 'Kontakt Imam',
    description: 'Direkte kommunikasjon med imamen for religiøse spørsmål og veiledning.',
    href: '/contact',
    color: 'emerald',
  },
  {
    icon: Download,
    title: 'Bønnetid App',
    description: 'Last ned vår bønnetid app for oppdaterte bønnetider direkte på telefonen.',
    href: '/prayer-times',
    color: 'gold',
  },
];

export function Services() {
  return (
    <section className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Våre Tjenester
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi tilbyr en rekke tjenester for å støtte det muslimske fellesskapet i Lillehammer 
            og omegn. Fra religiøs utdanning til fellesskapsaktiviteter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = {
              emerald: 'bg-emerald-900 text-white',
              gold: 'bg-gold-500 text-white',
            };

            return (
              <Link
                key={index}
                href={service.href}
                className="group block"
              >
                <div className="card-hover h-full">
                  <div className={`w-16 h-16 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-emerald-900 mb-4 group-hover:text-emerald-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-emerald-900 font-medium group-hover:text-emerald-800 transition-colors">
                    <span>Lær mer</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-emerald-900 mb-4">
              Har du spørsmål om våre tjenester?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Vi er her for å hjelpe deg. Kontakt oss for mer informasjon eller 
              for å melde deg på våre aktiviteter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Kontakt oss
              </Link>
              <Link href="/about" className="btn-outline">
                Lær mer om oss
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
