'use client';

import { useState } from 'react';
import { Calendar, Clock, AlertCircle, Info } from 'lucide-react';

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  type: 'important' | 'info' | 'event';
  isNew: boolean;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: 'Ramadan 2024 - Viktig informasjon',
    content: 'Ramadan starter 10. mars 2024. Vi har oppdaterte åpningstider og spesielle arrangementer gjennom hele måneden.',
    date: '2024-02-15',
    type: 'important',
    isNew: true,
  },
  {
    id: 2,
    title: 'Quranskole påmelding åpnet',
    content: 'Påmelding for Quranskole våren 2024 er nå åpen. Vi tilbyr klasser for alle aldre.',
    date: '2024-02-10',
    type: 'info',
    isNew: true,
  },
  {
    id: 3,
    title: 'Jummah bønn - Fredag 12:00',
    content: 'Husk at Jummah bønn holdes hver fredag kl. 12:00. Alle er velkommen til å delta.',
    date: '2024-02-08',
    type: 'event',
    isNew: false,
  },
  {
    id: 4,
    title: 'Ny bønnetid app tilgjengelig',
    content: 'Vår nye bønnetid app er nå tilgjengelig for nedlasting. Få oppdaterte bønnetider direkte på telefonen.',
    date: '2024-02-05',
    type: 'info',
    isNew: false,
  },
];

export function Announcements() {
  const [selectedType, setSelectedType] = useState<'all' | 'important' | 'info' | 'event'>('all');

  const filteredAnnouncements = selectedType === 'all' 
    ? announcements 
    : announcements.filter(announcement => announcement.type === selectedType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'important':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'event':
        return <Calendar className="w-5 h-5 text-blue-500" />;
      default:
        return <Info className="w-5 h-5 text-emerald-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'important':
        return 'border-l-red-500 bg-red-50';
      case 'event':
        return 'border-l-blue-500 bg-blue-50';
      default:
        return 'border-l-emerald-500 bg-emerald-50';
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Kunngjøringer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hold deg oppdatert med de siste nyhetene og kunngjøringene fra Lillehammer Moske.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'all', label: 'Alle', count: announcements.length },
            { key: 'important', label: 'Viktig', count: announcements.filter(a => a.type === 'important').length },
            { key: 'info', label: 'Info', count: announcements.filter(a => a.type === 'info').length },
            { key: 'event', label: 'Arrangementer', count: announcements.filter(a => a.type === 'event').length },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedType(filter.key as any)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                selectedType === filter.key
                  ? 'bg-emerald-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Announcements List */}
        <div className="space-y-6">
          {filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className={`border-l-4 rounded-lg p-6 transition-all duration-200 hover:shadow-md ${getTypeColor(announcement.type)}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    {getTypeIcon(announcement.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-emerald-900">
                        {announcement.title}
                      </h3>
                      {announcement.isNew && (
                        <span className="bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          NY
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {announcement.content}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(announcement.date).toLocaleDateString('nb-NO', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>
                          {new Date(announcement.date).toLocaleTimeString('nb-NO', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No announcements message */}
        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Info className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Ingen kunngjøringer
            </h3>
            <p className="text-gray-500">
              Det er ingen kunngjøringer i denne kategorien for øyeblikket.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Hold deg oppdatert
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Få de siste nyhetene og kunngjøringene direkte på e-post eller WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Meld deg på nyhetsbrev
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 rounded-lg font-medium transition-colors">
                Bli med i WhatsApp gruppe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
