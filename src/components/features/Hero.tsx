'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Users, MessageCircle, Moon, ArrowRight } from 'lucide-react';
import { config } from '@/lib/config';

export function Hero() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/mosque/inside_image.png"
          alt="Lillehammer Moske - Interiør"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-900/80 to-emerald-900/60"></div>
      </div>

      <div className="relative container-custom py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20 mb-8">
            <Moon className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium text-white/90">Siden 2005 &middot; Lillehammer</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            Velkommen til
            <span className="block text-gold-400 mt-2">
              Lillehammer Moske
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-3 max-w-2xl">
            The Muslim Cultural Center
          </p>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
            Et fellesskap for muslimer i Lillehammer og omegn. Vi er her for deg, hver dag, hele året.
          </p>

          {/* Current Time */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/15 mb-10">
            <Clock className="w-5 h-5 text-gold-400" />
            <div>
              <p className="text-xs text-white/60 uppercase tracking-wider">Nåværende tid</p>
              <p className="text-xl font-bold font-mono text-white">
                {currentTime.toLocaleTimeString('nb-NO', {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/prayer-times"
              className="btn-secondary inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Se Bønnetider</span>
            </Link>
            <Link
              href="/ramadan"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-emerald-900 px-8 py-3.5 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-colors"
            >
              <Moon className="w-5 h-5" />
              <span>Ramadan 2026</span>
            </Link>
          </div>

          {/* WhatsApp CTA - prominent */}
          <a
            href={config.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Bli med i vår WhatsApp-gruppe</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
