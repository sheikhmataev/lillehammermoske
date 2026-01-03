'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Calendar, MapPin, ArrowRight, Moon, Sun, Cloud, CloudRain } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { PrayerTimesService, getNextPrayerTime, getCurrentPrayerTime } from '@/services/prayer-times';
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
              Jummah Khutbah: 12:15 | Jamaat: 12:45
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
          <p className="text-lg text-emerald-700 font-semibold mt-4">
            Jummah Khutbah: 12:15 | Jamaat: 12:45
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
                    {todayPrayerTimes && (
                      <p className="text-sm text-emerald-700 font-medium">
                        {todayPrayerTimes.hijriDate}
                      </p>
                    )}
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
                    className={`p-5 rounded-xl text-center transition-all duration-200 border-2 ${
                      prayer.isCurrent
                        ? 'bg-emerald-900 text-white border-emerald-800 shadow-lg scale-105'
                        : prayer.isNext
                        ? 'bg-gold-500 text-white border-gold-600 shadow-md'
                        : 'bg-gray-50 hover:bg-gray-100 border-transparent hover:border-emerald-200'
                    }`}
                  >
                    <div className={`font-bold text-base mb-2 ${prayer.isCurrent || prayer.isNext ? 'text-white' : 'text-emerald-900'}`}>
                      {prayer.name}
                    </div>
                    <div className={`text-xs mb-3 font-medium ${prayer.isCurrent || prayer.isNext ? 'text-white/90' : 'text-gray-500'}`}>
                      {prayer.arabicName}
                    </div>
                    <div className="flex items-center justify-center space-x-1.5 mb-2">
                      {prayer.isCurrent || prayer.isNext ? (
                        getTimeIcon(prayer.name)
                      ) : (
                        <Clock className={`w-4 h-4 ${prayer.isNext ? 'text-white' : 'text-gray-400'}`} />
                      )}
                      <span className={`text-2xl font-extrabold ${prayer.isCurrent || prayer.isNext ? 'text-white' : 'text-gray-900'}`}>
                        {prayer.time}
                      </span>
                    </div>
                    {prayer.isCurrent && (
                      <p className="text-xs text-white font-medium mt-1">Nåværende bønn</p>
                    )}
                    {prayer.isNext && !prayer.isCurrent && (
                      <p className="text-xs text-white font-medium mt-1">Neste bønn</p>
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
                <div className="text-3xl font-bold mb-2 text-gold-400">
                  {nextPrayer?.name || 'Ingen'}
                </div>
                <div className="text-5xl font-extrabold mb-2 text-white">
                  {nextPrayer?.time || '--:--'}
                </div>
                <div className="text-sm text-white/80 font-medium">
                  {nextPrayerCountdown || 'Laster...'}
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
