/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep steel-blue — the brand's dominant colour (site tokens)
        steel: {
          50: '#EEF3F8',
          100: '#D6E2EE',
          200: '#AEC5DD',
          300: '#7FA3C7',
          400: '#4C7EAC',
          500: '#2C5F8E',
          600: '#1C4A73',
          700: '#123A5C',
          800: '#0C2C48',
          900: '#081F35',
          950: '#051423',
        },
        // Site-signage yellow, used sparingly as the CTA accent
        rebar: {
          400: '#FFC93C',
          500: '#F5B301',
          600: '#D69600',
        },
        // Skyline red — micro-accent only
        skyline: '#E63927',
        concrete: {
          50: '#F6F7F8',
          100: '#EEF0F2',
          200: '#DDE1E5',
          300: '#B8BFC7',
          400: '#8B95A1',
          500: '#5F6A76',
        },
        ink: '#0A1220',
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
        'rebar-gradient':
          'linear-gradient(90deg,#7fa3c7 0%,#eef3f8 12%,#7fa3c7 24%,#4c7eac 40%,#eef3f8 52%,#4c7eac 64%,#2c5f8e 80%,#eef3f8 92%,#2c5f8e 100%)',
      },
      backgroundSize: {
        blueprint: '40px 40px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(48px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(37,150,90,0.45)' },
          '100%': { boxShadow: '0 0 0 18px rgba(37,150,90,0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'zoom-in': 'zoom-in 0.7s ease-out forwards',
        marquee: 'marquee 28s linear infinite',
        'pulse-ring': 'pulse-ring 1.8s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
};
