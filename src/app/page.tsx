import { Hero } from '@/components/features/Hero';
import { PrayerTimes } from '@/components/features/PrayerTimes';
import { RamadanCountdown } from '@/components/features/RamadanCountdown';
import { AboutSection } from '@/components/features/AboutSection';
import { Services } from '@/components/features/Services';
import { CommunityGallery } from '@/components/features/CommunityGallery';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PrayerTimes />
      <RamadanCountdown />
      <Services />
      <AboutSection />
      <CommunityGallery />
    </>
  );
}
