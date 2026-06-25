import Link from 'next/link';
import Image from 'next/image';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mash-credit': React.HTMLAttributes<HTMLElement> & { lang?: string; variant?: string; services?: string; location?: string; org?: string; accent?: string; label?: string; href?: string; theme?: string };
    }
  }
}
import { MapPin, Mail, Clock, MessageCircle, Building2 } from 'lucide-react';
import { config } from '@/lib/config';
import { PatternOverlay, StarDivider } from '@/components/ui/ornaments';

const quickLinks = [
  { name: 'Hjem', href: '/' },
  { name: 'Om oss', href: '/about' },
  { name: 'Bønnetider', href: '/prayer-times' },
  { name: 'Ramadan', href: '/ramadan' },
  { name: 'Quranskole', href: '/quran-school' },
  { name: 'Medlemskap', href: '/membership' },
  { name: 'Styret', href: '/board' },
];

export function Footer() {
  return (
    <footer className="band band-ink isolate">
      <PatternOverlay tone="gold" opacity={0.05} />
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="container-custom relative px-4">
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white/95 p-1">
                <Image src="/assets/logos/logo.png" alt="Lillehammer Moske" width={40} height={40} className="h-full w-full object-contain" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">Lillehammer Moske</h3>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#E6C547]/80">The Muslim Cultural Center</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/65">
              Et fellesskap for muslimer i Lillehammer og omegn siden 2005. Vi jobber for å
              styrke fellesskapet og fremme forståelse mellom kulturer.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/55">
              <Building2 className="h-4 w-4 text-[#E6C547]" />
              <span>Org.nr: 988 588 660</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-base font-semibold text-[#E6C547]">Hurtiglenker</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-[#E6C547]">Kontakt</h4>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#E6C547]" />
                <p className="text-white/65">Bankgata 12<br />2609 Lillehammer</p>
              </div>
              <a href="mailto:info@lillehammermoske.no" className="flex items-center gap-3 text-white/65 transition-colors hover:text-white">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#E6C547]" />
                info@lillehammermoske.no
              </a>
              <a href={config.social.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/65 transition-colors hover:text-white">
                <MessageCircle className="h-5 w-5 flex-shrink-0 text-[#25D366]" />
                WhatsApp-gruppe
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-base font-semibold text-[#E6C547]">Åpningstider</h4>
            <div className="mt-4 flex items-start gap-3 text-sm">
              <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#E6C547]" />
              <div className="text-white/65">
                <p>Daglig: 05:00 – 22:00</p>
                <p className="text-xs text-white/45">Bønnetider varierer</p>
                <p className="mt-2">Jummah: Khutbah {config.jummah.khutbah}</p>
              </div>
            </div>
          </div>
        </div>

        <StarDivider tone="gold" className="max-w-md" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-7 md:flex-row">
          <p className="text-sm text-white/55">
            © {new Date().getFullYear()} The Muslim Cultural Center Lillehammer.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="text-sm text-white/55 transition-colors hover:text-white">Personvern</Link>
            <Link href="/terms" className="text-sm text-white/55 transition-colors hover:text-white">Vilkår</Link>
            <Link href="/donate" className="text-sm text-white/55 transition-colors hover:text-white">Donasjoner</Link>
            <a href="https://forms.gle/TyJDF2t7fZAhrEiB6" target="_blank" rel="noopener noreferrer" className="text-sm text-white/55 transition-colors hover:text-white">Utmelding</a>
          </div>
        </div>
        <div className="pb-4">
          <mash-credit lang="nb" services="Digitalisation · AI · Automation" />
        </div>
      </div>
    </footer>
  );
}
