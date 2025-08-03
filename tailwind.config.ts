import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['var(--font-quicksand)'],
        montserrat: ['var(--font-montserrat)'],
        poppins: ['var(--font-poppins)'],

      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        light: '#E5E5E5',
        accent: '#DAA520',
        primary: '#2cd16c'
      },
    },
  },
  plugins: [],
}

export default config 