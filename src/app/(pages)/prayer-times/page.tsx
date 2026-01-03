import { PrayerTimesWidget } from '@/components/features/PrayerTimesWidget';
import { PrayerGuide } from '@/components/features/PrayerGuide';
import { QiblaDirection } from '@/components/features/QiblaDirection';
import { PrayerTimesCalendar } from '@/components/features/PrayerTimesCalendar';

export default function PrayerTimesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-200 to-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bønnetider
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
              Daglige bønnetider for Lillehammer. Automatisk oppdatert hver dag.
            </p>
            <p className="text-lg text-emerald-200 mt-4 font-semibold">
              Jummah Khutbah: 12:15 | Jamaat: 12:45
            </p>
          </div>
        </div>
      </section>

      {/* Prayer Times Widget */}
      <PrayerTimesWidget />

      {/* Prayer Times Calendar */}
      <PrayerTimesCalendar />

      {/* Qibla Direction */}
      <QiblaDirection />

      {/* Prayer Guide */}
      <PrayerGuide />
    </div>
  );
}
