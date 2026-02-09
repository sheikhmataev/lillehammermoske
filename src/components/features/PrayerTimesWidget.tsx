'use client';

import { useState, useEffect } from 'react';
import { Clock, Calendar, MapPin, Download, Moon, Sun, Cloud, AlertCircle } from 'lucide-react';
import { PrayerTimesService, getNextPrayerTime, getCurrentPrayerTime } from '@/services/prayer-times';
import { config } from '@/lib/config';
import { PrayerTime as PrayerTimeType } from '@/types/prayer-times';

interface PrayerTime {
  name: string;
  time: string;
  isNext: boolean;
  isCurrent: boolean;
  arabicName?: string;
  endTime?: string;
}

export function PrayerTimesWidget() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [todayPrayerTimes, setTodayPrayerTimes] = useState<PrayerTimeType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPrayerCountdown, setNextPrayerCountdown] = useState<string>('');

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
          
          const times: PrayerTime[] = [
            { 
              name: 'Fajr', 
              time: todayTimes.fajr, 
              isNext: nextPrayer?.name === 'Fajr',
              isCurrent: currentPrayer?.name === 'Fajr',
              arabicName: 'الفجر',
              endTime: todayTimes.fajrEnd
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
      setCurrentTime(now);
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

  const nextPrayer = prayerTimes.find(prayer => prayer.isNext);
  const currentPrayer = prayerTimes.find(prayer => prayer.isCurrent);

  const getPrayerIcon = (prayerName: string) => {
    switch (prayerName.toLowerCase()) {
      case 'fajr':
        return <Moon className="w-6 h-6" />;
      case 'duhr':
        return <Sun className="w-6 h-6" />;
      case 'asr':
        return <Cloud className="w-6 h-6" />;
      case 'maghrib':
        return <Sun className="w-6 h-6" />;
      case 'isha':
        return <Moon className="w-6 h-6" />;
      default:
        return <Clock className="w-6 h-6" />;
    }
  };

  const getTimeOfDay = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 17) return 'afternoon';
    return 'evening';
  };

  const timeOfDay = getTimeOfDay();

  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="bg-gray-100 rounded-xl p-6 h-32"></div>
                ))}
              </div>
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
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-800 mb-2">Feil ved lasting</h3>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`section-padding bg-gradient-to-br ${
      timeOfDay === 'morning' ? 'from-blue-50 to-white' : 
      timeOfDay === 'afternoon' ? 'from-orange-50 to-white' : 
      'from-indigo-50 to-white'
    }`}>
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Bønnetider for Lillehammer
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
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
              {todayPrayerTimes && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Hijri:</span>
                  <span className="text-sm">{todayPrayerTimes.hijriDate}</span>
                </div>
              )}
              <div className="flex items-center space-x-2 bg-emerald-100 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-emerald-800">Jummah:</span>
                <span className="text-sm font-medium text-emerald-700">Khutbah {config.jummah.khutbah} | Jamaat {config.jummah.jamat}</span>
              </div>
            </div>
          </div>

          {/* Current Prayer Alert */}
          {currentPrayer && (
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-6 text-white mb-8 shadow-lg">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  {getPrayerIcon(currentPrayer.name)}
                  <h3 className="text-xl font-bold">Bønnetid Nå</h3>
                </div>
                <div className="text-3xl font-bold mb-1">{currentPrayer.name}</div>
                <div className="text-lg opacity-90">{currentPrayer.time}</div>
                {currentPrayer.arabicName && (
                  <div className="text-sm opacity-80 mt-1">{currentPrayer.arabicName}</div>
                )}
              </div>
            </div>
          )}

          {/* Prayer Times Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {prayerTimes.map((prayer, index) => (
              <div
                key={prayer.name}
                className={`p-6 rounded-xl text-center transition-all duration-500 transform hover:scale-105 ${
                  prayer.isCurrent
                    ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-xl scale-105'
                    : prayer.isNext
                    ? 'bg-gradient-to-br from-emerald-900 to-emerald-800 text-white shadow-xl scale-105'
                    : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-center mb-2">
                    {getPrayerIcon(prayer.name)}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{prayer.name}</h3>
                  {prayer.arabicName && (
                    <p className={`text-sm ${prayer.isCurrent || prayer.isNext ? 'text-gray-200' : 'text-gray-500'}`}>
                      {prayer.arabicName}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-2xl font-bold">{prayer.time}</span>
                </div>
                
                {prayer.isCurrent && (
                  <p className="text-sm opacity-90 font-medium">Bønnetid nå</p>
                )}
                {prayer.isNext && !prayer.isCurrent && (
                  <p className="text-sm opacity-90 font-medium">Neste bønn</p>
                )}
                {prayer.endTime && prayer.name === 'Fajr' && (
                  <p className="text-xs opacity-75 mt-1">Slutter {prayer.endTime}</p>
                )}
              </div>
            ))}
          </div>

          {/* Next Prayer Countdown */}
          {nextPrayer && !currentPrayer && (
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-8 text-white mb-12 shadow-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Neste Bønn</h3>
                <div className="flex items-center justify-center space-x-3 mb-2">
                  {getPrayerIcon(nextPrayer.name)}
                  <div className="text-4xl font-bold">{nextPrayer.name}</div>
                </div>
                <div className="text-3xl mb-4">{nextPrayer.time}</div>
                <div className="text-lg opacity-90">
                  {nextPrayer.arabicName && (
                    <span className="block mb-2">{nextPrayer.arabicName}</span>
                  )}
                  <span className="font-semibold">om {nextPrayerCountdown}</span>
                </div>
              </div>
            </div>
          )}

          {/* Current Time Display */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border border-gray-100">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                Nåværende Tid
              </h3>
              <div className="text-5xl font-bold text-gray-800 mb-2">
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

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Om Bønnetidene</h4>
              <p className="text-blue-700 text-sm leading-relaxed">
                Bønnetidene er beregnet for Lillehammer og følger Islamsk Råd Norge (IRN) sin standardisering av bønnetider. 
                IRN er en paraplyorganisasjon for islamske trossamfunn i Norge som jobber med felles standarder for bønnetider.
                Tidene kan variere med 1-2 minutter avhengig av nøyaktig posisjon i byen.
              </p>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100">
              <h4 className="text-lg font-semibold text-emerald-900 mb-3">Jama&apos;ah Tider</h4>
              <p className="text-emerald-700 text-sm leading-relaxed">
                Fajr: 10 minutter etter adhan | Duhr: 15 minutter etter adhan | 
                Asr: 15 minutter etter adhan | Maghrib: 5 minutter etter adhan | 
                Isha: 10 minutter etter adhan
              </p>
            </div>
          </div>

          {/* Download App */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Få Bønnetider på Telefonen
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Last ned vår app for å få varslinger før hver bønn
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gold-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 shadow-md">
                  <Download className="w-5 h-5" />
                  <span>App Store</span>
                </button>
                <button className="bg-white text-gold-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 shadow-md">
                  <Download className="w-5 h-5" />
                  <span>Google Play</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
