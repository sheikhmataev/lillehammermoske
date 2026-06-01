'use client';

import { useState } from 'react';
import { DonateHero } from '@/components/features/DonateHero';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StarDivider } from '@/components/ui/ornaments';
import { Smartphone, Building2, Copy, Check } from 'lucide-react';

export default function DonatePage() {
  const [copiedVipps, setCopiedVipps] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  const copyToClipboard = async (text: string, type: 'vipps' | 'bank') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'vipps') {
        setCopiedVipps(true);
        setTimeout(() => setCopiedVipps(false), 2000);
      } else {
        setCopiedBank(true);
        setTimeout(() => setCopiedBank(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <DonateHero />

      {/* Donation methods */}
      <Band tone="cream">
        <SectionHeading
          tone="cream"
          eyebrow="Slik bidrar du"
          arabic="الصدقة"
          title="Støtt Lillehammer Moske"
          lead="Din donasjon holder moskéen i drift, støtter undervisningen og styrker fellesskapet."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Vipps */}
          <div className="rounded-3xl border border-[#1B5E20]/10 bg-white/70 p-8 backdrop-blur-sm">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5B24] shadow-sm">
              <Smartphone className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-[#0c2a1a]">Vipps</h3>
            <p className="mt-2 leading-relaxed text-[#3a3a32]">
              Send donasjon enkelt via Vipps — søk etter nummeret eller bruk knappen.
            </p>
            <div className="mt-6 rounded-2xl border border-[#1B5E20]/10 bg-[#f4eddc]/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#9A7A15]">Vipps-nummer</p>
              <button
                onClick={() => copyToClipboard('503175', 'vipps')}
                className="group relative -m-2 mt-1 w-full rounded-lg p-2 text-left transition-colors hover:bg-white/70"
              >
                <p className="font-display text-3xl font-semibold text-[#0c2a1a]">503175</p>
                <span className="absolute right-2 top-3">
                  {copiedVipps ? <Check className="h-5 w-5 text-[#1B5E20]" /> : <Copy className="h-5 w-5 text-[#9A7A15]" />}
                </span>
              </button>
              <a
                href="https://qr.vipps.no/28/2/05/031/4p3k_Hf7g"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full rounded-xl bg-[#FF5B24] py-3 text-center font-semibold text-white transition-colors hover:bg-[#E54A1F]"
              >
                Doner med Vipps
              </a>
            </div>
          </div>

          {/* Bank */}
          <div className="rounded-3xl border border-[#1B5E20]/10 bg-white/70 p-8 backdrop-blur-sm">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0c2a1a] shadow-sm">
              <Building2 className="h-7 w-7 text-[#E6C547]" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-[#0c2a1a]">Bankoverføring</h3>
            <p className="mt-2 leading-relaxed text-[#3a3a32]">Overfør direkte til vår bankkonto.</p>
            <div className="mt-6 space-y-4 rounded-2xl border border-[#1B5E20]/10 bg-[#f4eddc]/60 p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#9A7A15]">Kontonummer</p>
                <button
                  onClick={() => copyToClipboard('05394493661', 'bank')}
                  className="group relative -m-2 mt-1 w-full rounded-lg p-2 text-left transition-colors hover:bg-white/70"
                >
                  <p className="font-display text-2xl font-semibold text-[#0c2a1a]">0539 44 93661</p>
                  <span className="absolute right-2 top-3">
                    {copiedBank ? <Check className="h-5 w-5 text-[#1B5E20]" /> : <Copy className="h-5 w-5 text-[#9A7A15]" />}
                  </span>
                </button>
              </div>
              <div className="border-t border-[#1B5E20]/10 pt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#9A7A15]">Org.nr</p>
                <p className="font-display text-xl font-semibold text-[#0c2a1a]">988 588 660</p>
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* Jazak Allah */}
      <Band tone="ink" glow>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-arabic text-4xl leading-[1.8] text-[#E9D08A]" dir="rtl">
            جَزَاكُمُ اللَّهُ خَيْرًا
          </p>
          <div className="my-6">
            <StarDivider tone="gold" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Jazak Allahu Khairan</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Måtte Allah belønne deg for din generøsitet. Hver donasjon — uansett størrelse — gjør
            en forskjell for fellesskapet vårt.
          </p>
        </div>
      </Band>
    </>
  );
}
