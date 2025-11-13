'use client';

import { useState } from 'react';
import { UserPlus, ExternalLink, CheckCircle, AlertCircle, Users, Heart, HelpCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface FormData {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  benefits: string[];
}

export function MembershipRegistration() {
  const [hoveredForm, setHoveredForm] = useState<string | null>(null);

  const forms: FormData[] = [
    {
      id: 'general-membership',
      title: 'Bli Medlem',
      description: 'Meld deg inn i Lillehammer Moske og bli en del av vårt fellesskap.',
      url: 'https://forms.gle/XFiqQsontqLdpiMP9',
      icon: <UserPlus className="w-6 h-6" />,
      color: 'from-emerald-500 to-emerald-600',
      benefits: [
        'Støtt moskeens drift og aktiviteter',
        'Delta i beslutningsprosesser',
        'Få tilgang til medlemsfordeler',
        'Vær med i å bygge et sterkere fellesskap'
      ]
    }
  ];

  const handleFormClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-12 h-12 text-emerald-900 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-900">
                Medlemskap
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-2">
              Bli en del av vårt voksende fellesskap
            </p>
            <p className="text-sm text-gray-500">
              Som medlem støtter du moskeens arbeid og får muligheten til å forme fremtiden sammen med oss.
            </p>
          </div>

          {/* Important Information */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-blue-900 font-medium mb-1">Viktig informasjon</p>
                <p className="text-sm text-blue-800">
                  Medlemskapet er åpent for alle som ønsker å støtte moskeens arbeid. 
                  Skjemaet sendes via Google Forms og behandles konfidensielt. 
                  Du vil motta bekreftelse på e-post etter innsending.
                </p>
              </div>
            </div>
          </Card>

          {/* Membership Benefits */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
              Hvorfor bli medlem?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Støtt fellesskapet
                </h3>
                <p className="text-gray-600 text-sm">
                  Din medlemskapshjelp bidrar til å opprettholde moskeens daglige drift og religiøse tjenester.
                </p>
              </Card>
              
              <Card className="text-center p-6">
                <HelpCircle className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Vær med å bestemme
                </h3>
                <p className="text-gray-600 text-sm">
                  Som medlem har du stemmerett på årsmøter og kan påvirke moskeens retning og aktiviteter.
                </p>
              </Card>
              
              <Card className="text-center p-6">
                <Users className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Bygg nettverk
                </h3>
                <p className="text-gray-600 text-sm">
                  Knytt kontakter med andre medlemmer og delta i sosiale og religiøse aktiviteter.
                </p>
              </Card>
            </div>
          </div>

          {/* Registration Form */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
              Meld deg inn nå
            </h2>
            <div className="max-w-2xl mx-auto">
              {forms.map((form) => (
                <Card
                  key={form.id}
                  className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    hoveredForm === form.id ? 'ring-2 ring-emerald-400' : ''
                  }`}
                  onMouseEnter={() => setHoveredForm(form.id)}
                  onMouseLeave={() => setHoveredForm(null)}
                  onClick={() => handleFormClick(form.url)}
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`p-4 rounded-lg bg-gradient-to-r ${form.color} text-white`}>
                        {form.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                          {form.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {form.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Medlemsfordeler:</h4>
                      <ul className="space-y-2">
                        {form.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-emerald-600 font-medium">
                        Klikk for å åpne innmeldingsskjema
                      </span>
                      <ExternalLink className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="text-center">
            <Card className="bg-emerald-50 border-emerald-200 max-w-2xl mx-auto">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                Har du spørsmål?
              </h3>
              <p className="text-gray-700 mb-4">
                Hvis du har spørsmål om medlemskap eller problemer med skjemaet, 
                ikke nøl med å kontakte oss. Vi hjelper deg gjerne!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@lillehammermoske.no"
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                  Send e-post
                </a>
                <a
                  href="tel:+4712345678"
                  className="inline-flex items-center justify-center px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
                >
                  Ring oss
                </a>
              </div>
            </Card>
          </div>

          {/* Privacy Notice */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Ved å sende inn innmeldingsskjema samtykker du til at vi behandler personopplysningene dine 
              i henhold til våre personvernbestemmelser. Les mer om personvern på vår kontaktside.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
