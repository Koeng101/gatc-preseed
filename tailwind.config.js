/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        lab: {
          bg: '#f2f0e9',
          dark: '#1a1a1a',
          accent: '#ff4d00',
        }
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px #1a1a1a',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
