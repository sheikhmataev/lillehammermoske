'use client';

import { useState } from 'react';
import { BookOpen, Users, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface FormData {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

export function RegistrationForms() {
  const [hoveredForm, setHoveredForm] = useState<string | null>(null);

  const forms: FormData[] = [
    {
      id: 'boys-registration',
      title: 'Påmelding - Gutter',
      description: 'Meld på gutter til Quranskolen. Passer for alle aldre fra 6 år.',
      url: 'https://forms.gle/Hmwg58USDAze8YA77',
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'girls-registration',
      title: 'Påmelding - Jenter',
      description: 'Meld på jenter til Quranskolen. Passer for alle aldre fra 6 år.',
      url: 'https://forms.gle/zS8crjpTtZQAt3J26',
      icon: <Users className="w-6 h-6" />,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const handleFormClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="registration" className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 text-emerald-900 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
              Quranskole Påmelding
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Meld på ditt barn til Quranskolen. Velg riktig skjema for gutter eller jenter.
            </p>
            <p className="text-sm text-gray-500">
              Det tar bare et par minutter! Hvis du har spørsmål, kan du kontakte oss.
            </p>
          </div>

          {/* Important Information */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-blue-900 font-medium mb-1">Viktig informasjon</p>
                <p className="text-sm text-blue-800">
                  For barn under 18 år må foresatte fylle ut skjemaet. Skjemaene sendes via Google Forms 
                  og behandles konfidensielt. Du vil motta bekreftelse på e-post etter innsending.
                </p>
              </div>
            </div>
          </Card>

          {/* Registration Forms */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${form.color} text-white`}>
                        {form.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                          {form.title}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {form.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-emerald-600 font-medium">
                            Klikk for å åpne skjema
                          </span>
                          <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-12 text-center">
            <Card className="bg-emerald-50 border-emerald-200 max-w-2xl mx-auto">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                Trenger du hjelp?
              </h3>
              <p className="text-gray-700 mb-4">
                Hvis du har problemer med skjemaene eller spørsmål om påmelding, 
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
                  href="tel:+4790083159"
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
              Ved å sende inn skjemaer samtykker du til at vi behandler personopplysningene dine 
              i henhold til våre personvernbestemmelser. Les mer om personvern på vår kontaktside.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
