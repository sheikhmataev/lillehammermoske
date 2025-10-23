import { BoardHero } from '@/components/features/BoardHero';
import { BoardMembers } from '@/components/features/BoardMembers';
import { BoardStructure } from '@/components/features/BoardStructure';
import { BoardMeetings } from '@/components/features/BoardMeetings';

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
