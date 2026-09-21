/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg': '#010C15',
        'bg-lighter': '#011221',
        'panel': '#011627',
        'panel-2': '#012036',
        'gray-dark': '#121212',
        // Lines / borders
        'line': '#1E2D3D',
        'line-soft': '#607B96',
        // Text
        'txt': '#607B96',
        'txt-bright': '#E5E9F0',
        'menu-text': '#607B96',
        'hello-name': '#E5E9F0',
        'hello-gray': '#607B96',
        'placeholder-gray': '#465E77',
        // Accents (syntax highlight)
        'green': '#43D9AD',
        'greenfy': '#43D9AD',
        'purple': '#3A49A4',
        'purple-text': '#4D5BCE',
        'purplefy': '#4D5BCE',
        'blue': '#4D5BCE',
        'neon': '#5565E8',
        'orange': '#E99287',
        'salmon': '#E99287',
        'yellow': '#FEA55F',
        'pink': '#C98BDF',
      },
      fontFamily: {
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'fade-in': 'fade-in 0.9s ease forwards',
      },
    },
  },
  plugins: [],
}
