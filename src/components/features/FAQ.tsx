'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { config } from '@/lib/config';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'prayer' | 'education' | 'visiting' | 'donation';
}

const faqItems: FAQItem[] = [
  {
    question: 'Når er moskéen åpen?',
    answer: 'Moskéen er åpen daglig fra 05:00 til 22:00. Bønnetider varierer gjennom året. Under Ramadan er moskéen tilgjengelig 24/7.',
    category: 'general',
  },
  {
    question: 'Hvor finner jeg bønnetider?',
    answer: 'Du finner bønnetider under «Bønnetider» på nettsiden. Tidene oppdateres automatisk hver dag basert på vår lokasjon i Lillehammer.',
    category: 'prayer',
  },
  {
    question: 'Kan ikke-muslimer besøke moskéen?',
    answer: 'Ja, alle er velkomne. Vi anbefaler å kontakte oss på forhånd for organiserte omvisninger, spesielt for grupper eller skoler.',
    category: 'visiting',
  },
  {
    question: 'Hvordan melder jeg meg på Quranskolen?',
    answer: 'Du kan melde deg på via «Quranskole» på nettsiden, eller kontakte oss direkte. Vi har klasser for både barn og voksne.',
    category: 'education',
  },
  {
    question: 'Hvordan kan jeg donere til moskéen?',
    answer: 'Du kan donere via Vipps eller bankoverføring. Se «Doner»-siden for nummer og kontonummer. Alle bidrag er velkomne.',
    category: 'donation',
  },
  {
    question: 'Når er Jummah-bønnen?',
    answer: `Jummah khutbah starter kl. ${config.jummah.khutbah} og jamat (bønn) kl. ${config.jummah.jamat} hver fredag. Kom gjerne litt i forveien.`,
    category: 'prayer',
  },
  {
    question: 'Tilbyr dere undervisning for voksne?',
    answer: 'Ja, vi tilbyr både Quranskole og religiøs undervisning for voksne. Kontakt oss for klassetider og innhold.',
    category: 'education',
  },
  {
    question: 'Hvor kan jeg parkere?',
    answer: 'Det finnes parkering i nærheten av moskéen. Vi anbefaler kollektivtransport når det er mulig — bussholdeplassen «Bankgata» ligger 2 minutters gange unna.',
    category: 'visiting',
  },
  {
    question: 'Hvordan brukes donasjoner?',
    answer: 'Donasjoner går til drift av moskéen, undervisning, arrangementer og fellesskapsarbeid. Vi er åpne om økonomien vår.',
    category: 'donation',
  },
];

const categoryLabels: Record<string, string> = {
  all: 'Alle',
  general: 'Generelt',
  prayer: 'Bønn',
  education: 'Utdanning',
  visiting: 'Besøk',
  donation: 'Donasjon',
};

export function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | FAQItem['category']>('all');

  const filtered = selectedCategory === 'all' ? faqItems : faqItems.filter((i) => i.category === selectedCategory);
  const categories = ['all', 'general', 'prayer', 'education', 'visiting', 'donation'] as const;

  return (
    <section className="band band-ink isolate py-20 sm:py-28" id="faq">
      <div className="container-custom relative px-4">
        <SectionHeading
          tone="ink"
          eyebrow="Spørsmål & svar"
          arabic="أسئلة شائعة"
          title="Ofte stilte spørsmål"
          lead="Svar på det folk oftest lurer på om moskéen, bønn og aktiviteter."
        />

        {/* Category chips */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {categories.map((key) => {
            const active = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedCategory(key);
                  setOpenKey(null);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-[#D4AF37] text-[#0c2a1a]'
                    : 'border border-white/15 bg-white/5 text-white/75 hover:bg-white/10'
                }`}
              >
                {categoryLabels[key]}
              </button>
            );
          })}
        </div>

        {/* Items */}
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {filtered.map((item) => {
            const key = item.question;
            const isOpen = openKey === key;
            return (
              <div key={key} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <button
                  onClick={() => setOpenKey(isOpen ? null : key)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/[0.04]"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="hidden rounded-full bg-[#D4AF37]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#E6C547] sm:inline">
                      {categoryLabels[item.category]}
                    </span>
                    <span className="font-medium text-white">{item.question}</span>
                  </span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 text-[#E6C547] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="border-t border-white/10 px-5 py-4 leading-relaxed text-white/70">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-[#D4AF37]/25 bg-white/[0.03] p-8 text-center backdrop-blur-sm">
          <h3 className="font-display text-2xl font-semibold text-white">Har du flere spørsmål?</h3>
          <p className="mt-2 text-white/70">Vi hjelper deg gjerne med det som ikke er besvart her.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/contact#form" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#E6C547] to-[#B8941F] px-6 py-3 font-semibold text-[#0c2a1a] transition-transform hover:-translate-y-0.5">
              Send en melding
            </a>
            <a href={config.social.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Spør på WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
