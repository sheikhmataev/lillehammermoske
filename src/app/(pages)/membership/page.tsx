import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { MembershipRegistration } from '@/components/features/MembershipRegistration';

export const metadata: Metadata = {
  title: 'Bli Medlem – Lillehammer Moske',
  description:
    'Bli medlem av Lillehammer Moske. Registrer deg som medlem av The Muslim Cultural Center Lillehammer og bli en del av fellesskapet.',
  openGraph: {
    title: 'Bli Medlem – Lillehammer Moske',
    description: 'Registrer deg som medlem av Lillehammer Moske.',
  },
  alternates: { canonical: 'https://lillehammermoske.no/membership/' },
};

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Bli en del av oss"
        arabic="العضوية"
        title="Medlemskap"
        lead="Som medlem støtter du moskéens arbeid og er med på å forme veien videre."
      />
      <MembershipRegistration />
    </>
  );
}
