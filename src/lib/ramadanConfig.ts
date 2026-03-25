/**
 * Ramadan Configuration
 * ─────────────────────
 * Update this file each year before Ramadan.
 * Everything on the /ramadan page is driven from here.
 */

export const RAMADAN_CONFIG = {
  year: 2027,

  // Dates (confirm via moon sighting each year)
  startDate: '7. februar 2027',
  endDate: '8. mars 2027',
  startDateIso: '2027-02-07',
  endDateIso: '2027-03-08',
  startDayOfWeek: 'Søndag',

  // Isha / Taraweeh
  ishaTime: '20:30',
  ishaStartDate: '6. februar 2027',
  taraweehLeaders: [
    'Hafiz Harun Abdullahi Mukhtar',
    'Hafiz Ilyaas Omar Sayidahmed',
  ],

  // Calendar image in /public/assets/images/posters/
  kalenderBilde: '/assets/images/posters/ramadan_tabell.png',
  kalenderBildeAlt: 'Ramadan Kalender 2027 - Faste- og bønnetider for Lillehammer',

  // Laylatul Qadr odd nights (last 10 nights)
  laylatulQadrNights: '21., 23., 25., 27. og 29.',
};

/**
 * Archive of previous years – read-only, do not edit.
 */
export const RAMADAN_ARCHIVE = [
  {
    year: 2026,
    startDate: '18. februar 2026',
    endDate: '19. mars 2026',
    startDateIso: '2026-02-18',
    endDateIso: '2026-03-19',
    startDayOfWeek: 'Onsdag',
    ishaTime: '20:00',
    ishaStartDate: '17. februar 2026',
    taraweehLeaders: [
      'Hafiz Harun Abdullahi Mukhtar',
      'Hafiz Ilyaas Omar Sayidahmed',
    ],
    kalenderBilde: '/assets/images/posters/ramadan_tabell_2026.png',
  },
];
