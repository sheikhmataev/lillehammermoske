import type { Metadata } from 'next';
import { BoardHero } from '@/components/features/BoardHero';
import { BoardMembers } from '@/components/features/BoardMembers';
import { BoardStructure } from '@/components/features/BoardStructure';
import { BoardMeetings } from '@/components/features/BoardMeetings';

export const metadata: Metadata = {
  title: 'Styret – Lillehammer Moske',
  description:
    'Møt styret i Lillehammer Moske. Oversikt over styreleder, nestleder, daglig leder og styremedlemmer i The Muslim Cultural Center Lillehammer.',
  openGraph: {
    title: 'Styret – Lillehammer Moske',
    description: 'Styret og organisasjonsstruktur i Lillehammer Moske.',
  },
  alternates: { canonical: 'https://lillehammermoske.no/board/' },
};

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BoardHero />

      {/* Board Structure */}
      <BoardStructure />

      {/* Board Members */}
      <BoardMembers />

      {/* Board Meetings */}
      <BoardMeetings />
    </div>
  );
}
