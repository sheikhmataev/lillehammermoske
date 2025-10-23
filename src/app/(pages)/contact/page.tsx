import { ContactHero } from '@/components/features/ContactHero';
import { ContactForm } from '@/components/features/ContactForm';
import { ContactInfo } from '@/components/features/ContactInfo';
import { MapLocation } from '@/components/features/MapLocation';
import { FAQ } from '@/components/features/FAQ';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Info & Form */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map Location */}
      <MapLocation />

      {/* FAQ */}
      <FAQ />
    </div>
  );
}
