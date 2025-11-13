import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Moon, Facebook, Instagram, Youtube, MessageCircle, Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container-custom">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Lillehammer Moske</h3>
                <p className="text-sm text-gray-300">The Muslim Cultural Center</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Et fellesskap for muslimer i Lillehammer og omegn siden 2005. Vi jobber for å styrke det muslimske fellesskapet og fremme forståelse mellom kulturer.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Building2 className="w-4 h-4 text-gold-500" />
              <span>Org.nr: 988 588 660</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-500">Hurtiglenker</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Hjem
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Om Oss
                </Link>
              </li>
              <li>
                <Link href="/prayer-times" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Bønnetider
                </Link>
              </li>
              <li>
                <Link href="/ramadan" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Ramadan
                </Link>
              </li>
              <li>
                <Link href="/quran-school" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Quranskole
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Medlemskap
                </Link>
              </li>
              <li>
                <Link href="/board" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Styret
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-500">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Bankgata 12<br />
                    2609 Lillehammer<br />
                    Norge
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="tel:+47XXXXXXXXX" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Se telefonnummer
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@lillehammermoske.no" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@lillehammermoske.no
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="https://wa.me/47XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-500">Åpningstider</h4>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Daglig: 05:00 - 22:00</p>
                  <p className="text-gray-400 text-xs">Bønnetider varierer</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-500">Følg oss</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} The Muslim Cultural Center Lillehammer. Alle rettigheter forbeholdt.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Personvern
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Vilkår
              </Link>
              <Link href="/donate" className="text-gray-300 hover:text-white text-sm transition-colors">
                Donasjoner
              </Link>
              <a 
                href="https://forms.gle/TyJDF2t7fZAhrEiB6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Utmelding
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
