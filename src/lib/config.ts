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
    whatsapp: '',
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
