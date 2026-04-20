/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141210',
        paper: '#f3efe6',
        'paper-warm': '#ebe5d6',
        rule: '#c9bfa7',
        muted: '#5a544a',
        accent: '#d2442a',
        'accent-soft': '#e56b52',
      },
      fontFamily: {
        serif: ['Fraunces', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'blink': 'blink 1.1s steps(2) infinite',
        'rise': 'rise 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        blink: {
          '0%, 50%': { opacity: 1 },
          '50.01%, 100%': { opacity: 0 },
        },
        rise: {
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
