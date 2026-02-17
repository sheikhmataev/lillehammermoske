import type { Metadata } from 'next';
import Image from 'next/image';
import { RamadanCountdown } from '@/components/features/RamadanCountdown';
import { RamadanCalendar } from '@/components/features/RamadanCalendar';
import { RamadanGuidelines } from '@/components/features/RamadanGuidelines';
import { RamadanEvents } from '@/components/features/RamadanEvents';
import { Moon, Star, Heart, BookOpen, Coins, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ramadan 2026 – Kalender, Bønnetider og Taraweeh i Lillehammer',
  description:
    'Ramadan 2026 starter 18. februar. Se fastekalender, Isha kl. 19:30, Taraweeh-program, Laylatul Qadr og aktiviteter ved Lillehammer Moske.',
  openGraph: {
    title: 'Ramadan 2026 – Lillehammer Moske',
    description: 'Ramadan 2026 i Lillehammer: fastekalender, bønnetider, Taraweeh og fellesskap.',
  },
  alternates: { canonical: 'https://lillehammermoske.no/ramadan/' },
};

export default function RamadanPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Deep emerald with gold accents */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gold-500 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gold-500 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500 blur-3xl" />
        </div>

        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            {/* Arabic bismillah */}
            <p className="font-arabic text-3xl md:text-4xl text-gold-400 mb-6">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>

            <div className="inline-flex items-center gap-3 bg-gold-500/20 border border-gold-500/30 rounded-full px-6 py-2 mb-8">
              <Moon className="w-5 h-5 text-gold-400" />
              <span className="text-gold-300 font-medium text-sm uppercase tracking-wider">Den Hellige Måneden</span>
              <Star className="w-4 h-4 text-gold-400" />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight">
              Ramadan <span className="text-gold-400">2026</span>
            </h1>

            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Forbered deg på den mest velsignede måneden i året. En tid for faste, bønn, 
              refleksjon og fellesskap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3">
                <Calendar className="w-5 h-5 text-gold-400" />
                <span className="text-white font-semibold">18. februar &ndash; 19. mars 2026</span>
              </div>
            </div>

            {/* Quran Quote */}
            <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <p className="font-arabic text-2xl md:text-3xl text-gold-300 mb-4 leading-relaxed">
                شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ
              </p>
              <p className="text-emerald-100 text-lg italic leading-relaxed">
                &laquo;Ramadan-måneden er den da Koranen ble sendt ned, som er rettledning for menneskeheten, 
                den inneholder klare tegn som leder til den rette veien, og som skiller mellom sannheten og falskheten.&raquo;
              </p>
              <p className="text-emerald-300 mt-3 text-sm font-medium">— Surah Al-Baqarah (2:185)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Isha & Taraweeh Info Banner */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-800 to-emerald-900">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 text-center">
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-5 py-1.5 mb-6">
                <Moon className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 font-medium text-xs uppercase tracking-wider">Isha og Taraweeh</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Isha-bønn kl. 19:30
              </h2>
              <p className="text-emerald-100 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                Isha-bønn starter kl. 19:30 fra og med 17.02.2026, etterfulgt av Taraweeh.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 mb-6 max-w-2xl mx-auto">
                <p className="text-emerald-200 text-sm font-medium mb-3 uppercase tracking-wider">Taraweeh ledes av</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
                  <div className="bg-white/10 rounded-lg px-5 py-3">
                    <p className="text-white font-bold text-base">Hafiz Harun Abdullahi Mukhtar</p>
                  </div>
                  <div className="bg-white/10 rounded-lg px-5 py-3">
                    <p className="text-white font-bold text-base">Hafiz Ilyaas Omar Sayidahmed</p>
                  </div>
                </div>
              </div>

              <div className="bg-gold-500/10 border border-gold-500/20 rounded-lg px-4 py-3 inline-block">
                <p className="text-gold-300 text-sm">
                  <strong className="text-gold-400">Merk:</strong> Tidene kan bli endret underveis. 
                  Følg oss i vår WhatsApp-gruppe for oppdatert informasjon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ramadan Countdown */}
      <RamadanCountdown />

      {/* What is Ramadan Section */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-900 mb-6">
                Hva er Ramadan?
              </h2>
              <div className="w-20 md:w-24 h-1 bg-gold-500 mx-auto rounded-full" />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Ramadan er den islamske fastemåneden, måneårets niende måned. Friske voksne muslimer faster 
                fra daggry til solnedgang. Dette innebærer å avstå fra å drikke, spise, umoralske handlinger 
                og sinne. Andre tilbedelseshandlinger som bønn, lesing av Koranen og veldedighet oppmuntres 
                spesielt i løpet av den hellige måneden.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
              <div className="bg-emerald-50 rounded-xl md:rounded-2xl p-6 md:p-8 text-center border border-emerald-100">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-900 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-5">
                  <Moon className="w-6 h-6 md:w-7 md:h-7 text-gold-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-emerald-900 mb-2 md:mb-3">Faste (Sawm)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Avstå fra mat og drikke fra daggry til solnedgang. En av islams fem søyler.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl md:rounded-2xl p-6 md:p-8 text-center border border-emerald-100">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-900 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-5">
                  <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-gold-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-emerald-900 mb-2 md:mb-3">Bønn & Koran</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Økt tilbedelse, nattbønn (Taraweeh) og lesing av Koranen gjennom hele måneden.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl md:rounded-2xl p-6 md:p-8 text-center border border-emerald-100">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-900 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-5">
                  <Heart className="w-6 h-6 md:w-7 md:h-7 text-gold-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-emerald-900 mb-2 md:mb-3">Veldedighet</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Gi Zakat og Sadaqah. Profeten (fvmh) var mest sjenerøs under Ramadan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When is Ramadan Section */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-6">
                Når er Ramadan 2026?
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full" />
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-emerald-900 p-8 text-center">
                <p className="text-emerald-200 text-lg mb-2">1. Ramadan</p>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  Onsdag 18. februar 2026
                </p>
                <p className="text-emerald-200">og avsluttes <span className="text-gold-400 font-bold">Torsdag 19. mars 2026</span></p>
              </div>
              <div className="p-8">
                <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-6 mb-6">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-emerald-900">Merk:</strong> De nøyaktige datoene for Ramadan er avhengige av 
                    måneobservasjoner og starter når nymånen viser seg. Fordi den islamske kalenderen er basert på 
                    månesyklusen, flytter den hellige måneden Ramadan seg med omtrent ti dager hvert år.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-emerald-900 mb-2 text-lg">Eid al-Fitr 2026</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Eid al-Fitr markerer offisielt slutten på Ramadan. Den nøyaktige timingen er basert på 
                      måneobservasjoner. Eid al-Fitr begynner ved starten av den islamske måneden Shawwal.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-emerald-900 mb-2 text-lg">Laylatul Qadr</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Skjebnenatten er mer verdt enn tusen måneder. Søk den i de siste ti nettene av Ramadan, 
                      spesielt de oddetallsnettene (21., 23., 25., 27. og 29.).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laylatul Qadr Quote */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-arabic text-2xl md:text-3xl text-gold-400 mb-6 leading-relaxed">
              إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ
            </p>
            <p className="text-emerald-100 text-lg italic leading-relaxed mb-3">
              &laquo;Vi har sendt den ned i Skjebnenatten. Hvordan kan du vel vite hva Skjebnenatten er? 
              Skjebnenatten er mer verdt enn tusen måneder!&raquo;
            </p>
            <p className="text-emerald-300 text-sm font-medium">— Surah Al-Qadr (97:1-3)</p>
          </div>
        </div>
      </section>

      {/* Ramadan Calendar */}
      <RamadanCalendar />

      {/* Ramadan Tabell Image */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-900 mb-6 sm:mb-8">
              Ramadan Kalender 2026
            </h2>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <Image
                src="/assets/images/posters/ramadan_tabell.png"
                alt="Ramadan Kalender 2026 - Faste- og bønnetider for Lillehammer"
                width={700}
                height={990}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Trykk på bildet for å se det større
            </p>
          </div>
        </div>
      </section>

      {/* Ramadan Guidelines - Sawm, Zakat, etc */}
      <RamadanGuidelines />

      {/* Hadith Quote */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-emerald-100 text-xl italic leading-relaxed mb-4">
              &laquo;Den som gir mat til en som faster vil ha belønningen lik han som fastet, 
              uten at belønningen til han som fastet minker.&raquo;
            </p>
            <p className="text-emerald-300 text-sm font-medium">— Al-Tirmidhi</p>
          </div>
        </div>
      </section>

      {/* Zakat & Sadaqah Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-6">
                Zakat & Sadaqah
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Profeten (fvmh) var den mest sjenerøse av mennesker, og han var mest sjenerøs under Ramadan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-8 text-white">
                <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center mb-5">
                  <Coins className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Zakat</h3>
                <p className="text-emerald-100 leading-relaxed mb-4">
                  Zakat er en obligatorisk veldedighetsform for muslimer som oppfyller visse formueskriterier. 
                  Man gir 2,5% av sin oppsparte formue. Zakat kan ha makten til å utrydde global fattigdom.
                </p>
                <p className="text-emerald-200 text-sm italic">
                  &laquo;Hvis alle rundt om i verden ga 2,5% av formuen sin som Zakat, kunne vi utryddet fattigdom 
                  sammen, SubhanAllah!&raquo;
                </p>
              </div>

              <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-8 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Sadaqah</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Frivillig veldedighet som kan gis når som helst og i hvilken som helst mengde. Profeten (fvmh) 
                  ville gi veldedighet gjennom året, men økte sin sadaqah under Ramadan.
                </p>
                <p className="text-white/80 text-sm italic">
                  Ibn Abbas sa: &laquo;Profeten (fvmh) var den mest sjenerøse av mennesker, og han var mest 
                  sjenerøs under Ramadan.&raquo;
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-cream-50 rounded-xl p-6 border border-gray-200 text-center">
                <h4 className="font-bold text-emerald-900 mb-2">Fitrana (Zakat ul-Fitr)</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Obligatorisk almisse som betales før Eid-bønnen. Renser fasten og gir mat til de trengende.
                </p>
              </div>
              <div className="bg-cream-50 rounded-xl p-6 border border-gray-200 text-center">
                <h4 className="font-bold text-emerald-900 mb-2">Fidya</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Kompensasjon for de som ikke kan faste på grunn av gyldig grunn og ikke kan ta igjen dagene.
                </p>
              </div>
              <div className="bg-cream-50 rounded-xl p-6 border border-gray-200 text-center">
                <h4 className="font-bold text-emerald-900 mb-2">Kaffarah</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Kompensasjon for de som bryter fasten uten gyldig grunn. Man må faste 60 sammenhengende dager eller mate 60 fattige.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ramadan Events at Mosque */}
      <RamadanEvents />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-arabic text-2xl text-gold-400 mb-6">
              رَمَضَانَ كَرِيم
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
              Ramadan Kareem
            </h2>
            <p className="text-emerald-100 text-lg leading-relaxed mb-8">
              Må Allah akseptere vår faste, våre bønner og gode gjerninger i denne velsignede måneden. 
              Vi ønsker hele fellesskapet en velsignet Ramadan.
            </p>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <p className="text-emerald-100 text-lg italic leading-relaxed">
                &laquo;Alle handlingene til Adams barn er for dem, bortsett fra fasten. 
                Den er for Meg, og Jeg alene vil belønne for den.&raquo;
              </p>
              <p className="text-emerald-300 mt-3 text-sm font-medium">— Hadith Qudsi (Bukhari)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
