'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, Moon } from 'lucide-react';

export function RamadanCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Ramadan 2024 starts on March 10, 2024
    const ramadanStart = new Date('2024-03-10T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = ramadanStart.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-emerald-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Moon className="w-12 h-12 text-gold-500 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Ramadan 2024
            </h2>
          </div>
          
          <p className="text-xl text-gray-200 mb-12">
            Den hellige måneden starter om:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-gold-500 mb-2">
                {timeLeft.days}
              </div>
              <div className="text-gray-200">Dager</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-gold-500 mb-2">
                {timeLeft.hours}
              </div>
              <div className="text-gray-200">Timer</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-gold-500 mb-2">
                {timeLeft.minutes}
              </div>
              <div className="text-gray-200">Minutter</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-gold-500 mb-2">
                {timeLeft.seconds}
              </div>
              <div className="text-gray-200">Sekunder</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Ramadan Starter 10. Mars 2024
            </h3>
            <p className="text-gray-200 mb-6">
              Forbered deg på den hellige måneden med bønn, fasting og fellesskap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Se Ramadan Kalender
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 rounded-lg font-medium transition-colors">
                Lær om Ramadan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
