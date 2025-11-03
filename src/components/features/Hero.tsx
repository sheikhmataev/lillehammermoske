'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Clock, Users } from 'lucide-react';

export function Hero() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 flex items-center">
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <span className="text-sm font-medium text-white">Siden 2005</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight text-white">
              Velkommen til
              <span className="block text-gold-400 mt-3">
                Lillehammer Moske
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              The Muslim Cultural Center
              <span className="block mt-2 text-lg text-white/80">
                Et fellesskap for muslimer i Lillehammer og omegn
              </span>
            </p>
            
            <p className="text-lg text-gold-300 font-medium">
              Vi er her for deg, hver dag, hele året 🙏
            </p>

            {/* Current Time Display */}
            <div className="flex items-center space-x-4 p-5 bg-white/15 backdrop-blur-sm rounded-lg border border-white/25 max-w-fit">
              <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-gold-300" />
              </div>
              <div>
                <p className="text-xs text-white/70 uppercase tracking-wider">Nåværende tid</p>
                <p className="text-2xl font-bold font-mono text-white">
                  {currentTime.toLocaleTimeString('nb-NO', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/prayer-times" 
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Se Bønnetider</span>
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-white/40 text-white hover:bg-white hover:text-emerald-900 px-8 py-3.5 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-colors bg-white/10 backdrop-blur-sm"
              >
                <Users className="w-5 h-5" />
                <span>Lær mer om oss</span>
              </Link>
            </div>
          </div>

          {/* Features Grid - Minimal */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/15 backdrop-blur-sm rounded-xl border border-white/25 hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-gold-500/25 rounded-lg flex items-center justify-center mb-4 border border-gold-500/30">
                <Calendar className="w-6 h-6 text-gold-300" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Bønnetider</h3>
              <p className="text-sm text-white/80">
                Automatisk oppdaterte bønnetider
              </p>
            </div>

            <div className="p-6 bg-white/15 backdrop-blur-sm rounded-xl border border-white/25 hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-gold-500/25 rounded-lg flex items-center justify-center mb-4 border border-gold-500/30">
                <Users className="w-6 h-6 text-gold-300" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Quranskole</h3>
              <p className="text-sm text-white/80">
                Utdanning for barn og voksne
              </p>
            </div>

            <div className="p-6 bg-white/15 backdrop-blur-sm rounded-xl border border-white/25 hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-gold-500/25 rounded-lg flex items-center justify-center mb-4 border border-gold-500/30">
                <Users className="w-6 h-6 text-gold-300" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Fellesskap</h3>
              <p className="text-sm text-white/80">
                Styrke det muslimske fellesskapet
              </p>
            </div>

            <div className="p-6 bg-white/15 backdrop-blur-sm rounded-xl border border-white/25 hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-gold-500/25 rounded-lg flex items-center justify-center mb-4 border border-gold-500/30">
                <Clock className="w-6 h-6 text-gold-300" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Ramadan</h3>
              <p className="text-sm text-white/80">
                Kalender og informasjon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
