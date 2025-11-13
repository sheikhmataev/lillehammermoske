import { PrayerTime, PrayerTimesData, PrayerTimesResponse, PrayerTimesApiConfig } from '@/types/prayer-times';

// Fallback prayer times data for November 2025
const fallbackNovember2025 = `"Dato","Hijri-dato","Fajr","Fajr slutt","Duhr","Asr","1x-skygge","2x-skygge","Maghrib","Isha"
"01-11-2025","10-5-1447","05:34","07:44","12:06","14:18","13:46","14:18","16:22","18:20"
"02-11-2025","11-5-1447","05:36","07:47","12:06","14:15","13:44","14:15","16:19","18:17"
"03-11-2025","12-5-1447","05:38","07:49","12:06","14:13","13:42","14:13","16:16","18:15"
"04-11-2025","13-5-1447","05:40","07:52","12:06","14:11","13:40","14:11","16:14","18:13"
"05-11-2025","14-5-1447","05:43","07:55","12:06","14:08","13:38","14:08","16:11","18:11"
"06-11-2025","15-5-1447","05:45","07:58","12:06","14:06","13:36","14:06","16:08","18:09"
"07-11-2025","16-5-1447","05:47","08:00","12:06","14:04","13:34","14:04","16:06","18:06"
"08-11-2025","17-5-1447","05:49","08:03","12:07","14:01","13:33","14:01","16:03","18:04"
"09-11-2025","18-5-1447","05:51","08:06","12:07","13:59","13:31","13:59","16:00","18:02"
"10-11-2025","19-5-1447","05:53","08:08","12:07","13:57","13:29","13:57","15:58","18:00"
"11-11-2025","20-5-1447","05:55","08:11","12:07","13:55","13:27","13:55","15:56","17:58"
"12-11-2025","21-5-1447","05:57","08:13","12:07","13:53","13:26","13:53","15:54","17:56"
"13-11-2025","22-5-1447","05:59","08:15","12:07","13:51","13:24","13:51","15:52","17:54"
"14-11-2025","23-5-1447","06:01","08:18","12:07","13:49","13:22","13:49","15:50","17:52"
"15-11-2025","24-5-1447","06:03","08:20","12:07","13:47","13:21","13:47","15:48","17:50"
"16-11-2025","25-5-1447","06:05","08:22","12:07","13:45","13:19","13:45","15:46","17:48"
"17-11-2025","26-5-1447","06:07","08:24","12:07","13:43","13:18","13:43","15:44","17:46"
"18-11-2025","27-5-1447","06:09","08:26","12:07","13:41","13:16","13:41","15:42","17:44"
"19-11-2025","28-5-1447","06:11","08:28","12:07","13:39","13:15","13:39","15:40","17:42"
"20-11-2025","29-5-1447","06:13","08:30","12:07","13:37","13:13","13:37","15:38","17:40"
"21-11-2025","30-5-1447","06:15","08:32","12:07","13:35","13:12","13:35","15:36","17:38"
"22-11-2025","1-6-1447","06:17","08:34","12:07","13:33","13:10","13:33","15:34","17:36"
"23-11-2025","2-6-1447","06:19","08:36","12:07","13:31","13:09","13:31","15:32","17:34"
"24-11-2025","3-6-1447","06:21","08:38","12:07","13:29","13:07","13:29","15:30","17:32"
"25-11-2025","4-6-1447","06:23","08:40","12:07","13:27","13:06","13:27","15:28","17:30"
"26-11-2025","5-6-1447","06:25","08:42","12:07","13:25","13:04","13:25","15:26","17:28"
"27-11-2025","6-6-1447","06:27","08:44","12:07","13:23","13:03","13:23","15:24","17:26"
"28-11-2025","7-6-1447","06:29","08:46","12:07","13:21","13:01","13:21","15:22","17:24"
"29-11-2025","8-6-1447","06:31","08:48","12:07","13:19","13:00","13:19","15:20","17:22"
"30-11-2025","9-6-1447","06:33","08:50","12:07","13:17","12:58","13:17","15:18","17:20"`;

// Fallback prayer times data for December 2025
const fallbackDecember2025 = `"Dato","Hijri-dato","Fajr","Fajr slutt","Duhr","Asr","1x-skygge","2x-skygge","Maghrib","Isha"
"01-12-2025","11-6-1447","06:33","09:01","12:12","13:22","13:03","13:22","15:16","17:32"
"02-12-2025","12-6-1447","06:34","09:03","12:12","13:21","13:02","13:21","15:14","17:31"
"03-12-2025","13-6-1447","06:36","09:05","12:13","13:20","13:01","13:20","15:13","17:31"
"04-12-2025","14-6-1447","06:37","09:07","12:13","13:19","13:01","13:19","15:12","17:30"
"05-12-2025","15-6-1447","06:38","09:09","12:14","13:18","13:00","13:18","15:11","17:29"
"06-12-2025","16-6-1447","06:40","09:11","12:14","13:17","13:00","13:17","15:10","17:29"
"07-12-2025","17-6-1447","06:41","09:13","12:14","13:17","12:59","13:17","15:09","17:29"
"08-12-2025","18-6-1447","06:42","09:15","12:15","13:16","12:59","13:16","15:08","17:28"
"09-12-2025","19-6-1447","06:43","09:17","12:15","13:16","12:59","13:16","15:07","17:28"
"10-12-2025","20-6-1447","06:44","09:19","12:15","13:15","12:58","13:15","15:06","17:27"
"11-12-2025","21-6-1447","06:45","09:21","12:16","13:15","12:58","13:15","15:05","17:27"
"12-12-2025","22-6-1447","06:46","09:23","12:16","13:14","12:57","13:14","15:04","17:27"
"13-12-2025","23-6-1447","06:47","09:25","12:16","13:14","12:57","13:14","15:03","17:26"
"14-12-2025","24-6-1447","06:48","09:27","12:17","13:13","12:56","13:13","15:02","17:26"
"15-12-2025","25-6-1447","06:49","09:29","12:17","13:13","12:56","13:13","15:01","17:26"
"16-12-2025","26-6-1447","06:50","09:31","12:17","13:12","12:56","13:12","15:00","17:25"
"17-12-2025","27-6-1447","06:51","09:33","12:17","13:12","12:55","13:12","14:59","17:25"
"18-12-2025","28-6-1447","06:52","09:35","12:18","13:11","12:55","13:11","14:58","17:25"
"19-12-2025","29-6-1447","06:53","09:37","12:18","13:11","12:55","13:11","14:57","17:24"
"20-12-2025","30-6-1447","06:54","09:39","12:18","13:10","12:54","13:10","14:56","17:24"
"21-12-2025","1-7-1447","06:55","09:41","12:19","13:10","12:54","13:10","14:55","17:24"
"22-12-2025","2-7-1447","06:56","09:43","12:19","13:09","12:54","13:09","14:54","17:23"
"23-12-2025","3-7-1447","06:57","09:45","12:19","13:09","12:53","13:09","14:53","17:23"
"24-12-2025","4-7-1447","06:58","09:47","12:19","13:08","12:53","13:08","14:52","17:23"
"25-12-2025","5-7-1447","06:59","09:49","12:20","13:08","12:53","13:08","14:51","17:23"
"26-12-2025","6-7-1447","07:00","09:51","12:20","13:07","12:52","13:07","14:50","17:22"
"27-12-2025","7-7-1447","07:01","09:53","12:20","13:07","12:52","13:07","14:49","17:22"
"28-12-2025","8-7-1447","07:02","09:55","12:20","13:06","12:52","13:06","14:48","17:22"
"29-12-2025","9-7-1447","07:03","09:57","12:21","13:06","12:51","13:06","14:47","17:21"
"30-12-2025","10-7-1447","07:04","09:59","12:21","13:05","12:51","13:05","14:46","17:21"
"31-12-2025","11-7-1447","07:05","10:01","12:21","13:05","12:51","13:05","14:45","17:21"`;

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
      let nov2025Content: string;
      let dec2025Content: string;

      try {
        // Try to fetch from public folder
        const nov2025Response = await fetch('/data/Bonnetid_Lillehammer_2025-11.csv');
        const dec2025Response = await fetch('/data/Bonnetid_Lillehammer_2025-12.csv');

        if (nov2025Response.ok && dec2025Response.ok) {
          nov2025Content = await nov2025Response.text();
          dec2025Content = await dec2025Response.text();
        } else {
          throw new Error('CSV files not found');
        }
      } catch (fetchError) {
        // Use fallback data if fetch fails
        console.warn('Using fallback prayer times data due to fetch error:', fetchError);
        nov2025Content = fallbackNovember2025;
        dec2025Content = fallbackDecember2025;
      }

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
