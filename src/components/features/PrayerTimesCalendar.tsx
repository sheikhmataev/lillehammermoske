'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Download, AlertCircle } from 'lucide-react';
import { PrayerTimesService } from '@/services/prayer-times';
import { PrayerTimesData, PrayerTime } from '@/types/prayer-times';

export function PrayerTimesCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [prayerTimesData, setPrayerTimesData] = useState<PrayerTimesData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const monthNames = [
    'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'
  ];

  const prayerService = PrayerTimesService.getInstance();

  useEffect(() => {
    const loadPrayerTimes = async () => {
      try {
        setLoading(true);
        const data = await prayerService.getLocalPrayerTimes();
        setPrayerTimesData(data);
      } catch (err) {
        setError('Kunne ikke laste bønnetider');
        console.error('Error loading prayer times:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPrayerTimes();
  }, [prayerService]);

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const today = new Date();

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const getPrayerTimesForDay = (day: number): PrayerTime | null => {
    const monthName = monthNames[currentMonth.getMonth()];
    const year = currentMonth.getFullYear();
    
    const monthData = prayerTimesData.find(data => 
      data.month.toLowerCase() === monthName.toLowerCase() && 
      data.year === year
    );
    
    if (!monthData) return null;
    
    const dateString = `${day.toString().padStart(2, '0')}-${(currentMonth.getMonth() + 1).toString().padStart(2, '0')}-${year}`;
    
    return monthData.times.find(time => time.date === dateString) || null;
  };

  const exportCalendar = () => {
    const monthName = monthNames[currentMonth.getMonth()];
    const year = currentMonth.getFullYear();
    
    const monthData = prayerTimesData.find(data => 
      data.month.toLowerCase() === monthName.toLowerCase() && 
      data.year === year
    );
    
    if (!monthData) return;
    
    const csvContent = [
      'Dato,Hijri-dato,Fajr,Fajr slutt,Duhr,Asr,Maghrib,Isha',
      ...monthData.times.map(time => 
        `${time.date},${time.hijriDate},${time.fajr},${time.fajrEnd},${time.duhr},${time.asr},${time.maghrib},${time.isha}`
      )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `bonnetider-${monthName.toLowerCase()}-${year}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <section className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="h-64 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
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

  const monthName = monthNames[currentMonth.getMonth()];
  const year = currentMonth.getFullYear();
  const hasData = prayerTimesData.some(data => 
    data.month.toLowerCase() === monthName.toLowerCase() && 
    data.year === year
  );

  return (
    <section className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Bønnetid Kalender
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Se bønnetider for hele måneden
            </p>
            {hasData && (
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={exportCalendar}
                  className="bg-emerald-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-800 transition-colors flex items-center space-x-2 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Last ned CSV</span>
                </button>
              </div>
            )}
          </div>

          {/* Always show calendar header with navigation */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Calendar Header */}
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white p-6">
              <div className="flex items-center justify-between">
                <button
                  onClick={goToPreviousMonth}
                  className="p-2 hover:bg-emerald-700 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-1 text-white">
                    {monthName} {year}
                  </h3>
                  <p className="text-emerald-200 text-sm">
                    {monthName.toLowerCase() === 'november' || monthName.toLowerCase() === 'desember' 
                      ? 'Offisielle bønnetider for Lillehammer' 
                      : 'Data ikke tilgjengelig'}
                  </p>
                </div>
                
                <button
                  onClick={goToNextMonth}
                  className="p-2 hover:bg-emerald-700 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {hasData ? (
              <>
                <div className="p-6">
                  {/* Day Headers */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn'].map((day) => (
                      <div key={day} className="text-center font-semibold text-gray-600 py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Days */}
                  <div className="grid grid-cols-7 gap-2">
                    {/* Empty cells for days before month starts */}
                    {Array.from({ length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 }).map((_, index) => (
                      <div key={`empty-${index}`} className="h-32"></div>
                    ))}

                    {/* Days of the month */}
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                      const prayerTimes = getPrayerTimesForDay(day);
                      const isCurrentDay = isToday(day);
                      
                      return (
                        <div
                          key={day}
                          className={`h-32 p-2 border rounded-lg transition-all duration-200 hover:shadow-md ${
                            isCurrentDay 
                              ? 'bg-emerald-100 border-emerald-400 shadow-md' 
                              : prayerTimes 
                              ? 'bg-white border-gray-200 hover:bg-gray-50' 
                              : 'bg-gray-50 border-gray-200'
                          }`}
                        >
                          <div className="flex flex-col h-full">
                            <div className={`text-sm font-bold mb-1 ${
                              isCurrentDay ? 'text-emerald-900' : 'text-gray-900'
                            }`}>
                              {day}
                            </div>
                            
                            {prayerTimes ? (
                              <div className="flex-1 text-xs space-y-0.5">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">F:</span>
                                  <span className="font-medium text-gray-800">{prayerTimes.fajr}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">D:</span>
                                  <span className="font-medium text-gray-800">{prayerTimes.duhr}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">A:</span>
                                  <span className="font-medium text-gray-800">{prayerTimes.asr}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">M:</span>
                                  <span className="font-medium text-gray-800">{prayerTimes.maghrib}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">I:</span>
                                  <span className="font-medium text-gray-800">{prayerTimes.isha}</span>
                                </div>
                                <div className="text-xs text-emerald-700 mt-1 truncate">
                                  {prayerTimes.hijriDate}
                                </div>
                              </div>
                            ) : (
                              <div className="flex-1 flex items-center justify-center text-gray-400 text-xs">
                                Ingen data
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Legend */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-emerald-100 border border-emerald-400 rounded"></div>
                        <span>I dag</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>F=Fajr, D=Duhr, A=Asr, M=Maghrib, I=Isha</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Tidene er for Lillehammer, Norge
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Ingen data tilgjengelig
                </h3>
                <p className="text-gray-500">
                  Bønnetider for {monthName} {year} er ikke tilgjengelig ennå.
                </p>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Om Kalenderen</h4>
              <p className="text-blue-700 text-sm leading-relaxed">
                Kalenderen viser nøyaktige bønnetider for Lillehammer. Tidene følger 
                Islamic Society of North America (ISNA) beregningsmetode og er tilpasset 
                lokale geografiske forhold.
              </p>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100">
              <h4 className="text-lg font-semibold text-emerald-900 mb-3">Datakilder</h4>
              <p className="text-emerald-700 text-sm leading-relaxed">
                Bønnetidene blir oppdatert månedlig basert på offisielle beregninger. 
                Du kan laste ned CSV-filer for offline bruk eller import til kalendre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
