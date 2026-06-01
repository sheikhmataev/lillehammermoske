import Link from 'next/link';
import { BookOpen, Calendar, Users, Heart, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';

const services = [
  {
    icon: Clock,
    title: 'Bønnetider',
    description: 'Daglige bønnetider for Lillehammer, beregnet automatisk og oppdatert hver dag.',
    href: '/prayer-times',
  },
  {
    icon: Calendar,
    title: 'Ramadan',
    description: 'Fastekalender, iftar-tider, Taraweeh-program og arrangementer gjennom hele måneden.',
    href: '/ramadan',
  },
  {
    icon: BookOpen,
    title: 'Quranskole',
    description: 'Undervisning i Qaida, Quran-lesing og Tajweed for barn og voksne, på hvert sitt nivå.',
    href: '/quran-school',
  },
  {
    icon: Heart,
    title: 'Donasjoner',
    description: 'Støtt driften og aktivitetene. Hvert bidrag styrker fellesskapet vårt.',
    href: '/donate',
  },
  {
    icon: Users,
    title: 'Om moskéen',
    description: 'Historien vår, visjonen og menneskene bak The Muslim Cultural Center.',
    href: '/about',
  },
  {
    icon: MessageCircle,
    title: 'Kontakt',
    description: 'Spørsmål, omvisning eller påmelding? Vi svarer gjerne — ta kontakt.',
    href: '/contact',
  },
];

export function Services() {
  return (
    <Band tone="ink" glow>
      <SectionHeading
        tone="ink"
        eyebrow="Hva vi tilbyr"
        arabic="خدماتنا"
        title="Våre tjenester"
        lead="Fra daglig bønn til undervisning og fellesskap — alt på ett sted, for hele familien."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.href}
              href={service.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-white/[0.05]"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/12 text-[#E6C547] ring-1 ring-inset ring-[#D4AF37]/20 transition-transform group-hover:scale-105">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="font-display mt-6 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-white/65">{service.description}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 border-t border-white/10 pt-4 text-sm font-medium text-[#E6C547] transition-colors group-hover:text-white">
                Lær mer
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </Band>
  );
}
