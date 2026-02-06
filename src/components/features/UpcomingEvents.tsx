'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { config } from '@/lib/config';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'prayer' | 'education' | 'community' | 'ramadan';
  description: string;
  attendees?: number;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Jummah Bønn',
    date: '2024-03-01',
    time: config.jummah.khutbah,
    location: 'Hovedsal',
    type: 'prayer',
    description: `Fredagsbønn med khutbah kl. ${config.jummah.khutbah} og jamat kl. ${config.jummah.jamat}.`,
    attendees: 50,
  },
  {
    id: 2,
    title: 'Quranskole - Vårens første dag',
    date: '2024-03-05',
    time: '16:00',
    location: 'Klasserom 1',
    type: 'education',
    description: 'Vårens første dag av Quranskole. Alle påmeldte elever er velkommen.',
  },
  {
    id: 3,
    title: 'Ramadan Iftar - Felleskap',
    date: '2024-03-12',
    time: '18:30',
    location: 'Hovedsal',
    type: 'ramadan',
    description: 'Fellesskap iftar med det muslimske fellesskapet. Mat og drikke vil bli servert.',
    attendees: 100,
  },
  {
    id: 4,
    title: 'Fellesskapsmøte',
    date: '2024-03-15',
    time: '19:00',
    location: 'Møtesal',
    type: 'community',
    description: 'Møte for å diskutere fremtidige aktiviteter og initiativer.',
  },
];

const eventTypeColors = {
  prayer: 'bg-emerald-50 text-emerald-900 border border-emerald-200',
  education: 'bg-blue-50 text-blue-900 border border-blue-200',
  community: 'bg-amber-50 text-amber-900 border border-amber-200',
  ramadan: 'bg-purple-50 text-purple-900 border border-purple-200',
};

const eventTypeLabels = {
  prayer: 'Bønn',
  education: 'Utdanning',
  community: 'Fellesskap',
  ramadan: 'Ramadan',
};

export function UpcomingEvents() {
  const [filter, setFilter] = useState<'all' | Event['type']>('all');

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter);

  const upcomingEvents = filteredEvents
    .filter(event => new Date(event.date) >= new Date())
    .slice(0, 6);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-900">
            Kommende Arrangementer
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Hold deg oppdatert med kommende arrangementer, bønner og aktiviteter ved moskeen.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { key: 'all', label: 'Alle', count: events.length },
            { key: 'prayer', label: 'Bønn', count: events.filter(e => e.type === 'prayer').length },
            { key: 'education', label: 'Utdanning', count: events.filter(e => e.type === 'education').length },
            { key: 'community', label: 'Fellesskap', count: events.filter(e => e.type === 'community').length },
            { key: 'ramadan', label: 'Ramadan', count: events.filter(e => e.type === 'ramadan').length },
          ].map((filterOption) => (
            <Button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key as any)}
              variant={filter === filterOption.key ? 'primary' : 'ghost'}
              size="sm"
            >
              {filterOption.label} ({filterOption.count})
            </Button>
          ))}
        </div>

        {/* Events Grid - Enhanced Cards */}
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {upcomingEvents.map((event) => (
              <Card 
                key={event.id} 
                hover 
                variant="elevated"
                className="flex flex-col h-full"
              >
                {/* Badge and Attendees */}
                <div className="flex items-start justify-between mb-5">
                  <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${eventTypeColors[event.type]}`}>
                    {eventTypeLabels[event.type]}
                  </span>
                  {event.attendees && (
                    <div className="flex items-center text-gray-500 text-sm bg-gray-50 px-2.5 py-1 rounded-lg">
                      <Users className="w-4 h-4 mr-1.5" />
                      <span className="font-medium">{event.attendees}</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-emerald-900 mb-3 leading-tight">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                  {event.description}
                </p>

                {/* Footer with Details */}
                <div className="space-y-2.5 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-emerald-900 flex-shrink-0" />
                    <span className="font-medium">
                      {new Date(event.date).toLocaleDateString('nb-NO', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-emerald-900 flex-shrink-0" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-emerald-900 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Ingen kommende arrangementer
            </h3>
            <p className="text-gray-500">
              Det er ingen arrangementer i denne kategorien for øyeblikket.
            </p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <Link href="/events">
            <Button variant="outline" size="lg">
              Se alle arrangementer
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
