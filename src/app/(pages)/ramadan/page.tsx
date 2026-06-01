import type { Metadata } from 'next';
import Image from 'next/image';
import { RamadanCountdown } from '@/components/features/RamadanCountdown';
import { RamadanCalendar } from '@/components/features/RamadanCalendar';
import { RamadanGuidelines } from '@/components/features/RamadanGuidelines';
import { RamadanEvents } from '@/components/features/RamadanEvents';
import { RAMADAN_CONFIG } from '@/lib/ramadanConfig';
import { Moon, Heart, BookOpen, Coins, Calendar } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StarDivider } from '@/components/ui/ornaments';

const R = RAMADAN_CONFIG;

export const metadata: Metadata = {
  title: `Ramadan ${R.year} – Kalender, Bønnetider og Taraweeh i Lillehammer`,
  description: `Ramadan ${R.year} starter ${R.startDate}. Se fastekalender, Isha kl. ${R.ishaTime}, Taraweeh-program, Laylatul Qadr og aktiviteter ved Lillehammer Moske.`,
  openGraph: {
    title: `Ramadan ${R.year} – Lillehammer Moske`,
    description: `Ramadan ${R.year} i Lillehammer: fastekalender, bønnetider, Taraweeh og fellesskap.`,
  },
  alternates: { canonical: 'https://lillehammermoske.no/ramadan/' },
};

const pillars = [
  { icon: Moon, title: 'Faste (Sawm)', text: 'Avstå fra mat og drikke fra daggry til solnedgang. En av islams fem søyler.' },
  { icon: BookOpen, title: 'Bønn & Quran', text: 'Økt tilbedelse, nattbønn (Taraweeh) og lesing av Quranen gjennom hele måneden.' },
  { icon: Heart, title: 'Veldedighet', text: 'Gi Zakat og Sadaqah. Profeten ﷺ var mest sjenerøs under Ramadan.' },
];

export default function RamadanPage() {
  return (
    <>
      <PageHero
        eyebrow={`Den hellige måneden · ${R.year}`}
        arabic="رَمَضَان"
        title={<>Ramadan <span className="text-gold-gradient">{R.year}</span></>}
        lead="Forbered deg på den mest velsignede måneden i året — en tid for faste, bønn, refleksjon og fellesskap."
        skyline
      >
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#D4AF37]/20 bg-white/[0.04] p-6 backdrop-blur-sm">
          <p className="font-arabic text-xl leading-[2] text-[#E9D08A] sm:text-2xl" dir="rtl">
            شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ
          </p>
          <p className="mt-4 text-sm italic leading-relaxed text-white/75">
            «Ramadan-måneden er den da Quranen ble sendt ned, som rettledning for menneskeheten.»
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[#E6C547]/80">Sūra al-Baqara 2:185</p>
        </div>
      </PageHero>

      {/* Isha & Taraweeh */}
      <Band tone="ink" glow size="md" continue>
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#D4AF37]/25 bg-white/[0.04] p-8 text-center backdrop-blur-sm sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-1.5">
            <Moon className="h-4 w-4 text-[#E6C547]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E6C547]">Isha og Taraweeh</span>
          </div>
          <h2 className="font-display mt-5 text-3xl font-semibold text-white sm:text-4xl">Isha-bønn kl. {R.ishaTime}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            Isha-bønn starter kl. {R.ishaTime} fra og med {R.ishaStartDate}, etterfulgt av Taraweeh.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {R.taraweehLeaders.map((leader) => (
              <div key={leader} className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                <p className="font-medium text-white">{leader}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-lg rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-3 text-sm text-[#E6C547]">
            Tidene kan endres underveis. Følg vår WhatsApp-gruppe for oppdatert informasjon.
          </p>
        </div>
      </Band>

      <RamadanCountdown />

      {/* What is Ramadan */}
      <Band tone="cream">
        <SectionHeading
          tone="cream"
          eyebrow="Om måneden"
          title="Hva er Ramadan?"
          lead="Ramadan er den islamske fastemåneden — måneårets niende måned. Friske voksne muslimer faster fra daggry til solnedgang, og øker bønn, Quran-lesing og veldedighet."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-6 text-center backdrop-blur-sm">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0c2a1a] text-[#E6C547]">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="font-display mt-4 text-lg font-semibold text-[#0c2a1a]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3a3a32]">{text}</p>
            </div>
          ))}
        </div>
      </Band>

      {/* When is Ramadan */}
      <Band tone="parchment">
        <SectionHeading tone="cream" eyebrow="Datoer" title={`Når er Ramadan ${R.year}?`} />
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-[#1B5E20]/10 bg-white/70 shadow-[0_24px_60px_-35px_rgba(12,42,26,0.4)] backdrop-blur-sm">
          <div className="bg-gradient-to-br from-[#0c2a1a] to-[#13391f] p-8 text-center text-white">
            <p className="text-sm text-white/70">1. Ramadan</p>
            <p className="font-display mt-1 text-3xl font-semibold text-white sm:text-4xl">{R.startDayOfWeek} {R.startDate}</p>
            <p className="mt-2 text-white/70">avsluttes <span className="font-semibold text-[#E6C547]">{R.endDate}</span></p>
          </div>
          <div className="p-8">
            <p className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/8 p-5 text-sm leading-relaxed text-[#3a3a32]">
              De nøyaktige datoene avhenger av måneobservasjoner. Fordi den islamske kalenderen følger
              månesyklusen, flytter Ramadan seg ca. ti dager hvert år.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-[#1B5E20]/10 p-5">
                <h4 className="font-display font-semibold text-[#0c2a1a]">Eid al-Fitr {R.year}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#3a3a32]">Markerer slutten på Ramadan, ved starten av måneden Shawwal. Nøyaktig tidspunkt avhenger av måneobservasjon.</p>
              </div>
              <div className="rounded-xl border border-[#1B5E20]/10 p-5">
                <h4 className="font-display font-semibold text-[#0c2a1a]">Laylatul Qadr</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#3a3a32]">Skjebnenatten — mer verdt enn tusen måneder. Søk den i de siste ti nettene, særlig oddetallsnettene ({R.laylatulQadrNights}).</p>
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* Laylatul Qadr quote */}
      <Band tone="ink" glow size="md">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-arabic text-2xl leading-[2.2] text-[#E9D08A] sm:text-3xl" dir="rtl">
            إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ
          </p>
          <div className="my-6"><StarDivider tone="gold" /></div>
          <p className="text-lg italic leading-relaxed text-white/80">
            «Vi har sendt den ned i Skjebnenatten. Hvordan kan du vite hva Skjebnenatten er?
            Skjebnenatten er mer verdt enn tusen måneder!»
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[#E6C547]/80">Sūra al-Qadr 97:1–3</p>
        </div>
      </Band>

      <RamadanCalendar />

      {/* Calendar poster */}
      <Band tone="cream" size="md">
        <SectionHeading tone="cream" eyebrow="Last ned" title={`Ramadan-kalender ${R.year}`} />
        <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-3xl border border-[#1B5E20]/10 shadow-[0_24px_60px_-35px_rgba(12,42,26,0.4)]">
          <Image src={R.kalenderBilde} alt={R.kalenderBildeAlt} width={700} height={990} className="h-auto w-full" priority />
        </div>
      </Band>

      <RamadanGuidelines />

      {/* Hadith */}
      <Band tone="ink" size="md">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl italic leading-relaxed text-white/85">
            «Den som gir mat til en som faster, vil ha samme belønning som den fastende — uten at
            den fastendes belønning minker.»
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.28em] text-[#E6C547]/80">Al-Tirmidhi</p>
        </div>
      </Band>

      {/* Zakat & Sadaqah */}
      <Band tone="cream">
        <SectionHeading
          tone="cream"
          eyebrow="Veldedighet"
          title="Zakat & Sadaqah"
          lead="Profeten ﷺ var den mest sjenerøse av mennesker, og mest sjenerøs under Ramadan."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#0c2a1a] to-[#13391f] p-8 text-white">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#E6C547]">
              <Coins className="h-6 w-6" />
            </span>
            <h3 className="font-display mt-5 text-2xl font-semibold text-white">Zakat</h3>
            <p className="mt-3 leading-relaxed text-white/80">
              Obligatorisk veldedighet for de som oppfyller formueskriteriene — 2,5 % av oppspart
              formue. Zakat har makt til å bekjempe fattigdom.
            </p>
          </div>
          <div className="rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#E6C547] to-[#B8941F] p-8 text-[#0c2a1a]">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/30">
              <Heart className="h-6 w-6" />
            </span>
            <h3 className="font-display mt-5 text-2xl font-semibold">Sadaqah</h3>
            <p className="mt-3 leading-relaxed text-[#0c2a1a]/85">
              Frivillig veldedighet som kan gis når som helst, i hvilken som helst mengde. Profeten ﷺ
              økte sin sadaqah særlig under Ramadan.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 grid max-w-4xl gap-5 sm:grid-cols-3">
          {[
            { title: 'Fitrana', text: 'Obligatorisk almisse betalt før Eid-bønnen. Renser fasten og gir mat til trengende.' },
            { title: 'Fidya', text: 'Kompensasjon for de som ikke kan faste av gyldig grunn og ikke kan ta igjen dagene.' },
            { title: 'Kaffarah', text: 'Kompensasjon for å bryte fasten uten gyldig grunn — faste 60 dager eller mate 60 fattige.' },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-[#1B5E20]/10 bg-white/70 p-6 text-center backdrop-blur-sm">
              <h4 className="font-display font-semibold text-[#0c2a1a]">{c.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#3a3a32]">{c.text}</p>
            </div>
          ))}
        </div>
      </Band>

      <RamadanEvents />

      {/* Final CTA */}
      <Band tone="ink" glow>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-arabic text-4xl text-[#E9D08A]" dir="rtl">رَمَضَان كَرِيم</p>
          <div className="my-6"><StarDivider tone="gold" /></div>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Ramadan Kareem</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Må Allah akseptere vår faste, våre bønner og gode gjerninger i denne velsignede måneden.
          </p>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#D4AF37]/20 bg-white/[0.04] p-6 backdrop-blur-sm">
            <p className="text-lg italic leading-relaxed text-white/80">
              «Alle handlingene til Adams barn er for dem, bortsett fra fasten. Den er for Meg, og
              Jeg alene vil belønne for den.»
            </p>
            <p className="mt-3 flex items-center justify-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-[#E6C547]" />
              <span className="uppercase tracking-[0.24em] text-[#E6C547]/80">Hadith Qudsi · Bukhari</span>
            </p>
          </div>
        </div>
      </Band>
    </>
  );
}
