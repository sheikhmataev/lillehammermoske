'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Coffee, Clock } from 'lucide-react';

export function RamadanCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isRamadanActive, setIsRamadanActive] = useState(false);
  const [isRamadanOver, setIsRamadanOver] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);

  useEffect(() => {
    const ramadanStart = new Date('2026-02-19T00:00:00');
    const ramadanEnd = new Date('2026-03-20T23:59:59');
    
    const timer = setInterval(() => {
      const now = new Date();
      
      if (now >= ramadanStart && now <= ramadanEnd) {
        setIsRamadanActive(true);
        setIsRamadanOver(false);
        const dayNumber = Math.floor((now.getTime() - ramadanStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        setCurrentDay(dayNumber);
        
        // Countdown to Iftar today (approximate sunset)
        const iftarTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0);
        
        if (now < iftarTime) {
          const difference = iftarTime.getTime() - now.getTime();
          setTimeLeft({
            days: 0,
            hours: Math.floor(difference / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
          });
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      } else if (now < ramadanStart) {
        setIsRamadanActive(false);
        setIsRamadanOver(false);
        const difference = ramadanStart.getTime() - now.getTime();
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setIsRamadanActive(false);
        setIsRamadanOver(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-cream-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Countdown Cards */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-gold-500" />
              <span className="text-emerald-900 font-semibold text-sm uppercase tracking-wider">
                {isRamadanActive 
                  ? `Ramadan Dag ${currentDay} av 30`
                  : isRamadanOver 
                    ? 'Ramadan 2026 er over - Eid Mubarak!'
                    : 'Nedtelling til Ramadan 2026'
                }
              </span>
            </div>
            {isRamadanActive && (
              <p className="text-gray-600">Tid til Iftar:</p>
            )}
          </div>

          <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto mb-10">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-gray-100 text-center">
              <div className="text-3xl md:text-5xl font-extrabold text-emerald-900 mb-1">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider">Dager</div>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-gray-100 text-center">
              <div className="text-3xl md:text-5xl font-extrabold text-emerald-900 mb-1">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider">Timer</div>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-gray-100 text-center">
              <div className="text-3xl md:text-5xl font-extrabold text-emerald-900 mb-1">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider">Minutter</div>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-gray-100 text-center">
              <div className="text-3xl md:text-5xl font-extrabold text-emerald-900 mb-1">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider">Sekunder</div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-emerald-900" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Suhoor</p>
                  <p className="font-bold text-emerald-900">Før Fajr</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <Sun className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Faste</p>
                  <p className="font-bold text-emerald-900">Fajr &ndash; Maghrib</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-end">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Moon className="w-5 h-5 text-emerald-900" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Iftar</p>
                  <p className="font-bold text-emerald-900">Ved Maghrib</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
