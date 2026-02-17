import type { Metadata } from 'next';
import { BoardMembers } from '@/components/features/BoardMembers';
import { MosqueHistory } from '@/components/features/MosqueHistory';
import { MissionVision } from '@/components/features/MissionVision';
import { LocationInfo } from '@/components/features/LocationInfo';

export const metadata: Metadata = {
  title: 'Om Lillehammer Moske – Historie, Visjon og Styret',
  description:
    'Lær om Lillehammer Moske (The Muslim Cultural Center), grunnlagt i 2005. Vår historie, visjon, styremedlemmer og beliggenhet i Bankgata 12.',
  openGraph: {
    title: 'Om Lillehammer Moske',
    description: 'Historie, visjon og styret til Lillehammer Moske – et fellesskap siden 2005.',
  },
  alternates: { canonical: 'https://lillehammermoske.no/about/' },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white px-4 py-16 sm:py-20 md:section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Om Lillehammer Moske
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-emerald-100 leading-relaxed">
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
