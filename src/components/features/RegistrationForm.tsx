'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { BookOpen, CheckCircle, AlertCircle } from 'lucide-react';

interface RegistrationFormData {
  studentName: string;
  studentAge: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  preferredClass: string;
  previousExperience: string;
  specialNeeds?: string;
  motivation: string;
  emergencyContact: string;
  emergencyPhone: string;
  notes?: string;
}

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationFormData>();

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    // TODO: Replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    setTimeout(() => setIsSubmitted(false), 7000);
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
        <div className="container-custom">
          <Card className="max-w-2xl mx-auto text-center bg-emerald-50 border-emerald-200">
            <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">
              Takk for påmeldingen!
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Vi har mottatt din påmelding og vil kontakte deg innen 2-3 virkedager for å bekrefte plassen.
            </p>
            <p className="text-gray-600 mb-6">
              Sjekk e-posten din – vi sender deg all informasjon du trenger der.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
            >
              Send en ny påmelding
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <BookOpen className="w-12 h-12 text-emerald-900 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
              Påmelding til Quranskole
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Fyll ut skjemaet under for å melde deg eller ditt barn på våre klasser.
            </p>
            <p className="text-sm text-gray-500">
              Det tar bare et par minutter! Hvis du har spørsmål, kan du også ringe eller sende oss en e-post.
            </p>
          </div>

          <Card>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-900 font-medium mb-1">Viktig informasjon</p>
                  <p className="text-sm text-blue-800">
                    For barn under 18 år må foresatte fylle ut skjemaet. For voksne kan du fylle ut selv.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Student Information */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                  Informasjon om eleven
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Elevens navn"
                    {...register('studentName', {
                      required: 'Dette feltet er påkrevd',
                    })}
                    error={errors.studentName?.message}
                    placeholder="Fornavn og etternavn"
                  />

                  <Input
                    label="Alder"
                    type="number"
                    min="4"
                    max="99"
                    {...register('studentAge', {
                      required: 'Alder er påkrevd',
                    })}
                    error={errors.studentAge?.message}
                    placeholder="f.eks. 8"
                  />
                </div>
              </div>

              {/* Parent/Guardian Information */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                  Informasjon om foresatt (hvis barn)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Ditt navn"
                    {...register('parentName', {
                      required: 'Dette feltet er påkrevd',
                    })}
                    error={errors.parentName?.message}
                    placeholder="Hvis det er deg selv som melder deg på, skriv ditt navn"
                  />

                  <Input
                    label="E-post"
                    type="email"
                    {...register('parentEmail', {
                      required: 'E-post er påkrevd',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Ugyldig e-postadresse',
                      },
                    })}
                    error={errors.parentEmail?.message}
                    placeholder="din@epost.no"
                  />

                  <Input
                    label="Telefon"
                    type="tel"
                    {...register('parentPhone', {
                      required: 'Telefon er påkrevd',
                    })}
                    error={errors.parentPhone?.message}
                    placeholder="+47 123 45 678"
                  />
                </div>
              </div>

              {/* Class Selection */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                  Klassvalg
                </h3>
                <Select
                  label="Ønsket klasse"
                  {...register('preferredClass', {
                    required: 'Velg en klasse',
                  })}
                  error={errors.preferredClass?.message}
                  options={[
                    { value: '', label: 'Velg klasse...' },
                    { value: 'grunnkurs-barn', label: 'Grunnkurs for Barn (6-10 år)' },
                    { value: 'avansert-barn', label: 'Avansert for Barn (11-15 år)' },
                    { value: 'voksen-begynnere', label: 'Voksenklasse - Begynnere' },
                    { value: 'tajweed', label: 'Tajweed & Koranrecitasjon' },
                    { value: 'arabisk', label: 'Arabisk Språk' },
                    { value: 'privat', label: 'Ett-til-ett Privatundervisning' },
                  ]}
                />

                <Select
                  label="Tidligere erfaring"
                  {...register('previousExperience', {
                    required: 'Dette feltet er påkrevd',
                  })}
                  error={errors.previousExperience?.message}
                  options={[
                    { value: '', label: 'Velg...' },
                    { value: 'none', label: 'Ingen erfaring - helt nybegynner' },
                    { value: 'some', label: 'Litt erfaring - har lest litt arabisk før' },
                    { value: 'good', label: 'God erfaring - kan lese arabisk' },
                    { value: 'advanced', label: 'Avansert - ønsker å forbedre tekniske ferdigheter' },
                  ]}
                  className="mt-4"
                />
              </div>

              {/* Additional Information */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                  Tilleggsinformasjon
                </h3>
                <Textarea
                  label="Hvorfor ønsker du/eleven å gå på Quranskole? (valgfritt)"
                  {...register('motivation')}
                  placeholder="Del gjerne hva som inspirerer deg..."
                  rows={4}
                />

                <Input
                  label="Spesielle behov eller henvendelser (valgfritt)"
                  {...register('specialNeeds')}
                  placeholder="F.eks. lærevansker, fysiske behov, osv."
                  className="mt-4"
                  helperText="Vi gjør vårt beste for å tilpasse oss alle!"
                />
              </div>

              {/* Emergency Contact */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                  Nødskontakt
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Navn på nødskontakt"
                    {...register('emergencyContact', {
                      required: 'Dette feltet er påkrevd',
                    })}
                    error={errors.emergencyContact?.message}
                    placeholder="Navn på nær familiemedlem"
                  />

                  <Input
                    label="Telefon til nødskontakt"
                    type="tel"
                    {...register('emergencyPhone', {
                      required: 'Telefon er påkrevd',
                    })}
                    error={errors.emergencyPhone?.message}
                    placeholder="+47 123 45 678"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <Textarea
                  label="Andre notater eller spørsmål (valgfritt)"
                  {...register('notes')}
                  placeholder="Har du noe mer du vil si? Vi leser alt!"
                  rows={3}
                />
              </div>

              {/* Submit */}
              <div className="pt-6 border-t border-gray-200">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⟳</span>
                      Sender...
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-5 h-5 inline-block mr-2" />
                      Send påmelding
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-gray-500 mt-4">
                  Ved å sende dette skjemaet samtykker du til at vi behandler personopplysningene i henhold til våre personvernbestemmelser.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
