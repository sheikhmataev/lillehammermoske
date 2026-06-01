import type { Metadata } from 'next';
import { BookOpen, Users, GraduationCap } from 'lucide-react';
import { QuranSchoolHero } from '@/components/features/QuranSchoolHero';
import { RegistrationForms } from '@/components/features/RegistrationForms';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Quranskole Lillehammer – Påmelding og Informasjon',
  description:
    'Quranskole ved Lillehammer Moske. Klasser for alle aldre med Koran-lesing, arabisk og islamsk undervisning. Meld deg på i dag.',
  openGraph: {
    title: 'Quranskole – Lillehammer Moske',
    description: 'Koran- og arabiskundervisning for barn og voksne i Lillehammer.',
  },
  alternates: { canonical: 'https://lillehammermoske.no/quran-school/' },
};

const features = [
  { icon: BookOpen, title: 'Qaida til Quran', text: 'Fra grunnleggende Noorani Qaida til flytende Quran-lesing med Tajweed.' },
  { icon: Users, title: 'Egne klasser', text: 'Separate klasser for gutter og jenter, tilpasset hvert barns nivå.' },
  { icon: GraduationCap, title: 'Fra 6 år', text: 'Undervisning for barn fra 6 år og oppover — og egne tilbud for voksne.' },
];

export default function QuranSchoolPage() {
  return (
    <>
      <QuranSchoolHero />

      <Band tone="parchment">
        <SectionHeading
          tone="cream"
          eyebrow="Undervisning"
          arabic="مدرسة القرآن"
          title="Om Quranskolen"
          lead="Vi tilbyr Quran-undervisning for barn fra 6 år og oppover — fra Qaida til lesing med Tajweed, alt tilpasset hvert barns nivå."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-6 text-center backdrop-blur-sm">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0c2a1a] text-[#E6C547]">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="font-display mt-4 text-lg font-semibold text-[#0c2a1a]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3a3a32]">{text}</p>
            </div>
          ))}
        </div>
      </Band>

      <RegistrationForms />
    </>
  );
}
