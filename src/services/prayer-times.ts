import { PrayerTime, PrayerTimesData, PrayerTimesResponse, PrayerTimesApiConfig } from '@/types/prayer-times';

// Parse CSV data
export const parseCSVData = (csvContent: string): PrayerTime[] => {
  const lines = csvContent.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
  
  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.replace(/"/g, '').trim());
    
    return {
      date: values[0],
      hijriDate: values[1],
      fajr: values[2],
      fajrEnd: values[3],
      duhr: values[4],
      asr: values[5],
      oneShadow: values[6],
      twoShadow: values[7],
      maghrib: values[8],
      isha: values[9],
    };
  });
};

// API service for future integration
export class PrayerTimesService {
  private config: PrayerTimesApiConfig;
  private static instance: PrayerTimesService;

  constructor(config: PrayerTimesApiConfig = {}) {
    this.config = {
      baseUrl: config.baseUrl || '/api/prayer-times',
      city: config.city || 'Lillehammer',
      country: config.country || 'Norway',
      ...config
    };
  }

  static getInstance(config?: PrayerTimesApiConfig): PrayerTimesService {
    if (!PrayerTimesService.instance) {
      PrayerTimesService.instance = new PrayerTimesService(config);
    }
    return PrayerTimesService.instance;
  }

  // Fetch prayer times from API (for future use)
  async fetchPrayerTimes(month?: string, year?: number): Promise<PrayerTimesResponse> {
    try {
      const params = new URLSearchParams();
      if (month) params.append('month', month);
      if (year) params.append('year', year.toString());
      if (this.config.city) params.append('city', this.config.city);
      if (this.config.country) params.append('country', this.config.country);

      const response = await fetch(`${this.config.baseUrl}?${params}`, {
        headers: {
          'Content-Type': 'application/json',
          ...(this.config.apiKey && { 'Authorization': `Bearer ${this.config.apiKey}` })
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch prayer times: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching prayer times:', error);
      throw error;
    }
  }

  // Get prayer times from local CSV data (current implementation)
  async getLocalPrayerTimes(): Promise<PrayerTimesData[]> {
    try {
      // Import CSV files dynamically
      const nov2025Response = await fetch('/data/Bonnetid_Lillehammer_2025-11.csv');
      const dec2025Response = await fetch('/data/Bonnetid_Lillehammer_2025-12.csv');

      if (!nov2025Response.ok || !dec2025Response.ok) {
        throw new Error('Failed to load local prayer times data');
      }

      const nov2025Content = await nov2025Response.text();
      const dec2025Content = await dec2025Response.text();

      const nov2025Times = parseCSVData(nov2025Content);
      const dec2025Times = parseCSVData(dec2025Content);

      return [
        {
          month: 'November',
          year: 2025,
          times: nov2025Times
        },
        {
          month: 'Desember',
          year: 2025,
          times: dec2025Times
        }
      ];
    } catch (error) {
      console.error('Error loading local prayer times:', error);
      throw error;
    }
  }

  // Get prayer times for today
  async getTodayPrayerTimes(): Promise<PrayerTime | null> {
    try {
      const allTimes = await this.getLocalPrayerTimes();
      const today = new Date();
      const todayString = today.toLocaleDateString('nb-NO', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
      }).replace(/\./g, '-');

      for (const monthData of allTimes) {
        const todayTime = monthData.times.find(time => 
          time.date === todayString
        );
        if (todayTime) {
          return todayTime;
        }
      }

      return null;
    } catch (error) {
      console.error('Error getting today prayer times:', error);
      return null;
    }
  }

  // Get prayer times for a specific date
  async getPrayerTimesForDate(date: string): Promise<PrayerTime | null> {
    try {
      const allTimes = await this.getLocalPrayerTimes();
      
      for (const monthData of allTimes) {
        const prayerTime = monthData.times.find(time => 
          time.date === date
        );
        if (prayerTime) {
          return prayerTime;
        }
      }

      return null;
    } catch (error) {
      console.error('Error getting prayer times for date:', error);
      return null;
    }
  }

  // Get prayer times for a month
  async getPrayerTimesForMonth(month: string, year: number): Promise<PrayerTimesData | null> {
    try {
      const allTimes = await this.getLocalPrayerTimes();
      
      return allTimes.find(data => 
        data.month.toLowerCase() === month.toLowerCase() && 
        data.year === year
      ) || null;
    } catch (error) {
      console.error('Error getting prayer times for month:', error);
      return null;
    }
  }
}

// Utility functions
export const getNextPrayerTime = (prayerTimes: PrayerTime): { name: string; time: string; countdown: string } | null => {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);
  
  const prayers = [
    { name: 'Fajr', time: prayerTimes.fajr },
    { name: 'Duhr', time: prayerTimes.duhr },
    { name: 'Asr', time: prayerTimes.asr },
    { name: 'Maghrib', time: prayerTimes.maghrib },
    { name: 'Isha', time: prayerTimes.isha }
  ];

  for (const prayer of prayers) {
    if (prayer.time > currentTime) {
      const [hours, minutes] = prayer.time.split(':').map(Number);
      const prayerTime = new Date();
      prayerTime.setHours(hours, minutes, 0, 0);
      
      const diff = prayerTime.getTime() - now.getTime();
      const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
      const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      return {
        name: prayer.name,
        time: prayer.time,
        countdown: `${hoursLeft}t ${minutesLeft}min`
      };
    }
  }

  return null;
};

export const getCurrentPrayerTime = (prayerTimes: PrayerTime): { name: string; time: string } | null => {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);
  
  const prayers = [
    { name: 'Fajr', time: prayerTimes.fajr, endTime: prayerTimes.fajrEnd },
    { name: 'Duhr', time: prayerTimes.duhr, endTime: prayerTimes.asr },
    { name: 'Asr', time: prayerTimes.asr, endTime: prayerTimes.maghrib },
    { name: 'Maghrib', time: prayerTimes.maghrib, endTime: prayerTimes.isha },
    { name: 'Isha', time: prayerTimes.isha, endTime: '23:59' }
  ];

  for (const prayer of prayers) {
    if (currentTime >= prayer.time && currentTime <= prayer.endTime) {
      return {
        name: prayer.name,
        time: prayer.time
      };
    }
  }

  return null;
};
