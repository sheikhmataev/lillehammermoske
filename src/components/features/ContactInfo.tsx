import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageCircle, Building2, Users } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { config } from '@/lib/config';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center space-x-3">
          <Building2 className="w-7 h-7" />
          <span>Kontaktinformasjon</span>
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Vi er her for å hjelpe deg. Kontakt oss via telefon, e-post, eller besøk oss ved moskeen.
        </p>
      </div>

      {/* Contact Details Card */}
      <Card variant="elevated">
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start space-x-4 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-emerald-900" />
            </div>
            <div>
              <h4 className="font-bold text-emerald-900 mb-2">Adresse</h4>
              <p className="text-gray-700 leading-relaxed mb-2">
                Bankgata 12<br />
                2609 Lillehammer<br />
                Norge
              </p>
              <Link
                href="https://maps.google.com/?q=Bankgata+12,+2609+Lillehammer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-900 hover:text-emerald-800 text-sm font-semibold inline-flex items-center space-x-1 transition-colors"
              >
                <span>Se på kart</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-emerald-900" />
            </div>
            <div>
              <h4 className="font-bold text-emerald-900 mb-2">Telefon</h4>
              <a
                href="tel:+4790083159"
                className="text-gray-700 hover:text-emerald-900 transition-colors font-medium block mb-2"
              >
                Se telefonnummer
              </a>
              <p className="text-sm text-gray-500">
                Mandag - Søndag: 09:00 - 18:00
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-emerald-900" />
            </div>
            <div>
              <h4 className="font-bold text-emerald-900 mb-2">E-post</h4>
              <a
                href="mailto:info@lillehammermoske.no"
                className="text-gray-700 hover:text-emerald-900 transition-colors font-medium block mb-2 break-all"
              >
                info@lillehammermoske.no
              </a>
              <p className="text-sm text-gray-500">
                Vi svarer innen 1-2 virkedager
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-emerald-900" />
            </div>
            <div>
              <h4 className="font-bold text-emerald-900 mb-2">WhatsApp</h4>
              <a
                href="https://wa.me/4790083159"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-emerald-900 transition-colors font-medium block mb-2"
              >
                Send melding på WhatsApp
              </a>
              <p className="text-sm text-gray-500">
                Rask respons på meldinger
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Opening Hours Card */}
      <Card variant="elevated">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-gold-900" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-emerald-900 mb-5">Åpningstider</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                <span className="text-gray-700 font-medium">Mandag - Søndag</span>
                <span className="font-bold text-emerald-900">05:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                <span className="text-gray-700 font-medium">Jummah (Fredag)</span>
                <span className="font-bold text-gold-600">Khutbah {config.jummah.khutbah} | Jamat {config.jummah.jamat}</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                <span className="text-gray-700 font-medium">Ramadan</span>
                <span className="font-bold text-emerald-900">24/7</span>
              </div>
              <div className="flex justify-between items-center py-2.5">
                <span className="text-gray-700 font-medium">Kontor</span>
                <span className="font-bold text-emerald-900">09:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Organization Info Card */}
      <Card variant="subtle" className="bg-emerald-50 border-emerald-200">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-emerald-900 mb-4">Organisasjonsinformasjon</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-emerald-200/50">
                <span className="text-gray-700 font-semibold">Organisasjonsnummer</span>
                <span className="text-emerald-900 font-bold">988 588 660</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-emerald-200/50">
                <span className="text-gray-700 font-semibold">Stiftet</span>
                <span className="text-emerald-900 font-bold">2005</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 font-semibold">Organisasjonsform</span>
                <span className="text-emerald-900 font-bold">Forening</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <Link href="/prayer-times">
          <Button variant="outline" className="w-full justify-center">
            <Clock className="w-5 h-5 mr-2" />
            Se bønnetider
          </Button>
        </Link>
        <Link href="/donate">
          <Button variant="secondary" className="w-full justify-center">
            Doner nå
          </Button>
        </Link>
      </div>
    </div>
  );
}
