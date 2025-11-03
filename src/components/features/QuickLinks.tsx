import Link from 'next/link';
import { Clock, BookOpen, Heart, MapPin, Phone, Calendar, Users, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const quickLinks = [
  {
    icon: Clock,
    title: 'Bønnetider',
    description: 'Se daglige bønnetider for Lillehammer',
    href: '/prayer-times',
    color: 'emerald',
    stat: 'Oppdatert daglig',
  },
  {
    icon: Calendar,
    title: 'Ramadan',
    description: 'Ramadan kalender og informasjon',
    href: '/ramadan',
    color: 'gold',
    stat: 'Kommer snart',
  },
  {
    icon: BookOpen,
    title: 'Quranskole',
    description: 'Påmelding og informasjon om Quranskole',
    href: '/quran-school',
    color: 'emerald',
    stat: 'Påmelding åpen',
  },
  {
    icon: Heart,
    title: 'Donasjoner',
    description: 'Støtt moskeen og våre aktiviteter',
    href: '/donate',
    color: 'gold',
    stat: 'Takknemlig for støtte',
  },
  {
    icon: MapPin,
    title: 'Kontakt',
    description: 'Adresse, telefon og åpningstider',
    href: '/contact',
    color: 'emerald',
    stat: 'Alltid åpent',
  },
  {
    icon: Users,
    title: 'Om Oss',
    description: 'Lær mer om moskeen og fellesskapet',
    href: '/about',
    color: 'gold',
    stat: 'Siden 2005',
  },
];

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-900',
    text: 'text-emerald-900',
  },
  gold: {
    bg: 'bg-gold-500',
    text: 'text-gold-900',
  },
};

export function QuickLinks() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-900">
            Hurtiglenker
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Rask tilgang til de viktigste sidene og tjenestene våre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            const colors = colorClasses[link.color as keyof typeof colorClasses];

            return (
              <Link key={index} href={link.href} className="group block h-full">
                <Card hover variant="elevated" className="h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200 shadow-sm`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 ${colors.text} group-hover:opacity-90 transition-opacity`}>
                    {link.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                    {link.description}
                  </p>

                  {/* Footer */}
                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                    <span className={`text-sm font-semibold ${colors.text}`}>
                      {link.stat}
                    </span>
                    <ArrowRight 
                      className={`w-5 h-5 ${colors.text} group-hover:translate-x-1 transition-transform`}
                    />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
