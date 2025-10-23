'use client';

import { useState, useEffect } from 'react';
import { Clock, Calendar, MapPin, Download } from 'lucide-react';

interface PrayerTime {
  name: string;
  time: string;
  isNext: boolean;
  arabicName?: string;
}

export function PrayerTimesWidget() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([
    { name: 'Fajr', time: '06:30', isNext: false, arabicName: 'الفجر' },
    { name: 'Dhuhr', time: '12:15', isNext: true, arabicName: 'الظهر' },
    { name: 'Asr', time: '14:45', isNext: false, arabicName: 'العصر' },
    { name: 'Maghrib', time: '16:20', isNext: false, arabicName: 'المغرب' },
    { name: 'Isha', time: '18:00', isNext: false, arabicName: 'العشاء' },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setCurrentDate(now);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextPrayer = prayerTimes.find(prayer => prayer.isNext);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Bønnetider for Lillehammer
            </h2>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {currentDate.toLocaleDateString('nb-NO', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Lillehammer, Norge</span>
              </div>
            </div>
          </div>

          {/* Prayer Times Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {prayerTimes.map((prayer, index) => (
              <div
                key={prayer.name}
                className={`p-6 rounded-xl text-center transition-all duration-300 ${
                  prayer.isNext
                    ? 'bg-gradient-to-br from-emerald-900 to-emerald-800 text-white shadow-xl transform scale-105'
                    : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-1">{prayer.name}</h3>
                  {prayer.arabicName && (
                    <p className={`text-sm ${prayer.isNext ? 'text-gray-200' : 'text-gray-500'}`}>
                      {prayer.arabicName}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-2xl font-bold">{prayer.time}</span>
                </div>
                
                {prayer.isNext && (
                  <p className="text-sm opacity-90">Neste bønn</p>
                )}
              </div>
            ))}
          </div>

          {/* Next Prayer Highlight */}
          {nextPrayer && (
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-8 text-white mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Neste Bønn</h3>
                <div className="text-4xl font-bold mb-2">{nextPrayer.name}</div>
                <div className="text-3xl mb-4">{nextPrayer.time}</div>
                <div className="text-lg opacity-90">
                  {nextPrayer.arabicName && (
                    <span className="block mb-2">{nextPrayer.arabicName}</span>
                  )}
                  <span>om 2 timer og 15 minutter</span>
                </div>
              </div>
            </div>
          )}

          {/* Current Time */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                Nåværende Tid
              </h3>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {currentTime.toLocaleTimeString('nb-NO', {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })}
              </div>
              <p className="text-gray-600">
                {currentTime.toLocaleDateString('nb-NO', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>

          {/* Download App */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Last Ned Bønnetid App
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Få oppdaterte bønnetider direkte på telefonen din
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gold-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Last ned for iOS</span>
                </button>
                <button className="bg-white text-gold-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Last ned for Android</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
