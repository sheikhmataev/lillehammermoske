'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // Hide after stroke animation completes + short hold
    const timer = setTimeout(() => setVisible(false), prefersReduced ? 400 : 2200);
    return () => clearTimeout(timer);
  }, [prefersReduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#0A0F0A' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Mosque silhouette SVG — strokes draw themselves in */}
          <motion.svg
            width="200"
            height="160"
            viewBox="0 0 200 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Main dome */}
            <motion.path
              d="M60 100 Q60 55 100 50 Q140 55 140 100"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.1 }}
            />
            {/* Base wall */}
            <motion.line
              x1="40" y1="100" x2="160" y2="100"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.9 }}
            />
            {/* Left minaret */}
            <motion.rect
              x="42" y="70" width="12" height="32"
              stroke="#D4AF37"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 1.1 }}
            />
            {/* Left minaret tip */}
            <motion.path
              d="M42 70 L48 60 L54 70"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: 'easeInOut', delay: 1.4 }}
            />
            {/* Right minaret */}
            <motion.rect
              x="146" y="70" width="12" height="32"
              stroke="#D4AF37"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 1.1 }}
            />
            {/* Right minaret tip */}
            <motion.path
              d="M146 70 L152 60 L158 70"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: 'easeInOut', delay: 1.4 }}
            />
            {/* Door arch */}
            <motion.path
              d="M88 100 L88 85 Q100 78 112 85 L112 100"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 1.5 }}
            />
            {/* Crescent on dome */}
            <motion.path
              d="M97 48 C93 45 90 40 93 35 C96 30 103 31 106 36 C100 36 97 41 97 48 Z"
              stroke="#E6C547"
              strokeWidth="1.2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 1.65 }}
            />
          </motion.svg>

          {/* Label */}
          <motion.p
            className="mt-6 text-gold-400 text-sm font-medium tracking-[0.2em] uppercase"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            Lillehammer Moske
          </motion.p>

          {/* Thin progress line */}
          <motion.div
            className="mt-5 h-px w-32 rounded-full"
            style={{ background: 'rgba(212,175,55,0.25)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #D4AF37, #E6C547)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeOut', delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
