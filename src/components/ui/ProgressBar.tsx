'use client';

import { useState, useEffect } from 'react';

export function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Calculate progress only once on mount
    const calculateProgress = () => {
      const now = new Date();
      const ramadanStart = new Date('2026-02-18T00:00:00');
      const ramadanEnd = new Date('2026-03-19T23:59:59');
      
      if (now >= ramadanStart && now <= ramadanEnd) {
        const currentDay = Math.floor((now.getTime() - ramadanStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        const totalDays = 30;
        return Math.min((currentDay / totalDays) * 100, 100);
      }
      return 0;
    };

    setProgress(calculateProgress());

    // Update only once per day at midnight
    const updateAtMidnight = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const msUntilMidnight = tomorrow.getTime() - now.getTime();
      
      setTimeout(() => {
        setProgress(calculateProgress());
        // Set up recurring daily update
        setInterval(() => {
          setProgress(calculateProgress());
        }, 24 * 60 * 60 * 1000); // Every 24 hours
      }, msUntilMidnight);
    };

    updateAtMidnight();
  }, []);

  if (!mounted) return null;

  return (
    <div className="mb-10">
      <div className="flex justify-between text-[10px] text-emerald-400/60 mb-2 px-1 uppercase tracking-widest">
        <span>1. Ramadan</span>
        <span>Eid al-Fitr</span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div
          className="h-full rounded-full relative transition-all duration-1000 ease-out"
          style={{ 
            background: 'linear-gradient(90deg, #D4AF37, #E6C547)',
            width: `${progress}%`
          }}
        >
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
            style={{ background: '#E6C547', boxShadow: '0 0 8px rgba(212,175,55,0.8)' }}
          />
        </div>
      </div>
    </div>
  );
}
