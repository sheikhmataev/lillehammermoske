import { BookOpen, Clock, Users, Heart } from 'lucide-react';

const prayerSteps = [
  {
    name: 'Fajr',
    arabic: 'الفجر',
    time: 'Dagbrytning',
    rakat: '2 Sunnah + 2 Fard',
    description: 'Morgenbønn - utføres før soloppgang',
    steps: [
      'Vask deg (Wudu)',
      'Stå vendt mot Qibla',
      '2 Sunnah rakat (valgfri)',
      '2 Fard rakat (obligatorisk)',
      'Les Quran etter bønn'
    ]
  },
  {
    name: 'Dhuhr',
    arabic: 'الظهر',
    time: 'Middag',
    rakat: '4 Sunnah + 4 Fard + 2 Sunnah',
    description: 'Middagsbønn - utføres når solen passerer zenit',
    steps: [
      'Vask deg (Wudu)',
      'Stå vendt mot Qibla',
      '4 Sunnah rakat (valgfri)',
      '4 Fard rakat (obligatorisk)',
      '2 Sunnah rakat (valgfri)'
    ]
  },
  {
    name: 'Asr',
    arabic: 'العصر',
    time: 'Ettermiddag',
    rakat: '4 Sunnah + 4 Fard',
    description: 'Ettermiddagsbønn - utføres på ettermiddagen',
    steps: [
      'Vask deg (Wudu)',
      'Stå vendt mot Qibla',
      '4 Sunnah rakat (valgfri)',
      '4 Fard rakat (obligatorisk)',
      'Les Quran etter bønn'
    ]
  },
  {
    name: 'Maghrib',
    arabic: 'المغرب',
    time: 'Solnedgang',
    rakat: '3 Fard + 2 Sunnah',
    description: 'Kveldsbønn - utføres rett etter solnedgang',
    steps: [
      'Vask deg (Wudu)',
      'Stå vendt mot Qibla',
      '3 Fard rakat (obligatorisk)',
      '2 Sunnah rakat (valgfri)',
      'Les Quran etter bønn'
    ]
  },
  {
    name: 'Isha',
    arabic: 'العشاء',
    time: 'Kveld',
    rakat: '4 Sunnah + 4 Fard + 2 Sunnah + 3 Witr',
    description: 'Kveldsbønn - utføres om kvelden',
    steps: [
      'Vask deg (Wudu)',
      'Stå vendt mot Qibla',
      '4 Sunnah rakat (valgfri)',
      '4 Fard rakat (obligatorisk)',
      '2 Sunnah rakat (valgfri)',
      '3 Witr rakat (anbefalt)'
    ]
  }
];

export function PrayerGuide() {
  return (
    <section className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Bønnegjennomgang
            </h2>
            <p className="text-xl text-gray-600">
              Lær hvordan du utfører de fem daglige bønnene
            </p>
          </div>

          <div className="space-y-12">
            {prayerSteps.map((prayer, index) => (
              <div key={prayer.name} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{prayer.name}</h3>
                      <p className="text-emerald-200 text-lg">{prayer.arabic}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-200">{prayer.time}</p>
                      <p className="text-sm text-emerald-300">{prayer.rakat}</p>
                    </div>
                  </div>
                  <p className="text-emerald-200 mt-4">{prayer.description}</p>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-semibold text-emerald-900 mb-4">
                    Steg for Steg:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {prayer.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3">
                        <div className="bg-emerald-100 text-emerald-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {stepIndex + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General Prayer Tips */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-emerald-900 text-center mb-8">
              Generelle Tips for Bønn
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-emerald-900" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-900 mb-2">
                  Lær Quran
                </h4>
                <p className="text-gray-600 text-sm">
                  Lær de viktigste suraene for bønn
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-gold-500" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-900 mb-2">
                  Vær Pünktlig
                </h4>
                <p className="text-gray-600 text-sm">
                  Prøv å be på rett tid hver dag
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-emerald-900" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-900 mb-2">
                  Be i Moskeen
                </h4>
                <p className="text-gray-600 text-sm">
                  Jummah og fellesbønn i moskeen
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-gold-500" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-900 mb-2">
                  Vær Fokusert
                </h4>
                <p className="text-gray-600 text-sm">
                  Konsentrer deg om bønnens mening
                </p>
              </div>
            </div>
          </div>

          {/* Contact for Help */}
          <div className="mt-12 bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Trenger du hjelp med bønn?
            </h3>
            <p className="text-emerald-200 mb-6">
              Våre imamer og frivillige er her for å hjelpe deg lære bønn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Kontakt oss
              </a>
              <a 
                href="/quran-school"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Meld deg på kurs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
