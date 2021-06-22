const { guessProductionMode } = require("@ngneat/tailwind");
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      screens: {
        'xs': '480px',
        ...defaultTheme.screens
      },
      extend: {
        colors: {
          brand: '#c1d72d'
        },
        width: (theme) => ({
          'large-screen': '75%',
        })        
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
