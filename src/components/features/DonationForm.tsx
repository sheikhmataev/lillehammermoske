'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Heart, CreditCard, CheckCircle } from 'lucide-react';

interface DonationFormData {
  amount: string;
  type: string;
  name: string;
  email: string;
  phone?: string;
  anonymous: boolean;
  message?: string;
}

const donationAmounts = [
  { value: '100', label: '100 kr' },
  { value: '250', label: '250 kr' },
  { value: '500', label: '500 kr' },
  { value: '1000', label: '1000 kr' },
  { value: 'custom', label: 'Eget beløp' },
];

const donationTypes = [
  { value: 'one-time', label: 'Engangsdonasjon' },
  { value: 'monthly', label: 'Månedlig donasjon' },
  { value: 'zakat', label: 'Zakat' },
  { value: 'sadaqah', label: 'Sadaqah' },
];

export function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<DonationFormData>();

  const watchAmount = watch('amount');
  const isCustomAmount = watchAmount === 'custom';

  const onSubmit = async (data: DonationFormData) => {
    setIsSubmitting(true);
    // TODO: Replace with actual API call to payment processor
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setSelectedAmount('');
    setCustomAmount('');
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="form" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-emerald-900 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Donasjonsskjema
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Takk for at du vurderer å støtte moskeen. Din donasjon bidrar til å opprettholde moskeen og styrke det muslimske fellesskapet i Lillehammer.
            </p>
          </div>

          {isSubmitted ? (
            <Card className="bg-emerald-50 border-emerald-200 text-center animate-fade-in">
              <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                Takk for din donasjon!
              </h3>
              <p className="text-gray-600 mb-6">
                Din donasjon er mottatt. Du vil motta en kvittering på e-post snart. Vi setter stor pris på din generøsitet!
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
              >
                Gjør en ny donasjon
              </Button>
            </Card>
          ) : (
            <Card>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Donation Type */}
                <Select
                  label="Donasjonstype"
                  {...register('type', {
                    required: 'Velg donasjonstype',
                  })}
                  error={errors.type?.message}
                  options={[
                    { value: '', label: 'Velg type' },
                    ...donationTypes.map(type => ({
                      value: type.value,
                      label: type.label,
                    })),
                  ]}
                />

                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Beløp <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount.value}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount.value);
                          if (amount.value !== 'custom') {
                            setCustomAmount('');
                          }
                        }}
                        className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                          selectedAmount === amount.value
                            ? 'bg-emerald-900 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {amount.label}
                      </button>
                    ))}
                  </div>
                  {isCustomAmount && (
                    <Input
                      type="number"
                      min="1"
                      placeholder="Skriv inn beløp i kr"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="mt-2"
                    />
                  )}
                  {errors.amount && (
                    <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
                  )}
                  <input
                    type="hidden"
                    {...register('amount', {
                      required: 'Velg eller skriv inn beløp',
                      validate: (value) => {
                        if (value === 'custom' && !customAmount) {
                          return 'Skriv inn beløp';
                        }
                        return true;
                      },
                    })}
                    value={isCustomAmount ? customAmount : selectedAmount}
                  />
                </div>

                {/* Donor Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                  <Input
                    label="Navn"
                    {...register('name', {
                      required: 'Navn er påkrevd',
                    })}
                    error={errors.name?.message}
                    placeholder="Ditt fulle navn"
                  />

                  <Input
                    label="E-post"
                    type="email"
                    {...register('email', {
                      required: 'E-post er påkrevd',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Ugyldig e-postadresse',
                      },
                    })}
                    error={errors.email?.message}
                    placeholder="din@epost.no"
                  />

                  <Input
                    label="Telefon (valgfritt)"
                    type="tel"
                    {...register('phone')}
                    placeholder="+47 123 45 678"
                  />

                  <div className="flex items-center space-x-3 pt-6">
                    <input
                      type="checkbox"
                      id="anonymous"
                      {...register('anonymous')}
                      className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <label htmlFor="anonymous" className="text-sm text-gray-700">
                      Jeg ønsker å donere anonymt
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="pt-6 border-t border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Melding (valgfritt)
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-y"
                    placeholder="Skriv en melding hvis du ønsker..."
                  />
                </div>

                {/* Payment Method Info */}
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <CreditCard className="w-5 h-5 text-emerald-900" />
                    <p className="font-medium text-emerald-900">Betalingsmetode</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Etter at du sender dette skjemaet, vil du bli omdirigert til vår sikre betalingsportal hvor du kan velge betalingsmetode (kort, Vipps, MobilePay).
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⟳</span>
                      Behandler...
                    </>
                  ) : (
                    <>
                      <Heart className="w-5 h-5 inline-block mr-2" />
                      Fortsett til betaling
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Ved å sende dette skjemaet godtar du våre vilkår og personvernbestemmelser.
                  Alle donasjoner er tryggt håndtert gjennom vår sikre betalingsportal.
                </p>
              </form>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
