/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      morado: {
        100: '#00001a',
        200: '#13142A',
        300: '#1a1a33',
        400: '#21213b',
        500: '#32314e',
        600: '#4e4c6b',
        700: '#6c6889',
        800: '#8a87a9',
        900: '#aaa6ca',
      }
    },
    extend: {},
  },
  plugins: [],
}

