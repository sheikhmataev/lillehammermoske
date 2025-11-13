'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'prayer' | 'education' | 'visiting' | 'donation';
}

const faqItems: FAQItem[] = [
  {
    question: 'Når er moskeen åpen?',
    answer: 'Moskeen er åpen daglig fra 05:00 til 22:00. Bønnetider varierer gjennom året. Under Ramadan er moskeen tilgjengelig 24/7.',
    category: 'general',
  },
  {
    question: 'Hvor finner jeg bønnetider?',
    answer: 'Du kan finne bønnetider på vår nettside under "Bønnetider"-seksjonen. Bønnetidene oppdateres automatisk daglig basert på vår lokasjon i Lillehammer.',
    category: 'prayer',
  },
  {
    question: 'Kan ikke-muslimer besøke moskeen?',
    answer: 'Ja, alle er velkommen til å besøke moskeen. Vi anbefaler å kontakte oss på forhånd for organiserte turer, spesielt for grupper eller skoler.',
    category: 'visiting',
  },
  {
    question: 'Hvordan melder jeg meg på Quranskole?',
    answer: 'Du kan melde deg på Quranskole via vår nettside under "Quranskole"-seksjonen, eller du kan kontakte oss direkte. Vi har klasser for både barn og voksne.',
    category: 'education',
  },
  {
    question: 'Hvordan kan jeg donere til moskeen?',
    answer: 'Du kan donere via vår nettside med kort (Stripe), Vipps, MobilePay eller bankoverføring. Alle donasjoner er velkomne og bidrar til å opprettholde moskeen og våre aktiviteter.',
    category: 'donation',
  },
  {
    question: 'Hva er åpningstider for Jummah bønn?',
    answer: 'Jummah bønn holdes hver fredag klokken 12:00. Alle er velkommen til å delta. Vi anbefaler å komme litt i forveien.',
    category: 'prayer',
  },
  {
    question: 'Tilbyr dere undervisning for voksne?',
    answer: 'Ja, vi tilbyr både Quranskole og religiøs undervisning for voksne. Kontakt oss for mer informasjon om klassetider og innhold.',
    category: 'education',
  },
  {
    question: 'Hvor kan jeg parkere når jeg besøker moskeen?',
    answer: 'Det er begrenset parkering ved moskeen. Vi anbefaler å bruke offentlig transport når mulig. Nærmeste parkering er [informasjon om parkering].',
    category: 'visiting',
  },
  {
    question: 'Hvordan blir donasjoner brukt?',
    answer: 'Donasjoner brukes til å opprettholde moskeen, støtte utdanning, organisere aktiviteter, og bidra til det muslimske fellesskapet. Vi er transparente med vår økonomi.',
    category: 'donation',
  },
  {
    question: 'Kan jeg få en kvittering for min donasjon?',
    answer: 'Ja, du vil automatisk motta en kvittering på e-post etter donasjon via nettsiden. For bankoverføringer, send oss en e-post med detaljene for å motta en kvittering.',
    category: 'donation',
  },
];

const categoryLabels = {
  general: 'Generelt',
  prayer: 'Bønn',
  education: 'Utdanning',
  visiting: 'Besøk',
  donation: 'Donasjon',
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | FAQItem['category']>('all');

  const filteredFAQs = selectedCategory === 'all'
    ? faqItems
    : faqItems.filter(item => item.category === selectedCategory);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-emerald-900" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Ofte Stilte Spørsmål
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Svar på vanlige spørsmål om moskeen, bønnetider, aktiviteter og mer.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { key: 'all', label: 'Alle', count: faqItems.length },
            { key: 'general', label: 'Generelt', count: faqItems.filter(f => f.category === 'general').length },
            { key: 'prayer', label: 'Bønn', count: faqItems.filter(f => f.category === 'prayer').length },
            { key: 'education', label: 'Utdanning', count: faqItems.filter(f => f.category === 'education').length },
            { key: 'visiting', label: 'Besøk', count: faqItems.filter(f => f.category === 'visiting').length },
            { key: 'donation', label: 'Donasjon', count: faqItems.filter(f => f.category === 'donation').length },
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => {
                setSelectedCategory(category.key as any);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm ${
                selectedCategory === category.key
                  ? 'bg-emerald-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-900'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xs font-semibold px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full">
                          {categoryLabels[item.category]}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-emerald-900 pr-4">
                        {item.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-6 h-6 text-emerald-900" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-emerald-900" />
                      )}
                    </div>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })
          ) : (
            <Card>
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Ingen spørsmål i denne kategorien
                </h3>
                <p className="text-gray-500">
                  Det er ingen spørsmål i denne kategorien for øyeblikket.
                </p>
              </div>
            </Card>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Har du flere spørsmål?
            </h3>
            <p className="text-emerald-200 mb-6">
              Vi er her for å hjelpe deg. Kontakt oss hvis du har spørsmål som ikke er besvart her.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
              >
                Kontakt oss
              </a>
              <a
                href="/contact#form"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 rounded-lg font-medium transition-colors inline-block"
              >
                Send en melding
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
