import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
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
    <>
      <PageHero
        eyebrow="The Muslim Cultural Center"
        arabic="من نحن"
        title="Om Lillehammer Moske"
        lead="Et fellesskap for muslimer i Lillehammer og omegn siden 2005 — bygget av mennesker, for mennesker."
      />

      <MissionVision />
      <MosqueHistory />
      <BoardMembers />
      <LocationInfo />
    </>
  );
}
