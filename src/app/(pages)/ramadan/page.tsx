import { RamadanCountdown } from '@/components/features/RamadanCountdown';
import { RamadanCalendar } from '@/components/features/RamadanCalendar';
import { IftarSuhoorTimes } from '@/components/features/IftarSuhoorTimes';
import { RamadanGuidelines } from '@/components/features/RamadanGuidelines';
import { RamadanEvents } from '@/components/features/RamadanEvents';

export default function RamadanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400">
      {/* Hero Section */}
      <section className="text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ramadan 2024
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Den hellige måneden Ramadan. Fasting, bønn og fellesskap.
            </p>
          </div>
        </div>
      </section>

      {/* Ramadan Countdown */}
      <RamadanCountdown />

      {/* Iftar & Suhoor Times */}
      <IftarSuhoorTimes />

      {/* Ramadan Calendar */}
      <RamadanCalendar />

      {/* Ramadan Guidelines */}
      <RamadanGuidelines />

      {/* Ramadan Events */}
      <RamadanEvents />
    </div>
  );
}
