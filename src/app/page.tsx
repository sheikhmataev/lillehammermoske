import { Hero } from '@/components/features/Hero';
import { EidAlAdhaHero } from '@/components/features/EidAlAdhaHero';
import { isEidWindowActive } from '@/lib/eid';
import { PrayerTimes } from '@/components/features/PrayerTimes';
import { JoinCTA } from '@/components/features/JoinCTA';
import { AboutSection } from '@/components/features/AboutSection';
import { Services } from '@/components/features/Services';
import { CommunityGallery } from '@/components/features/CommunityGallery';

export default function HomePage() {
  const showEidHero = isEidWindowActive();
  return (
    <>
      {showEidHero ? <EidAlAdhaHero /> : <Hero />}
      <PrayerTimes />
      <Services />
      <AboutSection />
      <JoinCTA />
      <CommunityGallery />
    </>
  );
}
