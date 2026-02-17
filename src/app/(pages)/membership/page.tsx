import type { Metadata } from 'next';
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
    <div className="min-h-screen bg-white">
      <MembershipRegistration />
    </div>
  );
}
