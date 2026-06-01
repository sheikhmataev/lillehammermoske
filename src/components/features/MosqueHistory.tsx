import { Calendar, Users, Building, Award } from 'lucide-react';
import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';

const timeline = [
  {
    year: '1998',
    icon: Calendar,
    title: 'Moskéen etablert',
    text: 'The Muslim Cultural Center Lillehammer ble etablert med 150 medlemmer. Vi startet i enkle lokaler, men med et sterkt ønske om et permanent samlingspunkt for muslimer i Lillehammer og Gudbrandsdalen.',
  },
  {
    year: '2015',
    icon: Building,
    title: 'Brannsikkerhetskrise',
    text: 'Etter 17 år på Bliksethjørnet ble moskéen stengt av kommunen på grunn av brannsikkerhet. Plutselig sto 750 medlemmer uten et sted å samles — og kampen for nye lokaler begynte.',
  },
  {
    year: '2016',
    icon: Users,
    title: 'Søk etter nye lokaler',
    text: 'Vi søkte intensivt etter egnede lokaler sentralt i Lillehammer, og startet samtidig arbeidet med å reise kapital for å bygge egen moské på sikt.',
  },
  {
    year: '2020',
    icon: Award,
    title: 'Digital utvikling',
    text: '2020 var tøft — alle var hjemme. Vi lærte oss Zoom, lagde videoer og sendte daglige oppdateringer. Det som startet som nødvendighet ble en del av hvem vi er i dag.',
  },
  {
    year: '2026',
    icon: Calendar,
    title: 'Moderne nettside',
    text: 'Nå har vi endelig et sted hvor alt finnes — bønnetider, arrangementer og påmelding. Vi håper du liker den. 🤲',
  },
];

const stats = [
  { value: '25+', label: 'År i fellesskapet' },
  { value: '750+', label: 'Medlemmer i Lillehammer' },
  { value: '700+', label: 'Medlemmer i Innlandet' },
  { value: '100+', label: 'Fredagsbønn-gjester' },
];

export function MosqueHistory() {
  return (
    <Band tone="ink" glow>
      <SectionHeading
        tone="ink"
        eyebrow="Reisen vår"
        arabic="تاريخنا"
        title="Vår historie"
        lead="Fra et lite fellesskap i 1998 til den største moskéen i Innlandet."
      />

      <div className="mx-auto mt-14 max-w-3xl">
        <ol className="relative space-y-8 border-l border-[#D4AF37]/25 pl-8">
          {timeline.map(({ year, icon: Icon, title, text }) => (
            <li key={year} className="relative">
              <span className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full bg-[#0c2a1a] text-[#E6C547] ring-2 ring-[#D4AF37]/40">
                <Icon className="h-4 w-4" />
              </span>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <span className="font-display text-2xl font-semibold text-[#E6C547]">{year}</span>
                <h3 className="font-display mt-1 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 leading-relaxed text-white/70">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] p-8 backdrop-blur-sm">
        <h3 className="font-display text-center text-2xl font-semibold text-white">Våre tall</h3>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-semibold text-[#E6C547]">{s.value}</div>
              <div className="mt-1 text-sm text-white/65">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm italic text-white/55">
          Fra 150 medlemmer i 1998 til over 750 i dag — den største moskéen i Innlandet.
        </p>
      </div>
    </Band>
  );
}
