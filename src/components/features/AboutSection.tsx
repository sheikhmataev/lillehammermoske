import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';
import { Band } from '@/components/ui/Band';
import { EightPointStar } from '@/components/ui/ornaments';
import { config } from '@/lib/config';

const stats = [
  { value: '19+', label: 'År i fellesskapet' },
  { value: '750+', label: 'Medlemmer' },
  { value: '5', label: 'Daglige bønner' },
  { value: '24/7', label: 'Åpent i Ramadan' },
];

export function AboutSection() {
  return (
    <Band tone="cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9A7A15]">
              Om oss
            </span>
            <span className="h-px w-10 bg-[#D4AF37]/70" />
          </div>
          <p className="mt-4 font-arabic text-3xl text-[#1B5E20]" dir="rtl">
            من نحن
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-[#0c2a1a] sm:text-4xl md:text-5xl">
            Et fellesskap siden 2005
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#3a3a32] sm:text-lg">
            The Muslim Cultural Center Lillehammer har vært en del av det muslimske
            fellesskapet i Lillehammer siden 2005. Vi startet smått, men har vokst til å bli
            den største moskéen i Innlandet.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#3a3a32]">
            Senteret tilbyr bønn, religiøs utdanning og fellesskap for muslimske familier i
            Lillehammer og omegn. Er du ny i området? Kom innom og si hei — vi hjelper deg
            gjerne.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-4 text-center backdrop-blur-sm"
              >
                <div className="font-display text-3xl font-semibold text-[#0c2a1a]">{s.value}</div>
                <div className="mt-1 text-xs font-medium text-[#3a3a32]/70">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0c2a1a] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#13391f]"
            >
              Lær mer om oss
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0c2a1a]/20 px-6 py-3 font-semibold text-[#0c2a1a] transition-colors hover:border-[#0c2a1a] hover:bg-[#0c2a1a] hover:text-white"
            >
              Kontakt oss
            </Link>
          </div>
        </div>

        {/* Images */}
        <div className="space-y-5">
          {[
            { src: '/assets/images/mosque/inside_image.png', title: 'Vakkert bønnerom', sub: 'Fredfulle omgivelser for bønn og ettertanke' },
            { src: '/assets/images/mosque/inside2.png', title: 'Fellesskapsområder', sub: 'Møteplasser for sosiale og kulturelle aktiviteter' },
          ].map((img) => (
            <div
              key={img.src}
              className="group relative overflow-hidden rounded-3xl border border-[#1B5E20]/10 shadow-[0_24px_60px_-30px_rgba(12,42,26,0.5)]"
            >
              <Image
                src={img.src}
                alt={img.title}
                width={800}
                height={560}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06150d]/85 via-[#06150d]/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-2 text-[#E6C547]">
                  <EightPointStar className="h-3.5 w-3.5" />
                  <h3 className="font-display text-xl font-semibold text-white">{img.title}</h3>
                </div>
                <p className="mt-1 text-sm text-white/75">{img.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visit card */}
      <div className="mx-auto mt-14 max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#0c2a1a] via-[#13391f] to-[#0c2a1a] p-8 text-white shadow-[0_30px_70px_-35px_rgba(12,42,26,0.6)] sm:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">Besøk oss</h3>
              <div className="mt-5 flex items-start gap-4">
                <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#E6C547]">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-white">Bankgata 12</p>
                  <p className="text-white/75">2609 Lillehammer, Norge</p>
                </div>
              </div>
              <p className="mt-4 text-white/70">
                Vi ligger sentralt i Lillehammer, lett tilgjengelig med bil og kollektivtransport.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="font-display text-lg font-semibold text-white">Åpningstider</h4>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2.5">
                  <dt className="text-white/75">Mandag – søndag</dt>
                  <dd className="font-semibold text-white">05:00 – 22:00</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2.5">
                  <dt className="text-white/75">Jummah (fredag)</dt>
                  <dd className="font-semibold text-[#E6C547]">
                    Khutbah {config.jummah.khutbah} · Jamat {config.jummah.jamat}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-white/75">Ramadan</dt>
                  <dd className="font-semibold text-white">24/7</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Band>
  );
}
