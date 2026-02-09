import { QuranSchoolHero } from '@/components/features/QuranSchoolHero';
import { RegistrationForms } from '@/components/features/RegistrationForms';

export default function QuranSchoolPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <QuranSchoolHero />

      {/* About our school */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-6">
              Om Quranskolen
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Vi tilbyr Quran-undervisning for barn fra 6 år og oppover. Klassene dekker alt fra
              Qaida til Quran-lesing med Tajweed — alt i én klasse tilpasset hvert barns nivå.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Vi har separate klasser for gutter og jenter. Meld på ditt barn ved å velge
              riktig skjema nedenfor.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Forms */}
      <RegistrationForms />
    </div>
  );
}
