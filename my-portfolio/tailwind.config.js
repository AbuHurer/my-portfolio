/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        moon: {
          900: '#03040a',
          800: '#0b1020',
          700: '#111827',
          600: '#1f2937',
          500: '#374151',
          indigoGlow: '#7c89ff',
          cyanGlow: '#5eead4',
        }
      }
    },
  },
  plugins: [],
}
