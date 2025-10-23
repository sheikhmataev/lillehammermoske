import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Moon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container-custom">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Lillehammer Moske</h3>
                <p className="text-sm text-gray-300">The Muslim Cultural Center</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Et fellesskap for muslimer i Lillehammer og omegn. Vi jobber for å styrke det muslimske fellesskapet og fremme forståelse mellom kulturer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hurtiglenker</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  Om Oss
                </Link>
              </li>
              <li>
                <Link href="/prayer-times" className="text-gray-300 hover:text-white transition-colors">
                  Bønnetider
                </Link>
              </li>
              <li>
                <Link href="/ramadan" className="text-gray-300 hover:text-white transition-colors">
                  Ramadan
                </Link>
              </li>
              <li>
                <Link href="/quran-school" className="text-gray-300 hover:text-white transition-colors">
                  Quranskole
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Bankgata 12<br />
                    2609 Lillehammer
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Se mobilnummer</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@lillehammermoske.no</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Åpningstider</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Daglig: 05:00 - 22:00</p>
                  <p className="text-gray-400 text-xs">Bønnetider varierer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 The Muslim Cultural Center Lillehammer. Alle rettigheter forbeholdt.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Personvern
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Vilkår
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
