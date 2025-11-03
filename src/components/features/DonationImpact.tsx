import { Heart, BookOpen, Users, Building2, Calendar, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface ImpactStat {
  icon: typeof Heart;
  title: string;
  value: string;
  description: string;
  color: 'emerald' | 'gold';
}

const impactStats: ImpactStat[] = [
  {
    icon: Building2,
    title: 'Fasiliteter',
    value: '1',
    description: 'Moske opprettholdt og forbedret',
    color: 'emerald',
  },
  {
    icon: BookOpen,
    title: 'Elever',
    value: '150+',
    description: 'Barn og voksne i Quranskole',
    color: 'gold',
  },
  {
    icon: Calendar,
    title: 'Arrangementer',
    value: '50+',
    description: 'Årlige arrangementer og aktiviteter',
    color: 'emerald',
  },
  {
    icon: Users,
    title: 'Fellesskap',
    value: '200+',
    description: 'Aktive medlemmer',
    color: 'gold',
  },
];

const impactAreas = [
  {
    title: 'Moske Fasiliteter',
    description: 'Din donasjon bidrar til å opprettholde og forbedre moskeens fasiliteter, inkludert bønnesal, renholdsutstyr, og sikkerhetsforanstaltninger.',
    icon: Building2,
    color: 'emerald',
  },
  {
    title: 'Utdanning',
    description: 'Støtt vår Quranskole og utdanningsprogrammer. Din donasjon hjelper oss med å tilby kvalitetsutdanning for barn og voksne.',
    icon: BookOpen,
    color: 'gold',
  },
  {
    title: 'Fellesskapsaktivitet',
    description: 'Bidra til å organisere arrangementer, iftar-gatherings, og andre aktiviteter som styrker det muslimske fellesskapet.',
    icon: Users,
    color: 'emerald',
  },
  {
    title: 'Ramadan og Spesielle Dager',
    description: 'Støtt våre spesielle arrangementer under Ramadan, Eid, og andre viktige dager i det islamske kalenderåret.',
    icon: Calendar,
    color: 'gold',
  },
];

export function DonationImpact() {
  return (
    <section id="impact" className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-emerald-900 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Din Donasjons Påvirkning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Se hvordan din donasjon hjelper oss med å opprettholde moskeen og styrke det muslimske fellesskapet i Lillehammer.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              emerald: 'bg-emerald-900 text-white',
              gold: 'bg-gold-500 text-white',
            };
            return (
              <Card key={index} className="text-center">
                <div className={`w-16 h-16 ${colorClasses[stat.color]} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-emerald-900 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                  {stat.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Impact Areas */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-emerald-900 mb-8 text-center">
            Hvor går donasjonene dine?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              const colorClasses = {
                emerald: {
                  bg: 'bg-emerald-100',
                  icon: 'text-emerald-900',
                  border: 'border-emerald-200',
                },
                gold: {
                  bg: 'bg-gold-100',
                  icon: 'text-gold-900',
                  border: 'border-gold-200',
                },
              };
              const colors = colorClasses[area.color as keyof typeof colorClasses];
              return (
                <Card key={index} className={`${colors.bg} ${colors.border} border-2`}>
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-14 h-14 ${colors.icon} bg-white rounded-xl flex items-center justify-center`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-emerald-900 mb-3">
                        {area.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Success Stories */}
        <Card className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
          <div className="text-center mb-8">
            <CheckCircle className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">
              Takknemlig for din støtte
            </h3>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Takket være generøse donasjoner har vi kunnet opprettholde moskeen, utvide utdanningsprogrammene våre, og organisere flere fellesskapsaktiviteter. Hver donasjon teller!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-gold-500 mb-2">98%</div>
              <p className="text-gray-200">Av donasjoner går direkte til programmer</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-gold-500 mb-2">100%</div>
              <p className="text-gray-200">Transparent rapportering</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-gold-500 mb-2">Årlig</div>
              <p className="text-gray-200">Finansiell rapport publisert</p>
            </div>
          </div>
        </Card>

        {/* Transparency Note */}
        <div className="mt-12 text-center">
          <Card className="bg-white inline-block">
            <p className="text-gray-600 mb-4">
              Vi er forpliktet til full åpenhet. Årlige finansielle rapporter er tilgjengelige for alle medlemmer.
            </p>
            <a
              href="/board#reports"
              className="text-emerald-900 hover:text-emerald-800 font-medium underline"
            >
              Se våre finansielle rapporter →
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
