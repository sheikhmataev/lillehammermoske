/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'emerald': {
          500: '#10B981',
          800: '#065F46',
          900: '#1B5E20', // Emerald Green
        },
        'gold': {
          50: '#FDF8E8',
          100: '#FAF0C8',
          200: '#F5E08A',
          300: '#E6C547',
          400: '#E6C547',
          500: '#D4AF37', // Gold/Sand
          600: '#B8941F',
          700: '#9A7A15',
          800: '#7C620F',
          900: '#5E4A0A',
        },
        // Secondary colors
        'mint': {
          200: '#C8E6C9', // Light Mint
        },
        'charcoal': {
          800: '#263238', // Charcoal/Dark Slate
        },
        'cream': {
          50: '#F9F5EB', // Beige/Cream
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'arabic': ['Amiri', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
