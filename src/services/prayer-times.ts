import { PrayerTime, PrayerTimesData, PrayerTimesResponse, PrayerTimesApiConfig } from '@/types/prayer-times';

// Available CSV files in public/data directory
const AVAILABLE_CSV_FILES = [
  'Bonnetid_Lillehammer_2025-11.csv',
  'Bonnetid_Lillehammer_2025-12.csv',
  'Bonnetid_Lillehammer_2026-01.csv',
  'Bonnetid_Lillehammer_2026-02.csv',
  'Bonnetid_Lillehammer_2026-03.csv',
  'Bonnetid_Lillehammer_2026-04.csv',
  'Bonnetid_Lillehammer_2026-05.csv',
  'Bonnetid_Lillehammer_2026-06.csv',
  'Bonnetid_Lillehammer_2026-07.csv',
  'Bonnetid_Lillehammer_2026-08.csv',
  'Bonnetid_Lillehammer_2026-09.csv',
  'Bonnetid_Lillehammer_2026-10.csv',
  'Bonnetid_Lillehammer_2026-11.csv',
  'Bonnetid_Lillehammer_2026-12.csv'
];

// Map month numbers to Norwegian month names
const MONTH_NAMES: { [key: string]: string } = {
  '01': 'Januar',
  '02': 'Februar',
  '03': 'Mars',
  '04': 'April',
  '05': 'Mai',
  '06': 'Juni',
  '07': 'Juli',
  '08': 'August',
  '09': 'September',
  '10': 'Oktober',
  '11': 'November',
  '12': 'Desember'
};

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

// Local CSV service for prayer times
export class PrayerTimesService {
  private static instance: PrayerTimesService;

  constructor() {
    // No configuration needed for local CSV files
  }

  static getInstance(): PrayerTimesService {
    if (!PrayerTimesService.instance) {
      PrayerTimesService.instance = new PrayerTimesService();
    }
    return PrayerTimesService.instance;
  }

  // Load prayer times from API endpoint
  async getLocalPrayerTimes(): Promise<PrayerTimesData[]> {
    try {
      const prayerTimesData: PrayerTimesData[] = [];
      const basePath = process.env.NODE_ENV === 'development' ? '' : '/lillehammermoske';

      for (const csvFile of AVAILABLE_CSV_FILES) {
        try {
          const response = await fetch(`${basePath}/api/prayer-times/csv/?file=${csvFile}`, {
            redirect: 'follow'
          });
          
          if (!response.ok) {
            console.warn(`Failed to load ${csvFile}: ${response.statusText}`);
            continue;
          }

          const csvContent = await response.text();
          const parsedTimes = parseCSVData(csvContent);
          
          // Extract year and month from filename
          const match = csvFile.match(/Bonnetid_Lillehammer_(\d{4})-(\d{2})\.csv/);
          if (match) {
            const year = parseInt(match[1]);
            const monthNumber = match[2];
            const monthName = MONTH_NAMES[monthNumber];
            
            prayerTimesData.push({
              month: monthName,
              year: year,
              times: parsedTimes
            });
          }
        } catch (error) {
          console.error(`Error processing ${csvFile}:`, error);
        }
      }

      // Sort by year and month
      prayerTimesData.sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        const monthOrder = Object.keys(MONTH_NAMES);
        return monthOrder.indexOf(Object.keys(MONTH_NAMES).find(key => MONTH_NAMES[key] === a.month) || '') - 
               monthOrder.indexOf(Object.keys(MONTH_NAMES).find(key => MONTH_NAMES[key] === b.month) || '');
      });

      return prayerTimesData;
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
