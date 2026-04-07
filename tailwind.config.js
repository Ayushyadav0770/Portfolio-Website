/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#f5cc4a',
          400: '#f0c040',
          500: '#d4a853',
          600: '#b8912f',
          700: '#92700e',
          800: '#78560a',
          900: '#5c3e08',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4a853 0%, #f0c040 50%, #d4a853 100%)',
        'gold-shimmer':  'linear-gradient(90deg, #d4a853 0%, #f5cc4a 30%, #fff8dc 50%, #f5cc4a 70%, #d4a853 100%)',
      },
      animation: {
        'fade-up':       'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':       'fadeIn 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float 10s ease-in-out infinite',
        'pulse-slow':    'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
        'glow-pulse':    'glowPulse 3s ease-in-out infinite',
        'spin-slow':     'spin 8s linear infinite',
        'bounce-slow':   'bounce 3s ease-in-out infinite',
        'scale-in':      'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-up':      'slideUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'typing':        'typing 3.5s steps(40,end) forwards',
        'blink':         'blink 0.75s step-end infinite',
        'orbit':         'orbit 12s linear infinite',
        'draw-line':     'drawLine 1.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':     { transform: 'translateY(-20px) rotate(1deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 20px rgba(212,168,83,0.3)' },
          '50%':     { boxShadow: '0 0 50px rgba(212,168,83,0.6), 0 0 100px rgba(212,168,83,0.2)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          '0%':   { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%,100%': { borderColor: 'transparent' },
          '50%':     { borderColor: '#d4a853' },
        },
        orbit: {
          '0%':   { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(80px) rotate(-360deg)' },
        },
        drawLine: {
          '0%':   { transform: 'scaleX(0)', transformOrigin: 'left center' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left center' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
