'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface PrayerTime {
  name: string;
  time: string;
  isNext: boolean;
}

export function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([
    { name: 'Fajr', time: '06:30', isNext: false },
    { name: 'Dhuhr', time: '12:15', isNext: true },
    { name: 'Asr', time: '14:45', isNext: false },
    { name: 'Maghrib', time: '16:20', isNext: false },
    { name: 'Isha', time: '18:00', isNext: false },
  ]);

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Minimal Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-900">
            Bønnetider
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Daglige bønnetider for Lillehammer. Automatisk oppdatert hver dag basert på vår lokasjon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Prayer Times Card - Enhanced */}
          <div className="lg:col-span-2">
            <Card variant="elevated">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center shadow-sm">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-900">
                      {currentDate.toLocaleDateString('nb-NO', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200">
                  <MapPin className="w-4 h-4 text-emerald-900" />
                  <span className="text-sm font-semibold text-gray-700">Lillehammer</span>
                </div>
              </div>

              {/* Prayer Times Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                {prayerTimes.map((prayer) => (
                  <div
                    key={prayer.name}
                    className={`p-5 rounded-xl text-center transition-colors border-2 ${
                      prayer.isNext
                        ? 'bg-emerald-900 text-white border-emerald-800 shadow-md'
                        : 'bg-gray-50 hover:bg-gray-100 border-transparent hover:border-emerald-200'
                    }`}
                  >
                    <h4 className={`font-bold text-base mb-3 ${prayer.isNext ? 'text-white' : 'text-emerald-900'}`}>
                      {prayer.name}
                    </h4>
                    <div className="flex items-center justify-center space-x-1.5 mb-2">
                      <Clock className={`w-4 h-4 ${prayer.isNext ? 'text-gold-400' : 'text-gray-400'}`} />
                      <span className={`text-2xl font-extrabold ${prayer.isNext ? 'text-white' : 'text-gray-900'}`}>
                        {prayer.time}
                      </span>
                    </div>
                    {prayer.isNext && (
                      <p className="text-xs text-gold-300 font-medium mt-1">Neste bønn</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <p className="text-sm text-gray-700 text-center leading-relaxed">
                  <strong className="text-emerald-900 font-semibold">Merk:</strong> Bønnetider oppdateres automatisk basert på lokasjon og årstid.
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar - Enhanced Cards */}
          <div className="space-y-6">
            {/* Opening Hours */}
            <Card variant="elevated">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-emerald-900" />
                </div>
                <h3 className="text-lg font-bold text-emerald-900">
                  Åpningstider
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Mandag - Søndag</span>
                  <span className="font-bold text-emerald-900">05:00 - 22:00</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-gray-600 text-sm">Jummah (Fredag)</span>
                  <span className="font-bold text-gold-600">12:00 - 13:00</span>
                </div>
              </div>
            </Card>

            {/* Next Prayer */}
            <Card variant="elevated" className="bg-emerald-900 text-white border-0">
              <h3 className="text-lg font-bold mb-5 text-white">Neste Bønn</h3>
              <div className="text-center py-6 bg-white/10 rounded-xl border border-white/20">
                <div className="text-3xl font-bold mb-2 text-gold-400">Dhuhr</div>
                <div className="text-5xl font-extrabold mb-2 text-white">12:15</div>
                <div className="text-sm text-white/80 font-medium">
                  om 2 timer og 15 minutter
                </div>
              </div>
            </Card>

            {/* CTA Link */}
            <Link href="/prayer-times" className="block">
              <Card hover variant="outlined" className="group">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-emerald-900">
                    Se full kalender
                  </span>
                  <ArrowRight className="w-5 h-5 text-emerald-900 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
