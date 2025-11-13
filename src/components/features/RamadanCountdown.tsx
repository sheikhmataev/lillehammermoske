'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, Moon, Sun, Coffee } from 'lucide-react';

export function RamadanCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isRamadanActive, setIsRamadanActive] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);

  useEffect(() => {
    // Ramadan 2025 expected dates (approximate - will be confirmed closer to date)
    const ramadanStart = new Date('2025-03-01T00:00:00');
    const ramadanEnd = new Date('2025-03-30T23:59:59'); // Approximately 30 days
    
    const timer = setInterval(() => {
      const now = new Date();
      
      if (now >= ramadanStart && now <= ramadanEnd) {
        // Ramadan is active
        setIsRamadanActive(true);
        const dayNumber = Math.floor((now.getTime() - ramadanStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        setCurrentDay(dayNumber);
        
        // Countdown to Iftar today (sunset - approximately 18:00)
        const today = new Date();
        const iftarTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0, 0);
        
        if (now < iftarTime) {
          const difference = iftarTime.getTime() - now.getTime();
          setTimeLeft({
            days: 0,
            hours: Math.floor(difference / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
          });
        } else {
          // After iftar, countdown to tomorrow's iftar
          setTimeLeft({ days: 0, hours: 23, minutes: 59, seconds: 59 });
        }
      } else if (now < ramadanStart) {
        // Countdown to Ramadan start
        setIsRamadanActive(false);
        const difference = ramadanStart.getTime() - now.getTime();
        
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // Ramadan has ended
        setIsRamadanActive(false);
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
              Ramadan 2025
            </h2>
          </div>
          
          {isRamadanActive ? (
            <>
              <p className="text-xl text-emerald-200 mb-4">
                Ramadan Dag {currentDay}
              </p>
              <p className="text-lg text-emerald-300 mb-12">
                Tid til Iftar (måltid ved solnedgang):
              </p>
            </>
          ) : (
            <p className="text-xl text-emerald-200 mb-12">
              Den hellige måneden starter om:
            </p>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-4xl font-bold text-gold-500 mb-2">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-emerald-200">{isRamadanActive ? 'Timer' : 'Dager'}</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-4xl font-bold text-gold-500 mb-2">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-emerald-200">{isRamadanActive ? 'Minutter' : 'Timer'}</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-4xl font-bold text-gold-500 mb-2">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-emerald-200">{isRamadanActive ? 'Sekunder' : 'Minutter'}</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-4xl font-bold text-gold-500 mb-2">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-emerald-200">{isRamadanActive ? 'Nå' : 'Sekunder'}</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              {isRamadanActive ? `Ramadan Dag ${currentDay} - 2025` : 'Ramadan Starter 1. Mars 2025'}
            </h3>
            <p className="text-emerald-200 mb-6">
              {isRamadanActive 
                ? 'Må Allah akseptere din fasting og dina gode gjerninger i denne hellige måneden.'
                : 'Forbered deg på den hellige måneden med bønn, fasting og fellesskap.'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center justify-center space-x-2 text-emerald-200">
                <Coffee className="w-5 h-5 text-gold-500" />
                <span className="text-sm">Suhoor: 05:00</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-emerald-200">
                <Sun className="w-5 h-5 text-gold-500" />
                <span className="text-sm">Fasting: 05:00-18:00</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-emerald-200">
                <Moon className="w-5 h-5 text-gold-500" />
                <span className="text-sm">Iftar: 18:00</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Se Ramadan Kalender
              </button>
              <button className="border-2 border-emerald-300 text-emerald-100 hover:bg-emerald-100 hover:text-emerald-900 px-8 py-3 rounded-lg font-medium transition-colors">
                Lær om Ramadan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
