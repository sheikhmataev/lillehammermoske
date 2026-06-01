import type { Metadata } from 'next';
import { Calendar, Smartphone } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Band } from '@/components/ui/Band';
import { SunArc } from '@/components/features/SunArc';
import { QiblaDirection } from '@/components/features/QiblaDirection';
import { PrayerTimesCalendar } from '@/components/features/PrayerTimesCalendar';
import { config } from '@/lib/config';

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
    <>
      <PageHero
        eyebrow="Lillehammer"
        arabic="أوقات الصلاة"
        title="Bønnetider"
        lead="Daglige bønnetider, beregnet automatisk og oppdatert hver dag."
        belowLead={
          <div className="inline-flex items-center gap-3 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-3 text-left backdrop-blur-sm">
            <Calendar className="h-5 w-5 flex-shrink-0 text-[#E6C547]" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/50 sm:text-xs">Fredag · Jummah</p>
              <p className="text-sm font-semibold text-white">
                Khutbah {config.jummah.khutbah} · Jamaat {config.jummah.jamat}
              </p>
            </div>
          </div>
        }
      />

      {/* The sun-path daily view (ink, continues from the hero) */}
      <SunArc />

      {/* Monthly calendar (cream) */}
      <PrayerTimesCalendar />

      {/* Qibla (cream) */}
      <QiblaDirection />

      {/* App download (ink) */}
      <Band tone="ink" glow>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/12 text-[#E6C547] ring-1 ring-inset ring-[#D4AF37]/20">
            <Smartphone className="h-8 w-8" />
          </span>
          <h2 className="font-display mt-6 text-3xl font-semibold text-white sm:text-4xl">
            Få bønnetider på telefonen
          </h2>
          <p className="mt-3 text-base text-white/70">
            Last ned appen for å få varsling før hver bønn.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/no/app/b%C3%B8nnetid/id1615293231"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <span>App Store</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=no.irn.prayertimes&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-1.97 1.13-2.5-2.5 2.5-2.5 1.97 1.13zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/></svg>
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </Band>
    </>
  );
}
