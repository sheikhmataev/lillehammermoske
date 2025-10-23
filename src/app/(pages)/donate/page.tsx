import { DonateHero } from '@/components/features/DonateHero';
import { DonationOptions } from '@/components/features/DonationOptions';
import { DonationForm } from '@/components/features/DonationForm';
import { DonationImpact } from '@/components/features/DonationImpact';
import { DonationHistory } from '@/components/features/DonationHistory';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <DonateHero />

      {/* Donation Options */}
      <DonationOptions />

      {/* Donation Form */}
      <DonationForm />

      {/* Impact of Donations */}
      <DonationImpact />

      {/* Donation History */}
      <DonationHistory />
    </div>
  );
}
