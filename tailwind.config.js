/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9F2', // Softer cream background
        pastelPink: '#FFDEE9',
        pastelPinkDark: '#B5EAD7',
        pastelGreen: '#C7E9B0',
        pastelBlue: '#E0F7FA', // airy blue
        pastelPurple: '#E0C3FC',
        darkText: '#5D4037', // Brownish text for bakery feel
        cardBg: '#FFFFFF',
        accent: '#FF8FAB', // pop of pink
        secondaryAccent: '#8E44AD'
      },
      fontFamily: {
        playful: ['"Fredoka"', 'sans-serif'],
        body: ['"Quicksand"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
