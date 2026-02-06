import { Moon, Users, BookOpen, Heart, Clock, UtensilsCrossed } from 'lucide-react';

const activities = [
  {
    icon: Moon,
    title: 'Taraweeh-bønn',
    description: 'Nattlig Ramadan-bønn etter Isha. Hele fellesskapet er velkommen til å delta.',
    time: 'Etter Isha-bønnen daglig',
    color: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-900',
  },
  {
    icon: UtensilsCrossed,
    title: 'Felles Iftar',
    description: 'Bryt fasten sammen med fellesskapet i moskeen. Varm mat serveres daglig.',
    time: 'Ved Maghrib daglig',
    color: 'bg-gold-500/5 border-gold-500/20',
    iconColor: 'text-gold-500',
  },
  {
    icon: BookOpen,
    title: 'Koran-lesing',
    description: 'Felleslesning av Koranen gjennom hele Ramadan. Mål: fullføre hele Koranen.',
    time: 'Etter Asr-bønnen',
    color: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-900',
  },
  {
    icon: Users,
    title: 'Barneaktiviteter',
    description: 'Spesielle aktiviteter og undervisning for barn under Ramadan.',
    time: 'Lørdager og søndager',
    color: 'bg-gold-500/5 border-gold-500/20',
    iconColor: 'text-gold-500',
  },
  {
    icon: Heart,
    title: 'Veldedighetsinnsamling',
    description: 'Samle inn Zakat, Sadaqah og Fitrana til de som trenger det mest.',
    time: 'Gjennom hele Ramadan',
    color: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-900',
  },
  {
    icon: Moon,
    title: 'Laylatul Qadr-program',
    description: 'Spesielle programmer de siste 10 nettene med utvidet bønn og dhikr.',
    time: 'Siste 10 netter av Ramadan',
    color: 'bg-gold-500/5 border-gold-500/20',
    iconColor: 'text-gold-500',
  },
];

export function RamadanEvents() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-6">
              Aktiviteter i Moskeen
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Program og aktiviteter under Ramadan 2026 ved Lillehammer Moske
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-6 border ${activity.color} hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <activity.icon className={`w-5 h-5 ${activity.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-emerald-900 mb-2">{activity.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-500 text-xs font-medium">{activity.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
