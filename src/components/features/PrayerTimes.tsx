'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Calendar, MapPin, ArrowRight, Moon, Sun, Cloud, CloudRain } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { PrayerTimesService, getNextPrayerTime, getCurrentPrayerTime } from '@/services/prayer-times';
import { config } from '@/lib/config';
import { PrayerTime } from '@/types/prayer-times';

interface PrayerTimeDisplay {
  name: string;
  time: string;
  isNext: boolean;
  isCurrent: boolean;
  arabicName: string;
}

export function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimeDisplay[]>([]);
  const [todayPrayerTimes, setTodayPrayerTimes] = useState<PrayerTime | null>(null);
  const [nextPrayerCountdown, setNextPrayerCountdown] = useState<string>('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const prayerService = PrayerTimesService.getInstance();

  useEffect(() => {
    const loadPrayerTimes = async () => {
      try {
        setLoading(true);
        const todayTimes = await prayerService.getTodayPrayerTimes();
        
        if (todayTimes) {
          setTodayPrayerTimes(todayTimes);
          
          const currentPrayer = getCurrentPrayerTime(todayTimes);
          const nextPrayer = getNextPrayerTime(todayTimes);
          
          const times: PrayerTimeDisplay[] = [
            { 
              name: 'Fajr', 
              time: todayTimes.fajr, 
              isNext: nextPrayer?.name === 'Fajr',
              isCurrent: currentPrayer?.name === 'Fajr',
              arabicName: 'الفجر'
            },
            { 
              name: 'Duhr', 
              time: todayTimes.duhr, 
              isNext: nextPrayer?.name === 'Duhr',
              isCurrent: currentPrayer?.name === 'Duhr',
              arabicName: 'الظهر'
            },
            { 
              name: 'Asr', 
              time: todayTimes.asr, 
              isNext: nextPrayer?.name === 'Asr',
              isCurrent: currentPrayer?.name === 'Asr',
              arabicName: 'العصر'
            },
            { 
              name: 'Maghrib', 
              time: todayTimes.maghrib, 
              isNext: nextPrayer?.name === 'Maghrib',
              isCurrent: currentPrayer?.name === 'Maghrib',
              arabicName: 'المغرب'
            },
            { 
              name: 'Isha', 
              time: todayTimes.isha, 
              isNext: nextPrayer?.name === 'Isha',
              isCurrent: currentPrayer?.name === 'Isha',
              arabicName: 'العشاء'
            }
          ];
          
          setPrayerTimes(times);
          
          if (nextPrayer) {
            setNextPrayerCountdown(nextPrayer.countdown);
          }
        } else {
          setError('Kunne ikke hente dagens bønnetider');
        }
      } catch (err) {
        setError('Feil ved lasting av bønnetider');
        console.error('Error loading prayer times:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPrayerTimes();
  }, [prayerService]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentDate(now);
      
      // Update countdown
      if (todayPrayerTimes) {
        const nextPrayer = getNextPrayerTime(todayPrayerTimes);
        if (nextPrayer) {
          setNextPrayerCountdown(nextPrayer.countdown);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [todayPrayerTimes]);

  const getTimeIcon = (prayerName: string) => {
    switch (prayerName.toLowerCase()) {
      case 'fajr':
        return <Moon className="w-4 h-4" />;
      case 'duhr':
      case 'asr':
        return <Sun className="w-4 h-4" />;
      case 'maghrib':
      case 'isha':
        return <Cloud className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const nextPrayer = prayerTimes.find(p => p.isNext);

  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-100 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="animate-pulse">
                <div className="h-64 bg-gray-100 rounded-xl"></div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="h-32 bg-gray-100 rounded-xl animate-pulse"></div>
              <div className="h-32 bg-gray-100 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-900">
              Bønnetider
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Daglige bønnetider for Lillehammer. Automatisk oppdatert hver dag basert på vår lokasjon.
            </p>
            <p className="text-lg text-emerald-700 font-semibold mt-4">
              Jummah Khutbah: {config.jummah.khutbah} | Jamaat: {config.jummah.jamat}
            </p>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-emerald-900">
            Bønnetider
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Daglige bønnetider for Lillehammer &middot; Automatisk oppdatert
          </p>
          <p className="text-base text-emerald-800 font-semibold mt-3 bg-emerald-50 inline-block px-4 py-1.5 rounded-lg border border-emerald-100">
            Jummah: Khutbah {config.jummah.khutbah} | Jamat {config.jummah.jamat}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Current / Next Prayer Highlight */}
          {nextPrayer && (
            <div className="mb-8 bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-6 md:p-8 text-white shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gold-500/20 rounded-2xl flex items-center justify-center border border-gold-500/30">
                    {getTimeIcon(nextPrayer.name)}
                  </div>
                  <div>
                    <p className="text-emerald-200 text-sm font-medium uppercase tracking-wider mb-1">
                      {prayerTimes.find(p => p.isCurrent) ? 'Nåværende bønn' : 'Neste bønn'}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                      {prayerTimes.find(p => p.isCurrent)?.name || nextPrayer.name}
                    </h3>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-5xl md:text-6xl font-extrabold text-white font-mono">
                    {prayerTimes.find(p => p.isCurrent)?.time || nextPrayer.time}
                  </p>
                  <p className="text-gold-400 text-sm font-semibold mt-1">
                    {nextPrayerCountdown || 'Laster...'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Date bar */}
          <div className="flex items-center justify-between mb-6 px-2">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-emerald-900" />
              <span className="font-semibold text-emerald-900 capitalize">
                {currentDate.toLocaleDateString('nb-NO', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">Lillehammer</span>
            </div>
          </div>

          {/* Prayer Times Grid */}
          <div className="grid grid-cols-5 gap-3 md:gap-4 mb-8">
            {prayerTimes.map((prayer) => (
              <div
                key={prayer.name}
                className={`rounded-xl text-center transition-all duration-200 ${
                  prayer.isCurrent
                    ? 'bg-emerald-900 text-white shadow-lg ring-2 ring-emerald-500 ring-offset-2'
                    : prayer.isNext
                    ? 'bg-gold-500 text-white shadow-md'
                    : 'bg-gray-50 border border-gray-200 hover:border-emerald-200'
                } p-3 md:p-5`}
              >
                <p className={`text-xs md:text-sm font-bold mb-1 ${
                  prayer.isCurrent || prayer.isNext ? 'text-white' : 'text-emerald-900'
                }`}>
                  {prayer.name}
                </p>
                <p className={`text-[10px] md:text-xs font-medium mb-2 ${
                  prayer.isCurrent || prayer.isNext ? 'text-white/80' : 'text-gray-400'
                }`}>
                  {prayer.arabicName}
                </p>
                <p className={`text-lg md:text-2xl font-extrabold ${
                  prayer.isCurrent || prayer.isNext ? 'text-white' : 'text-gray-900'
                }`}>
                  {prayer.time}
                </p>
                {prayer.isCurrent && (
                  <span className="inline-block mt-1.5 text-[10px] md:text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">Nå</span>
                )}
                {prayer.isNext && !prayer.isCurrent && (
                  <span className="inline-block mt-1.5 text-[10px] md:text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">Neste</span>
                )}
              </div>
            ))}
          </div>

          {/* Footer row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              <strong className="text-emerald-900">Merk:</strong> Tider oppdateres automatisk basert på lokasjon og årstid.
            </p>
            <Link 
              href="/prayer-times" 
              className="inline-flex items-center gap-2 text-emerald-900 font-semibold hover:text-emerald-800 transition-colors text-sm"
            >
              Se full kalender
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
