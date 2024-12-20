/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    './public/index.html',   // Correctly reference the HTML file in the public folder
    './src/**/*.{html,js,css}', // Include all files inside src (CSS included for styles)
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], 
        Inter:['Inter'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['20px', '28px'],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      colors: {
        'primary': {
          100: '#4CAF4F',
          200: '#4caf4f9c',
        },
        'secondary': {
          100: '#717171',
          200: '#4D4D4D',
          300: '#89939E',
        },
        silver: '#F5F7FA',
        blackLight: '#263238',
      },
      container: {
        center: true,
      },
      boxShadow: {
        'custom-light': '0px 1.39214px 2.78428px rgba(171, 190, 209, 0.2)',
        'custom-dark': '0px 5.56856px 11.1371px rgba(171, 190, 209, 0.4)',
      },
      maxWidth: {
        '86p': '86%',
      },
      
    },
  },
  plugins: [
    
  ],
}

