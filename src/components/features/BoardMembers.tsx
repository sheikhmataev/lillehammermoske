'use client';

import { useState } from 'react';
import { Mail, Phone, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const boardMembers = [
  {
    id: 1,
    name: 'Mukhtar Sharif Mukhtar',
    position: 'Styrets Leder',
    birthYear: 1975,
    email: 'mukhtar@lillehammermoske.no',
    phone: '+47 123 45 678',
    image: '/images/board/mukhtar.jpg',
    bio: 'Har ledet styret siden 2018 og jobber aktivt for å styrke det muslimske fellesskapet i Lillehammer.',
  },
  {
    id: 2,
    name: 'Hossein Sharipovitsj Aldamov',
    position: 'Nestleder',
    birthYear: 1976,
    email: 'hossein@lillehammermoske.no',
    phone: '+47 123 45 679',
    image: '/images/board/hossein.jpg',
    bio: 'Nestleder siden 2020 med fokus på utdanning og ungdomsaktiviteter.',
  },
  {
    id: 3,
    name: 'Muhammad Talha Habib',
    position: 'Daglig Leder',
    birthYear: 1986,
    email: 'talha@lillehammermoske.no',
    phone: '+47 123 45 680',
    image: '/images/board/talha.jpg',
    bio: 'Daglig leder som koordinerer daglige aktiviteter og administrasjon.',
  },
  {
    id: 4,
    name: 'Javaid Akhtar Sheikh',
    position: 'Styremedlem',
    birthYear: 1952,
    email: 'javaid@lillehammermoske.no',
    phone: '+47 123 45 681',
    image: '/images/board/javaid.jpg',
    bio: 'Erfaren styremedlem med lang historie i det muslimske fellesskapet.',
  },
  {
    id: 5,
    name: 'Ahmed Macalin Yahye',
    position: 'Styremedlem',
    birthYear: 1977,
    email: 'ahmed@lillehammermoske.no',
    phone: '+47 123 45 682',
    image: '/images/board/ahmed.jpg',
    bio: 'Styremedlem med fokus på fellesskapsutvikling og kultur.',
  },
];

export function BoardMembers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % boardMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + boardMembers.length) % boardMembers.length);
  };

  const goToMember = (index: number) => {
    setCurrentIndex(index);
  };

  const currentMember = boardMembers[currentIndex];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Styret
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Møt menneskene bak scenen – de dedikerte styremedlemmene som jobber frivillig 
              for å holde moskeen i gang.
            </p>
            <p className="text-sm text-gray-500">
              Alle disse menneskene har vanlige jobber og familier, men finner tid til å gi tilbake til fellesskapet. 
              Takk til alle! 🙏
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative mb-12">
            {/* Card with Sliding Content */}
            <div className="relative overflow-hidden">
              <Card variant="elevated" className="max-w-2xl mx-auto p-8 md:p-12">
                <div 
                  className="transition-transform duration-300 ease-in-out transform"
                  style={{ transform: `translateX(0)` }}
                >
                  {/* Member Content */}
                  <div className="text-center">
                    {/* Avatar */}
                    <div className="w-40 h-40 bg-gradient-to-br from-emerald-900 to-gold-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <span className="text-5xl font-bold text-white">
                        {currentMember.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    {/* Name and Position */}
                    <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                      {currentMember.name}
                    </h3>
                    <p className="text-gold-600 font-semibold text-lg mb-2">
                      {currentMember.position}
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                      Født {currentMember.birthYear}
                    </p>

                    {/* Bio */}
                    <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-xl mx-auto">
                      {currentMember.bio}
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-4 pt-8 border-t border-gray-200">
                      <div className="flex items-center justify-center text-sm text-gray-700">
                        <Mail className="w-5 h-5 mr-3 text-emerald-900 flex-shrink-0" />
                        <a 
                          href={`mailto:${currentMember.email}`}
                          className="hover:text-emerald-900 transition-colors font-medium"
                        >
                          {currentMember.email}
                        </a>
                      </div>
                      <div className="flex items-center justify-center text-sm text-gray-700">
                        <Phone className="w-5 h-5 mr-3 text-emerald-900 flex-shrink-0" />
                        <a 
                          href={`tel:${currentMember.phone}`}
                          className="hover:text-emerald-900 transition-colors font-medium"
                        >
                          {currentMember.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevMember}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-emerald-900 hover:bg-emerald-800 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label="Forrige styremedlem"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextMember}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-emerald-900 hover:bg-emerald-800 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label="Neste styremedlem"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center items-center space-x-2 mb-16">
            {boardMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToMember(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                  index === currentIndex
                    ? 'bg-emerald-900 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Gå til styremedlem ${index + 1}`}
              />
            ))}
          </div>

          {/* Member Counter */}
          <div className="text-center text-sm text-gray-500 mb-16">
            {currentIndex + 1} av {boardMembers.length}
          </div>

          {/* Board Meeting Info */}
          <div className="bg-emerald-900 rounded-2xl p-10 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center text-white">
                Styrets Møter
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <Calendar className="w-6 h-6 mr-3" />
                    Møtefrekvens
                  </h4>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    Vi møtes månedlig, vanligvis første lørdag i måneden kl. 14:00. 
                    Det varierer litt avhengig av andre arrangementer, så sjekk kunngjøringene.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    Alle medlemmer er velkommen til å delta på styremøtene – vi setter stor pris på input fra fellesskapet!
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-white">
                    Kontakt Styret
                  </h4>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Har du spørsmål, forslag eller bekymringer? Vi lytter alltid. 
                    Send oss en e-post eller kom innom – vi er åpne for dialog.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="mailto:styret@lillehammermoske.no"
                      className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                    >
                      Send e-post
                    </a>
                    <a 
                      href="/contact"
                      className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-6 py-3 rounded-lg font-medium transition-colors text-center"
                    >
                      Kontaktskjema
                    </a>
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
