'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, CreditCard, Building2, Smartphone, Calendar, Gift } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface DonationOption {
  id: string;
  title: string;
  description: string;
  icon: typeof Heart;
  methods: string[];
  popular?: boolean;
  color: 'emerald' | 'gold';
}

const donationOptions: DonationOption[] = [
  {
    id: 'one-time',
    title: 'Engangsdonasjon',
    description: 'Gi en enkel engangsdonasjon til moskeen og våre aktiviteter.',
    icon: Heart,
    methods: ['Stripe (Kort)', 'Bankoverføring', 'Vipps', 'MobilePay'],
    popular: true,
    color: 'emerald',
  },
  {
    id: 'recurring',
    title: 'Månedlig donasjon',
    description: 'Støtt moskeen med en fast månedlig donasjon. Avbestill når som helst.',
    icon: Calendar,
    methods: ['Stripe (Kort)', 'Bankoverføring'],
    color: 'gold',
  },
  {
    id: 'zakat',
    title: 'Zakat',
    description: 'Betal din Zakat direkte til moskeen for støtte til våre programmer.',
    icon: Gift,
    methods: ['Stripe (Kort)', 'Bankoverføring', 'Vipps'],
    color: 'emerald',
  },
  {
    id: 'sadaqah',
    title: 'Sadaqah',
    description: 'Frivillig veldedighet for å støtte våre aktiviteter og programmer.',
    icon: Heart,
    methods: ['Alle metoder'],
    color: 'gold',
  },
  {
    id: 'bank',
    title: 'Bankoverføring',
    description: 'Overfør direkte til vår bankkonto. Organisasjonsnummer: 988 588 660',
    icon: Building2,
    methods: ['Bankoverføring'],
    color: 'emerald',
  },
];

const paymentMethods = [
  {
    name: 'Stripe (Kort)',
    icon: CreditCard,
    description: 'Betaling med kredittkort eller debetkort',
    available: true,
  },
  {
    name: 'Vipps',
    icon: Smartphone,
    description: 'Betaling med Vipps app',
    available: true,
  },
  {
    name: 'MobilePay',
    icon: Smartphone,
    description: 'Betaling med MobilePay app',
    available: true,
  },
  {
    name: 'Bankoverføring',
    icon: Building2,
    description: 'Direkte bankoverføring',
    available: true,
  },
];

export function DonationOptions() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-900">
            Donasjonsalternativer
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Velg hvordan du vil støtte moskeen. Alle donasjoner bidrar til å styrke det muslimske fellesskapet i Lillehammer.
          </p>
        </div>

        {/* Donation Options Grid - Enhanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {donationOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedOption === option.id;
            const isGold = option.color === 'gold';

            return (
              <Card
                key={option.id}
                hover
                variant="elevated"
                className={`relative cursor-pointer transition-all h-full flex flex-col ${
                  isSelected ? 'ring-2 ring-emerald-500 shadow-lg border-emerald-300' : ''
                }`}
                onClick={() => setSelectedOption(option.id)}
              >
                {option.popular && (
                  <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-10">
                    Populært
                  </div>
                )}
                
                {/* Icon */}
                <div className={`w-14 h-14 ${isGold ? 'bg-gold-500' : 'bg-emerald-900'} rounded-xl flex items-center justify-center mb-6 shadow-sm`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 ${isGold ? 'text-gold-900' : 'text-emerald-900'}`}>
                  {option.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                  {option.description}
                </p>
                
                {/* Methods */}
                <div className="pt-5 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Tilgjengelige metoder
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {option.methods.map((method) => (
                      <span
                        key={method}
                        className="text-xs px-2.5 py-1.5 bg-gray-100 text-gray-700 rounded-md font-medium border border-gray-200"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Payment Methods Info - Enhanced */}
        <Card variant="elevated" className="mb-12 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-emerald-900 mb-8">Betalingsmetoder</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.name} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-14 h-14 bg-emerald-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-emerald-900 mb-2">{method.name}</h4>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Call to Action - Enhanced */}
        <div className="text-center max-w-3xl mx-auto">
          <Card variant="elevated" className="bg-emerald-900 text-white border-0 p-12">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
              Støtt vårt fellesskap
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Din donasjon bidrar til å opprettholde moskeen, støtte utdanning, og styrke det muslimske fellesskapet i Lillehammer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate#form">
                <Button variant="secondary" size="lg">
                  Doner nå
                </Button>
              </Link>
              <Link href="/donate#impact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Se vår påvirkning
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Bank Account Info - Enhanced */}
        <Card variant="elevated" className="mt-12 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-2">
                Direkte bankoverføring
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Du kan også overføre direkte til vår bankkonto. Send oss en e-post etter overføringen for å motta en kvittering.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Banknavn</p>
              <p className="text-lg font-bold text-emerald-900">[Banknavn]</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Kontonummer</p>
              <p className="text-lg font-bold text-emerald-900">[Kontonummer]</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Organisasjonsnummer</p>
              <p className="text-lg font-bold text-emerald-900">988 588 660</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">KID/Melding</p>
              <p className="text-lg font-bold text-emerald-900">Skriv e-postadresse din</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
