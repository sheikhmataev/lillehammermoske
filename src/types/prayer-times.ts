export interface PrayerTime {
  date: string;
  hijriDate: string;
  fajr: string;
  fajrEnd: string;
  duhr: string;
  asr: string;
  oneShadow: string;
  twoShadow: string;
  maghrib: string;
  isha: string;
}

export interface PrayerTimesData {
  month: string;
  year: number;
  times: PrayerTime[];
}

export interface PrayerTimesResponse {
  data: PrayerTimesData[];
  lastUpdated: string;
  source: string;
}

export interface PrayerTimesApiConfig {
  baseUrl?: string;
  apiKey?: string;
  city?: string;
  country?: string;
}
