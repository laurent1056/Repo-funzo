import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, calm palette from UX spec
        surface: {
          DEFAULT: '#FAFAF8',
          card: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#2D2D2D',
          muted: '#8B8B8B',
          light: '#B0ADA8',
        },
        sage: {
          DEFAULT: '#4A6741',
          light: '#E8F0E6',
          dark: '#3A5233',
        },
        warm: {
          DEFAULT: '#8B7355',
          light: '#C4A882',
          border: '#E8E5E0',
          bg: '#F5F3EF',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        question: ['1.375rem', { lineHeight: '1.6', fontWeight: '500' }],
        'question-lg': ['1.5rem', { lineHeight: '1.6', fontWeight: '500' }],
      },
      maxWidth: {
        content: '640px',
      },
      spacing: {
        18: '4.5rem',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
