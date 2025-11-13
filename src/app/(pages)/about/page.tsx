import { BoardMembers } from '@/components/features/BoardMembers';
import { MosqueHistory } from '@/components/features/MosqueHistory';
import { MissionVision } from '@/components/features/MissionVision';
import { LocationInfo } from '@/components/features/LocationInfo';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Om Lillehammer Moske
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              The Muslim Cultural Center Lillehammer - Et fellesskap for muslimer i Lillehammer og omegn siden 2005
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Mosque History */}
      <MosqueHistory />

      {/* Board Members */}
      <BoardMembers />

      {/* Location & Contact */}
      <LocationInfo />
    </div>
  );
}
