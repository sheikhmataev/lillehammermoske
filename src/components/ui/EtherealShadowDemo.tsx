'use client';

import { EtherealShadow } from "./EtherealShadow";

export function EtherealShadowDemo() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-mint-50">
      <EtherealShadow
        color="rgba(16, 185, 129, 0.08)" // Subtle emerald color matching mosque theme
        animation={{ scale: 50, speed: 60 }} // Gentle animation
        noise={{ opacity: 0.3, scale: 1.0 }} // Subtle noise
        sizing="fill"
        className="w-full h-full max-w-6xl mx-auto rounded-2xl shadow-2xl"
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-emerald-900 text-center leading-tight">
            Velkommen til
            <br />
            <span className="text-gold-600">Lillehammer Moske</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
            Et fellesskap for muslimer i Lillehammer og omegn siden 2005
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-8 py-3 bg-emerald-900 hover:bg-emerald-800 text-white rounded-lg font-medium transition-colors">
              Utforsk Mer
            </button>
            <button className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-lg font-medium transition-colors">
              Bønnetider
            </button>
          </div>
        </div>
      </EtherealShadow>
    </div>
  );
}

// Alternative demo for hero section
export function MosqueHeroWithShadow() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <EtherealShadow
        color="rgba(16, 185, 129, 0.12)"
        animation={{ scale: 30, speed: 40 }}
        noise={{ opacity: 0.2, scale: 0.8 }}
        sizing="fill"
        className="w-full h-full"
      >
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-emerald-900 text-center">
            Lillehammer Moske
          </h1>
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto">
            The Muslim Cultural Center Lillehammer
          </p>
        </div>
      </EtherealShadow>
    </section>
  );
}

// Subtle background variant
export function SubtleEtherealBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <EtherealShadow
        color="rgba(16, 185, 129, 0.05)" // Very subtle
        animation={{ scale: 20, speed: 80 }} // Very slow and gentle
        noise={{ opacity: 0.1, scale: 1.5 }}
        sizing="fill"
        className="w-full h-[400px]"
      >
        {children}
      </EtherealShadow>
    </div>
  );
}
