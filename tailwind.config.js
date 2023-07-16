/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '01': '#F8FAFC',
          '02': '#E2E8F0',
          '03': '#94A3B8',
          '04': '#334155',
          '05': '#1E293B',
          '06': '#0F172A',
          '07': '#020617',
        },
      },
      fontSize: {
        heading: '2rem',
        1: '1.125rem',
        2: '1.125rem',
      },
      fontWeight: {
        heading: '700',
        1: '600',
        2: '400',
      },
      lineHeight: {
        heading: '130%',
        1: '150%',
        2: '150%',
      },
      backgroundImage: {
        'home-page': 'url(../public/background.svg)',
      },
    },
  },
  plugins: [],
}
