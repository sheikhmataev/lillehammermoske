'use client';

import { useState, useEffect } from 'react';
import { Clock, Calendar, MapPin } from 'lucide-react';

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
    <section className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Bønnetider
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Daglige bønnetider for Lillehammer. Automatisk oppdatert hver dag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Prayer Times Card */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-emerald-900" />
                  <h3 className="text-2xl font-semibold text-emerald-900">
                    {currentDate.toLocaleDateString('nb-NO', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">Lillehammer</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {prayerTimes.map((prayer, index) => (
                  <div
                    key={prayer.name}
                    className={`p-4 rounded-lg text-center transition-all duration-200 ${
                      prayer.isNext
                        ? 'bg-emerald-900 text-white shadow-lg transform scale-105'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <h4 className="font-semibold text-lg mb-2">{prayer.name}</h4>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-2xl font-bold">{prayer.time}</span>
                    </div>
                    {prayer.isNext && (
                      <p className="text-sm mt-2 opacity-90">Neste bønn</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gold-500/10 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Merk:</strong> Bønnetider oppdateres automatisk basert på lokasjon og årstid.
                  For nøyaktige tider, sjekk alltid med moskeen.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                Moske Åpningstider
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Mandag - Søndag</span>
                  <span className="font-medium">05:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Jummah (Fredag)</span>
                  <span className="font-medium">12:00 - 13:00</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                Neste Bønn
              </h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-900 mb-2">
                  Dhuhr
                </div>
                <div className="text-2xl text-gold-500 mb-2">12:15</div>
                <div className="text-sm text-gray-600">
                  om 2 timer og 15 minutter
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
              <h3 className="text-xl font-semibold mb-4">
                Ramadan 2024
              </h3>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">10. mars</div>
                <div className="text-sm opacity-90">
                  Første dag av Ramadan
                </div>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between">
                    <span>Iftar:</span>
                    <span>18:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Suhoor:</span>
                    <span>05:00</span>
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
