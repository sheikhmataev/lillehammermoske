import type { Metadata } from 'next';
import { ContactHero } from '@/components/features/ContactHero';
import { ContactForm } from '@/components/features/ContactForm';
import { ContactInfo } from '@/components/features/ContactInfo';
import { MapLocation } from '@/components/features/MapLocation';
import { FAQ } from '@/components/features/FAQ';
import { Band } from '@/components/ui/Band';

export const metadata: Metadata = {
  title: 'Kontakt Lillehammer Moske – Adresse, Kart og Skjema',
  description:
    'Ta kontakt med Lillehammer Moske. Besøk oss i Bankgata 12, 2609 Lillehammer. Send melding via kontaktskjema eller finn oss på kartet.',
  openGraph: {
    title: 'Kontakt – Lillehammer Moske',
    description: 'Kontakt Lillehammer Moske – adresse, kart og kontaktskjema.',
  },
  alternates: { canonical: 'https://lillehammermoske.no/contact/' },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <Band tone="cream" pattern>
        <div id="form" className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </Band>

      <MapLocation />
      <FAQ />
    </>
  );
}
