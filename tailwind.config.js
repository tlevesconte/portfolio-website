/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      fontSize: {
        md: ['0.9375rem', '1.375rem'],
      },
      colors: {
        'primary-dark': '#15161B',
        'secondary-dark': '#191A1F',
        'primary-grey': '#999999',
        'secondary-grey': '#b5b5b5',
        'dark-grey': '#777777',
        'off-white': '#d4d4d4',
        'slate-black': '#0d0d10',
      },
    },
  },
  plugins: [],
};
