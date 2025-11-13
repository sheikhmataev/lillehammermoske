import { QuranSchoolHero } from '@/components/features/QuranSchoolHero';
import { QuranClasses } from '@/components/features/QuranClasses';
import { RegistrationForms } from '@/components/features/RegistrationForms';
import { Teachers } from '@/components/features/Teachers';
import { SchoolSchedule } from '@/components/features/SchoolSchedule';

export default function QuranSchoolPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <QuranSchoolHero />

      {/* Quran Classes */}
      <QuranClasses />

      {/* Teachers */}
      <Teachers />

      {/* School Schedule */}
      <SchoolSchedule />

      {/* Registration Forms */}
      <RegistrationForms />
    </div>
  );
}
