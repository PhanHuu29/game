/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"NVNJanuary"', 'serif'],
        body:    ['"BeVietnamPro"', 'serif'],
      },
      colors: {
        cream:           '#FDF6E3',
        parchment:       '#F2E6C9',
        clay:            '#C0752A',
        'clay-light':    '#D4894A',
        'brown-dark':    '#5C3317',
        ceramic:         '#2B5D8A',
        'ceramic-light': '#4A90C4',
        gold:            '#D4A017',
        'gold-light':    '#E8B84B',
        ink:             '#2C1810',
      },
      keyframes: {
        // ── Entry animations ──
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
        popIn: {
          '0%':   { transform: 'scale(0.7)', opacity: '0' },
          '70%':  { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)',   opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(32px)', opacity: '0' },
          to:   { transform: 'translateY(0)',     opacity: '1' },
        },
        slideRight: {
          from: { transform: 'translateX(60px) translateY(-50%)', opacity: '0' },
          to:   { transform: 'translateX(0)    translateY(-50%)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to:   { opacity: '0' },
        },
        // ── Ingredient drop into bowl ──
        dropIntoBowl: {
          '0%':   { transform: 'translateY(-40px) scale(0.4)', opacity: '0' },
          '60%':  { transform: 'translateY(4px)  scale(1.1)' },
          '100%': { transform: 'translateY(0)    scale(1)',    opacity: '1' },
        },
        // ── Dish reveal after smoke ──
        dishReveal: {
          '0%':   { transform: 'translate(-50%,-50%) scale(0.78)', opacity: '0' },
          '60%':  { transform: 'translate(-50%,-50%) scale(1.04)' },
          '100%': { transform: 'translate(-50%,-50%) scale(1)',    opacity: '1' },
        },
        // ── Smoke ──
        smokeRise: {
          '0%':   { transform: 'translateY(0) scale(1)',   opacity: '0.7' },
          '100%': { transform: 'translateY(-100px) scale(3)', opacity: '0' },
        },
        // ── Bowl pulse when 3 selected ──
        bowlGlow: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(43,93,138,0)' },
          '50%':     { boxShadow: '0 0 24px 8px rgba(43,93,138,0.35)' },
        },
        // ── Wrong shake ──
        shakeX: {
          '0%,100%': { transform: 'translateX(0)' },
          '15%':     { transform: 'translateX(-10px)' },
          '30%':     { transform: 'translateX(10px)' },
          '45%':     { transform: 'translateX(-8px)' },
          '60%':     { transform: 'translateX(8px)' },
          '75%':     { transform: 'translateX(-5px)' },
          '90%':     { transform: 'translateX(5px)' },
        },
        // ── Progress dot complete ──
        progressDone: {
          '0%':   { transform: 'scale(1)' },
          '40%':  { transform: 'scale(1.35)' },
          '70%':  { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        // ── Sparkle burst ──
        sparklePop: {
          '0%':   { transform: 'scale(0) rotate(0deg)',   opacity: '1' },
          '80%':  { transform: 'scale(1.2) rotate(180deg)', opacity: '0.8' },
          '100%': { transform: 'scale(1.5) rotate(240deg)', opacity: '0' },
        },
        // ── Submit button pulse ──
        submitPulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(212,160,23,0.5)' },
          '50%':     { boxShadow: '0 0 0 10px rgba(212,160,23,0)' },
        },
        // ── Card entrance ──
        cardEntrance: {
          from: { transform: 'scale(0.85) translateY(20px)', opacity: '0' },
          to:   { transform: 'scale(1) translateY(0)',         opacity: '1' },
        },
        // ── Stagger bounce ──
        staggerBounce: {
          '0%':   { transform: 'translateY(0)' },
          '25%':  { transform: 'translateY(-6px)' },
          '50%':  { transform: 'translateY(0)' },
          '75%':  { transform: 'translateY(-3px)' },
          '100%': { transform: 'translateY(0)' },
        },
        // ── Confetti ──
        confettiFall: {
          '0%':   { transform: 'translateY(-20px) rotate(0deg)',   opacity: '1' },
          '100%': { transform: 'translateY(120vh) rotate(720deg)', opacity: '0' },
        },
      },
      animation: {
        'float':          'floatY 3.2s ease-in-out infinite',
        'pop-in':         'popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both',
        'slide-up':       'slideUp 0.45s cubic-bezier(0.34,1.2,0.64,1) both',
        'slide-right':    'slideRight 0.55s cubic-bezier(0.34,1.15,0.64,1) both',
        'fade-in':        'fadeIn 0.35s ease both',
        'fade-out':       'fadeOut 0.3s ease forwards',
        'drop-into-bowl': 'dropIntoBowl 0.5s cubic-bezier(0.34,1.56,0.64,1) both',
        'dish-reveal':    'dishReveal 0.7s cubic-bezier(0.34,1.15,0.64,1) both',
        'smoke-rise':     'smokeRise 1.2s ease-out forwards',
        'bowl-glow':      'bowlGlow 1.5s ease-in-out infinite',
        'shake-x':        'shakeX 0.6s ease',
        'progress-done':  'progressDone 0.55s cubic-bezier(0.34,1.56,0.64,1)',
        'sparkle-pop':    'sparklePop 0.8s ease-out forwards',
        'submit-pulse':   'submitPulse 1.8s ease-in-out infinite',
        'card-entrance':  'cardEntrance 0.5s cubic-bezier(0.34,1.2,0.64,1) both',
        'confetti-fall':  'confettiFall linear forwards',
        'stagger-bounce': 'staggerBounce 0.6s ease both',
      },
      backgroundImage: {
        'wood-grain':     'linear-gradient(180deg,#A07248 0%,#8B6340 100%)',
        'ceramic-grad':   'linear-gradient(135deg,#2B5D8A 0%,#4A90C4 100%)',
        'gold-grad':      'linear-gradient(135deg,#D4A017 0%,#E8B84B 100%)',
        'clay-grad':      'linear-gradient(135deg,#C0752A 0%,#D4894A 100%)',
        'dark-wood':      'linear-gradient(135deg,#2C1810 0%,#5C3317 100%)',
      },
      boxShadow: {
        'ceramic':    '0 4px 20px rgba(43,93,138,0.32)',
        'ceramic-lg': '0 8px 32px rgba(43,93,138,0.45)',
        'gold':       '0 4px 16px rgba(212,160,23,0.4)',
        'gold-lg':    '0 6px 24px rgba(212,160,23,0.55)',
        'clay':       '0 4px 14px rgba(192,117,42,0.35)',
        'card':       '0 12px 40px rgba(0,0,0,0.18)',
        'overlay':    '0 24px 80px rgba(0,0,0,0.35)',
        'bowl-inner': 'inset 0 4px 12px rgba(43,93,138,0.15)',
      },
    },
  },
  plugins: [],
}
