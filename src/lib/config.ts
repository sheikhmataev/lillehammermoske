export const config = {
  app: {
    name: 'Lillehammer Moske',
    description: 'The Muslim Cultural Center Lillehammer',
    url: process.env.APP_URL || 'https://lillehammermoske.no',
    email: process.env.APP_EMAIL || 'info@lillehammermoske.no',
    phone: process.env.APP_PHONE || '',
  },

  prayerTimes: {
    city: 'Lillehammer',
    country: 'Norway',
    latitude: 61.1153,
    longitude: 10.4663,
    dataSource: 'local_csv',
  },

  // ============================================
  // JUMMAH TIDER - Oppdater disse ved behov
  // Disse brukes globalt på hele nettsiden
  // ============================================
  jummah: {
    khutbah: '14:00',
    jamat: '14:30',
  },

  organization: {
    name: 'The Muslim Cultural Center Lillehammer',
    orgNumber: '988 588 660',
    address: 'Bankgata 12, 2609 Lillehammer',
    municipality: '3405 LILLEHAMMER, Norge',
    established: '2005-01-01',
    activity: 'Kulturelt senter',
  },

  board: {
    leader: 'Mukhtar Sharif Mukhtar',
    deputy: 'Hossein Sharipovitsj Aldamov',
    dailyLeader: 'Muhammad Talha Habib',
    members: [
      'Javaid Akhtar Sheikh',
      'Ahmed Macalin Yahye',
      'Muhammad Talha Habib',
    ],
  },

  // ============================================
  // ANSATTE VED QURANSKOLEN
  // `phone` vises på nettsiden, `tel` brukes i tel:-lenker
  // ============================================
  quranSchoolStaff: {
    boys: [
      {
        name: 'Ahmed Macalin Yahye',
        role: 'Lærer',
        phone: '+47 912 84 050',
        tel: '+4791284050',
      },
      {
        name: 'Muhammad Talha Habib',
        role: 'Administrasjon',
        phone: '900 83 259',
        tel: '+4790083259',
      },
      {
        name: 'Ahmaddin Temam Usman',
        role: 'Lærer',
        phone: '973 80 323',
        tel: '+4797380323',
      },
    ],
    girls: [
      {
        name: 'Faten Mohamad Dalati',
        role: 'Lærer',
        phone: '465 81 461',
        tel: '+4746581461',
      },
      {
        name: 'Hind Fares Alkhalil',
        role: 'Lærer',
        phone: '947 17 460',
        tel: '+4794717460',
      },
    ],
  },

  colors: {
    primary: {
      emerald: '#1B5E20',
      gold: '#D4AF37',
      white: '#FFFFFF',
    },
    secondary: {
      mint: '#C8E6C9',
      charcoal: '#263238',
      cream: '#F9F5EB',
    },
  },

  social: {
    whatsapp: 'https://chat.whatsapp.com/BCWaRzTlq5K7htT2p47TSA?mode=wwt',
    facebook: '',
    instagram: '',
    youtube: '',
  },

  features: {
    prayerTimes: true,
    ramadan: true,
    quranSchool: true,
    donations: true,
    announcements: true,
    contact: true,
    board: true,
  },
};
