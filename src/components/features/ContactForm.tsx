'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Mail, Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredContact: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // TODO: Replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="rounded-3xl border border-[#1B5E20]/10 bg-white/80 p-8 shadow-[0_24px_60px_-35px_rgba(12,42,26,0.4)] backdrop-blur-sm">
      <div className="mb-6 flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0c2a1a] text-[#E6C547]">
          <Mail className="h-5 w-5" />
        </span>
        <h3 className="font-display text-2xl font-semibold text-[#0c2a1a]">Send oss en melding</h3>
      </div>

      {isSubmitted ? (
        <div className="animate-fade-in rounded-2xl border border-[#1B5E20]/20 bg-[#D4AF37]/10 p-6 text-center">
          <CheckCircle className="mx-auto mb-4 h-12 w-12 text-[#1B5E20]" />
          <h4 className="font-display text-xl font-semibold text-[#0c2a1a]">
            Takk for din henvendelse!
          </h4>
          <p className="mt-2 text-[#3a3a32]">
            Vi svarer deg så snart som mulig — vanligvis innen 1–2 virkedager.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Navn"
              {...register('name', {
                required: 'Navn er påkrevd',
                minLength: {
                  value: 2,
                  message: 'Navn må være minst 2 tegn',
                },
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Telefon (valgfritt)"
              type="tel"
              {...register('phone')}
              placeholder="+47 123 45 678"
              helperText="Vi kontakter deg kun hvis du ber om det"
            />

            <Select
              label="Emne"
              {...register('subject', {
                required: 'Emne er påkrevd',
              })}
              error={errors.subject?.message}
              options={[
                { value: '', label: 'Velg emne' },
                { value: 'general', label: 'Generelt spørsmål' },
                { value: 'prayer', label: 'Bønnetider' },
                { value: 'education', label: 'Quranskole / Utdanning' },
                { value: 'ramadan', label: 'Ramadan' },
                { value: 'donation', label: 'Donasjon' },
                { value: 'visit', label: 'Besøk moskeen' },
                { value: 'other', label: 'Annet' },
              ]}
            />
          </div>

          <Select
            label="Foretrukket kontaktmetode"
            {...register('preferredContact', {
              required: 'Kontaktmetode er påkrevd',
            })}
            error={errors.preferredContact?.message}
            options={[
              { value: 'email', label: 'E-post' },
              { value: 'phone', label: 'Telefon' },
              { value: 'whatsapp', label: 'WhatsApp' },
              { value: 'no-preference', label: 'Ingen preferanse' },
            ]}
          />

          <Textarea
            label="Melding"
            {...register('message', {
              required: 'Melding er påkrevd',
              minLength: {
                value: 10,
                message: 'Meldingen må være minst 10 tegn',
              },
            })}
            error={errors.message?.message}
            placeholder="Skriv din melding her..."
            rows={6}
          />

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
                <Send className="w-5 h-5 inline-block mr-2" />
                Send melding
              </>
            )}
          </Button>

          <p className="text-sm text-gray-500">
            Ved å sende denne meldingen godtar du at vi behandler personopplysningene dine i henhold til våre personvernbestemmelser.
          </p>
        </form>
      )}
    </div>
  );
}
