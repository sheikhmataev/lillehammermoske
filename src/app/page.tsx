import { Hero } from '@/components/features/Hero';
import { PrayerTimes } from '@/components/features/PrayerTimes';
import { Announcements } from '@/components/features/Announcements';
import { AboutSection } from '@/components/features/AboutSection';
import { Services } from '@/components/features/Services';
import { UpcomingEvents } from '@/components/features/UpcomingEvents';
import { CommunityGallery } from '@/components/features/CommunityGallery';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PrayerTimes />
      <Announcements />
      <Services />
      <UpcomingEvents />
      <AboutSection />
      <CommunityGallery />
    </>
  );
}
