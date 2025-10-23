import { Hero } from '@/components/features/Hero';
import { PrayerTimes } from '@/components/features/PrayerTimes';
import { AboutSection } from '@/components/features/AboutSection';
import { Services } from '@/components/features/Services';
import { Announcements } from '@/components/features/Announcements';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PrayerTimes />
      <AboutSection />
      <Services />
      <Announcements />
    </>
  );
}
