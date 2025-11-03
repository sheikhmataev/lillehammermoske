'use client';

import { BookOpen, Users, Clock, Award, Heart } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

interface Class {
  id: number;
  title: string;
  ageGroup: string;
  description: string;
  schedule: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  spots: number;
  price: string;
  icon: typeof BookOpen;
}

const classes: Class[] = [
  {
    id: 1,
    title: 'Grunnkurs for Barn (6-10 år)',
    ageGroup: '6-10 år',
    description: 'Et vennlig introduksjonskurs hvor barna lærer grunnleggende arabisk, bønnetider, og historier fra Koranen. Vi bruker aktiviteter, sang og fortellinger for å gjøre læring morsomt.',
    schedule: 'Onsdager 16:00-17:30',
    level: 'beginner',
    spots: 12,
    price: 'Gratis',
    icon: Heart,
  },
  {
    id: 2,
    title: 'Avansert for Barn (11-15 år)',
    ageGroup: '11-15 år',
    description: 'For barn som har grunnleggende kunnskap. Fokus på memorisering, koranlesing med tajweed, og forståelse av betydningen. Vi prøver å gjøre det relevant for ungdommenes hverdag.',
    schedule: 'Torsdager 17:00-18:30',
    level: 'intermediate',
    spots: 10,
    price: 'Gratis',
    icon: BookOpen,
  },
  {
    id: 3,
    title: 'Voksenklasse - Begynnere',
    ageGroup: 'Voksne',
    description: 'Aldri for sent å begynne! Denne klassen er perfekt for voksne som ønsker å lære å lese Koranen fra begynnelsen. Vi tar det i ditt tempo.',
    schedule: 'Lørdager 14:00-15:30',
    level: 'beginner',
    spots: 8,
    price: '500 kr/semester',
    icon: Users,
  },
  {
    id: 4,
    title: 'Tajweed & Koranrecitasjon',
    ageGroup: 'Alle aldre',
    description: 'Forfiner din koranlesing med riktig uttale og melodier. Klasser for både barn og voksne som allerede kan lese arabisk.',
    schedule: 'Søndager 10:00-11:30',
    level: 'advanced',
    spots: 15,
    price: 'Gratis',
    icon: Award,
  },
  {
    id: 5,
    title: 'Arabisk Språk',
    ageGroup: 'Alle aldre',
    description: 'Lær moderne arabisk eller klassisk arabisk. Vi tilbyr både grunnkurs og viderekomne nivåer. Perfekt for alle som ønsker å forstå Koranen bedre.',
    schedule: 'Fredager 18:00-19:30',
    level: 'beginner',
    spots: 12,
    price: '600 kr/semester',
    icon: BookOpen,
  },
  {
    id: 6,
    title: 'Ett-til-ett Privatundervisning',
    ageGroup: 'Alle aldre',
    description: 'Trenger du mer fokusert oppmerksomhet? Vi tilbyr også private timer med våre erfarne lærere. Tider avtales individuelt.',
    schedule: 'Etter avtale',
    level: 'beginner',
    spots: 5,
    price: '300 kr/time',
    icon: Clock,
  },
];

const levelColors = {
  beginner: 'bg-emerald-50 text-emerald-900 border border-emerald-200',
  intermediate: 'bg-blue-50 text-blue-900 border border-blue-200',
  advanced: 'bg-purple-50 text-purple-900 border border-purple-200',
};

const levelLabels = {
  beginner: 'Begynnere',
  intermediate: 'Viderekomne',
  advanced: 'Avansert',
};

export function QuranClasses() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-extrabold text-emerald-900 mb-6">
            Våre Klasser
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-2">
            Vi tilbyr et variert utvalg av klasser for både barn og voksne. Fra grunnkurs til avanserte 
            klasser – det er noe for alle. Alle klasser holdes på norsk og/eller arabisk, avhengig av nivået.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Psst: Mange av klassene våre er faktisk gratis, takket være donasjoner fra vårt fellesskap! 🙏
          </p>
        </div>

        {/* Classes Grid - Enhanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {classes.map((classItem) => {
            const Icon = classItem.icon;
            const isFullyBooked = classItem.spots <= 2;
            
            return (
              <Card
                key={classItem.id}
                hover
                variant="elevated"
                className={`relative flex flex-col h-full ${isFullyBooked ? 'opacity-75' : ''}`}
              >
                {/* Badge */}
                {isFullyBooked && (
                  <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-10">
                    Snart fullt
                  </div>
                )}
                
                {/* Header with Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-emerald-900 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${levelColors[classItem.level]}`}>
                    {levelLabels[classItem.level]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-emerald-900 mb-3 leading-tight">
                  {classItem.title}
                </h3>

                {/* Age Group */}
                <div className="mb-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Aldersgruppe</span>
                  <p className="text-sm font-medium text-gray-700 mt-1">{classItem.ageGroup}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
                  {classItem.description}
                </p>

                {/* Footer with Details */}
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-emerald-900 flex-shrink-0" />
                    <span className="font-medium">{classItem.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-emerald-900 flex-shrink-0" />
                      <span>{classItem.spots} plasser</span>
                    </div>
                    <span className="font-bold text-emerald-900">{classItem.price}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3" />
                Hva du trenger å vite
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-900 mr-3 mt-1">•</span>
                  <span className="leading-relaxed">Alle klasser starter hver september og januar. Du kan joine midt i semesteret også!</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-900 mr-3 mt-1">•</span>
                  <span className="leading-relaxed">Vi bruker moderne læremidler og tradisjonelle metoder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-900 mr-3 mt-1">•</span>
                  <span className="leading-relaxed">Små grupper gir god oppfølging - maks 12-15 elever per klasse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-900 mr-3 mt-1">•</span>
                  <span className="leading-relaxed">Materialer og bøker kan kjøpes gjennom skolen (ca. 200-300 kr)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3" />
                Stipendmuligheter
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Vi ønsker at alle skal få mulighet til utdanning. Hvis det er økonomisk vanskelig, 
                kan du søke om stipend eller redusert pris. Snakk med oss – vi finner alltid en løsning!
              </p>
              <p className="text-sm text-gray-600">
                Kontakt oss på info@lillehammermoske.no eller ring oss for å diskutere.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Interessert? Vi gleder oss til å se deg! 😊
          </p>
          <Link href="#registration">
            <button className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg">
              Meld deg på nå
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
