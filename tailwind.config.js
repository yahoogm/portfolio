/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const daisyui = require('daisyui');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        supreme: ['Supreme', 'sans-serif'],
        consolas: ['Consolas', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        scroll: 'scroll 35s linear infinite',
      },
    },
    colors: {
      'my-primary': '#009e66',
      // lm => Light Mode
      'lm-secondary': '#f5a623',
      'lm-tertiary': '#428bca',
      'lm-background': '#f8f8f8',
      'lm-text': '#333333',
      'lm-link': '#0066cc',
      // dm => Dark Mode
      'dm-secondary': '#d88216',
      'dm-tertiary': '#245682',
      'dm-background': '#1a1a1a',
      'dm-text': '#d4d4d4',
      'dm-text-primary': '#f0f0f0',
      'dm-link': '#4d94ff',
      'dm-dark': '#161616',
    },
    container: {
      padding: {
        DEFAULT: '17px',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#009e66',
          secondary: '#f5a623',
          accent: '#428bca',
          neutral: '#333333',
          'base-100': '#f8f8f8',
          info: '#0066cc',
          success: '#009e66',
          warning: '#f5a623',
          error: '#d9534f',
        },
      },
    ],
  },
  darkMode: 'class',
};
