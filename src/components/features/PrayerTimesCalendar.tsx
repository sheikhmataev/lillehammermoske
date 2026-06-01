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
      <section className="band band-cream py-20 sm:py-28">
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
      <section className="band band-cream py-20 sm:py-28">
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
    <section className="band band-cream section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#D4AF37]/70" />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9A7A15]">
                Hele måneden
              </span>
              <span className="h-px w-8 bg-[#D4AF37]/70" />
            </div>
            <h2 className="font-display mt-4 text-3xl font-semibold text-[#0c2a1a] sm:text-4xl md:text-5xl">
              Bønnetid-kalender
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-[#3a3a32]">
              Se bønnetidene for hele måneden — og last dem ned for offline bruk.
            </p>
            {hasData && (
              <div className="mt-6 flex items-center justify-center">
                <button
                  onClick={exportCalendar}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0c2a1a] px-6 py-2.5 font-semibold text-white shadow-sm transition-colors hover:bg-[#13391f]"
                >
                  <Download className="h-4 w-4 text-[#E6C547]" />
                  <span>Last ned CSV</span>
                </button>
              </div>
            )}
          </div>

          {/* Always show calendar header with navigation */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Calendar Header */}
            <div className="bg-gradient-to-r from-[#0c2a1a] to-[#13391f] text-white p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <button
                  onClick={goToPreviousMonth}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <div className="text-center px-2">
                  <h3 className="font-display text-lg sm:text-2xl font-semibold mb-1 text-white">
                    {monthName} {year}
                  </h3>
                  <p className="text-[#E6C547]/80 text-xs sm:text-sm">
                    {hasData 
                      ? 'Offisielle bønnetider for Lillehammer' 
                      : 'Data ikke tilgjengelig'}
                  </p>
                </div>
                
                <button
                  onClick={goToNextMonth}
                  className="p-2 hover:bg-emerald-700 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {hasData ? (
              <>
                {/* Desktop Calendar Grid */}
                <div className="hidden lg:block p-6">
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
                              ? 'bg-[#D4AF37]/15 border-[#D4AF37]/50 shadow-md'
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

                {/* Mobile/Tablet List View */}
                <div className="lg:hidden p-4 sm:p-6">
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                      const prayerTimes = getPrayerTimesForDay(day);
                      const isCurrentDay = isToday(day);
                      
                      if (!prayerTimes) return null;
                      
                      return (
                        <div
                          key={day}
                          className={`p-3 border rounded-lg transition-all duration-200 ${
                            isCurrentDay
                              ? 'bg-[#D4AF37]/15 border-[#D4AF37]/50 shadow-md'
                              : 'bg-white border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className={`font-bold ${
                              isCurrentDay ? 'text-emerald-900' : 'text-gray-900'
                            }`}>
                              {day}. {monthName}
                            </div>
                            <div className="text-xs text-emerald-700 font-medium">
                              {prayerTimes.hijriDate}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Fajr:</span>
                              <span className="font-medium">{prayerTimes.fajr}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Duhr:</span>
                              <span className="font-medium">{prayerTimes.duhr}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Asr:</span>
                              <span className="font-medium">{prayerTimes.asr}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Maghrib:</span>
                              <span className="font-medium">{prayerTimes.maghrib}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Isha:</span>
                              <span className="font-medium">{prayerTimes.isha}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Fajr slutt:</span>
                              <span className="font-medium">{prayerTimes.fajrEnd}</span>
                            </div>
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
                        <div className="w-3 h-3 bg-[#D4AF37]/20 border border-[#D4AF37]/60 rounded"></div>
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
            <div className="rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-6 backdrop-blur-sm">
              <h4 className="font-display text-lg font-semibold text-[#0c2a1a] mb-3">Om kalenderen</h4>
              <p className="text-sm leading-relaxed text-[#3a3a32]">
                Kalenderen viser nøyaktige bønnetider for Lillehammer. Tidene følger
                Islamsk Råd Norge (IRN) sin standardisering og er tilpasset lokale
                geografiske forhold.
              </p>
            </div>
            <div className="rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-6 backdrop-blur-sm">
              <h4 className="font-display text-lg font-semibold text-[#0c2a1a] mb-3">Datakilder</h4>
              <p className="text-sm leading-relaxed text-[#3a3a32]">
                Bønnetidene oppdateres månedlig basert på offisielle beregninger. Du kan
                laste ned CSV-filer for offline bruk eller import til kalenderen din.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
