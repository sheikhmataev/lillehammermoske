import { Calendar, Star, Moon } from 'lucide-react';

const keyDates = [
  { date: '19. feb', day: '1', label: 'Første fastedag', highlight: true },
  { date: '28. feb', day: '10', label: '10. Ramadan', highlight: false },
  { date: '5. mar', day: '15', label: 'Midten av Ramadan', highlight: false },
  { date: '11. mar', day: '21', label: 'Start av siste 10 netter', highlight: true },
  { date: '13. mar', day: '23', label: '23. natt (Laylatul Qadr)', highlight: true },
  { date: '15. mar', day: '25', label: '25. natt (Laylatul Qadr)', highlight: true },
  { date: '17. mar', day: '27', label: '27. natt (Laylatul Qadr)', highlight: true },
  { date: '19. mar', day: '29', label: '29. natt (Laylatul Qadr)', highlight: true },
  { date: '20. mar', day: '30', label: 'Siste fastedag*', highlight: true },
  { date: '21. mar', day: '', label: 'Eid al-Fitr*', highlight: true },
];

export function RamadanCalendar() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-6">
              Viktige Datoer
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 text-lg">
              Nøkkeldatoer for Ramadan 2026
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-emerald-900 px-6 py-4">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold-400" />
                  <span className="font-semibold">Ramadan 2026</span>
                </div>
                <span className="text-emerald-200 text-sm">19. feb &ndash; 20. mar</span>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {keyDates.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center px-6 py-4 ${item.highlight ? 'bg-gold-500/5' : 'bg-white'} hover:bg-emerald-50 transition-colors`}
                >
                  <div className="w-16 text-center flex-shrink-0">
                    {item.day ? (
                      <span className={`text-lg font-bold ${item.highlight ? 'text-gold-500' : 'text-emerald-900'}`}>
                        Dag {item.day}
                      </span>
                    ) : (
                      <Star className="w-5 h-5 text-gold-500 mx-auto" />
                    )}
                  </div>
                  <div className="flex-1 ml-4">
                    <p className={`font-semibold ${item.highlight ? 'text-emerald-900' : 'text-gray-800'}`}>
                      {item.label}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <p className="text-gray-500 text-xs text-center">
                * Datoer er foreløpige og vil bli bekreftet ved observasjon av nymånen. 
                Søk Laylatul Qadr spesielt i de odde nettene av de siste 10 dagene.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
