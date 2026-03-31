import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C8A97E',
        background: '#FAFAF8',
        foreground: '#6B4F3A',
        muted: '#8B7355',
        border: '#E8DFD3',
        card: '#FFFFFF',
      },
      fontFamily: {
        body: ['var(--font-body)', 'sans-serif'],
        heading: ['var(--font-heading)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
