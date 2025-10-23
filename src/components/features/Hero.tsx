'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Clock, Users, Heart } from 'lucide-react';

export function Hero() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Velkommen til
                <span className="block text-gold-500">Lillehammer Moske</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                The Muslim Cultural Center - Et fellesskap for muslimer i Lillehammer og omegn
              </p>
            </div>

            {/* Current Time Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4">
                <Clock className="w-8 h-8 text-gold-500" />
                <div>
                  <p className="text-sm text-gray-300">Nåværende tid</p>
                  <p className="text-2xl font-bold">
                    {currentTime.toLocaleTimeString('nb-NO', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/prayer-times" className="btn-secondary inline-flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Se Bønnetider</span>
              </Link>
              <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-emerald-900 inline-flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Lær mer om oss</span>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <Calendar className="w-12 h-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bønnetider</h3>
              <p className="text-gray-200 text-sm">
                Automatisk oppdaterte bønnetider for Lillehammer
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <Users className="w-12 h-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quranskole</h3>
              <p className="text-gray-200 text-sm">
                Utdanning og opplæring for barn og voksne
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <Heart className="w-12 h-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fellesskap</h3>
              <p className="text-gray-200 text-sm">
                Styrke det muslimske fellesskapet i Lillehammer
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <Clock className="w-12 h-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ramadan</h3>
              <p className="text-gray-200 text-sm">
                Kalender og informasjon for den hellige måneden
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
