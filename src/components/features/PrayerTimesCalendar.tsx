'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export function PrayerTimesCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthNames = [
    'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'
  ];

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

  const getPrayerTimesForDay = (day: number) => {
    // Mock data - in real app, this would come from API
    const baseTimes = {
      fajr: '06:30',
      dhuhr: '12:15',
      asr: '14:45',
      maghrib: '16:20',
      isha: '18:00'
    };

    // Add some variation for different days
    const variation = (day % 7) * 2; // 0-12 minutes variation
    const fajrMinutes = 6 * 60 + 30 + variation;
    const dhuhrMinutes = 12 * 60 + 15 + variation;
    const asrMinutes = 14 * 60 + 45 + variation;
    const maghribMinutes = 16 * 60 + 20 + variation;
    const ishaMinutes = 18 * 60 + variation;

    const formatTime = (minutes: number) => {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    };

    return {
      fajr: formatTime(fajrMinutes),
      dhuhr: formatTime(dhuhrMinutes),
      asr: formatTime(asrMinutes),
      maghrib: formatTime(maghribMinutes),
      isha: formatTime(ishaMinutes)
    };
  };

  return (
    <section className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Bønnetid Kalender
            </h2>
            <p className="text-xl text-gray-600">
              Se bønnetider for hele måneden
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Calendar Header */}
            <div className="bg-emerald-900 text-white p-6">
              <div className="flex items-center justify-between">
                <button
                  onClick={goToPreviousMonth}
                  className="p-2 hover:bg-emerald-800 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <h3 className="text-2xl font-bold">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                
                <button
                  onClick={goToNextMonth}
                  className="p-2 hover:bg-emerald-800 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
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
                  <div key={`empty-${index}`} className="h-24"></div>
                ))}

                {/* Days of the month */}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                  const prayerTimes = getPrayerTimesForDay(day);
                  const isCurrentDay = isToday(day);
                  
                  return (
                    <div
                      key={day}
                      className={`h-24 p-2 border border-gray-200 rounded-lg ${
                        isCurrentDay ? 'bg-emerald-100 border-emerald-300' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        <div className={`text-sm font-semibold mb-1 ${isCurrentDay ? 'text-emerald-900' : 'text-gray-900'}`}>
                          {day}
                        </div>
                        <div className="flex-1 text-xs space-y-0.5">
                          <div className="text-gray-600">F: {prayerTimes.fajr}</div>
                          <div className="text-gray-600">D: {prayerTimes.dhuhr}</div>
                          <div className="text-gray-600">A: {prayerTimes.asr}</div>
                          <div className="text-gray-600">M: {prayerTimes.maghrib}</div>
                          <div className="text-gray-600">I: {prayerTimes.isha}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-100 border border-emerald-300 rounded"></div>
                  <span>I dag</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>F=Fajr, D=Dhuhr, A=Asr, M=Maghrib, I=Isha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
