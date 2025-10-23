export interface PrayerTime {
  name: string;
  time: string;
  isNext: boolean;
  arabicName?: string;
}

export interface PrayerTimesData {
  date: string;
  times: PrayerTime[];
  location: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
}

export interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  type: 'important' | 'info' | 'event';
  isNew: boolean;
  author?: string;
}

export interface BoardMember {
  id: number;
  name: string;
  position: string;
  birthYear: number;
  email?: string;
  phone?: string;
  image?: string;
}

export interface QuranSchoolClass {
  id: number;
  name: string;
  ageGroup: string;
  schedule: string;
  teacher: string;
  description: string;
  maxStudents: number;
  currentStudents: number;
}

export interface Donation {
  id: number;
  amount: number;
  currency: string;
  purpose: string;
  donorName?: string;
  isAnonymous: boolean;
  date: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type: 'general' | 'quran-school' | 'donation' | 'visit' | 'other';
}

export interface RamadanInfo {
  year: number;
  startDate: string;
  endDate: string;
  iftarTime: string;
  suhoorTime: string;
  specialEvents: Array<{
    date: string;
    title: string;
    description: string;
    time?: string;
  }>;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
