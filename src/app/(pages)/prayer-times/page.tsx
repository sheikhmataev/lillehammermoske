import type { Metadata } from 'next';
import Link from 'next/link';
import { Smartphone } from 'lucide-react';
import { PrayerTimesWidget } from '@/components/features/PrayerTimesWidget';
import { config } from '@/lib/config';
import { QiblaDirection } from '@/components/features/QiblaDirection';
import { PrayerTimesCalendar } from '@/components/features/PrayerTimesCalendar';

export const metadata: Metadata = {
  title: 'Bønnetider Lillehammer – Daglige og Månedlige Tider',
  description:
    'Se dagens bønnetider for Lillehammer Moske. Fajr, Dhuhr, Asr, Maghrib og Isha – oppdatert daglig etter IRN-standarden. Månedskalender inkludert.',
  openGraph: {
    title: 'Bønnetider – Lillehammer Moske',
    description: 'Daglige bønnetider for Lillehammer. Fajr, Dhuhr, Asr, Maghrib, Isha og Jummah.',
  },
  alternates: { canonical: 'https://lillehammermoske.no/prayer-times/' },
};

export default function PrayerTimesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-200 to-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Bønnetider
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
              Daglige bønnetider for Lillehammer. Automatisk oppdatert hver dag.
            </p>
            <p className="text-lg text-emerald-200 mt-4 font-semibold">
              Jummah Khutbah: {config.jummah.khutbah} | Jamaat: {config.jummah.jamat}
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

      {/* App Download Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-emerald-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-4">
              Få Bønnetider på Telefonen
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Last ned vår app for å få varslinger før hver bønn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/no/app/b%C3%B8nnetid/id1615293231"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-md"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <span>App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=no.irn.prayertimes&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-md"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-1.97 1.13-2.5-2.5 2.5-2.5 1.97 1.13zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/></svg>
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
