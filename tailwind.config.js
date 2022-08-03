
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './components/**/*.{html,js}',
      './pages/**/*.{html,js}',
      './index.html',
  ],
  theme: {
      screens: {
          sm: '375px',
          md: '768px',
          lg: '1024px',
          xl: '1536px',
      },
      colors: {
          'white': '#fff',
          'onhover': '#66ff99',
          'darkbrown': '#663300',
          'darkergrey': '#4d4d4d'
      },
      fontFamily: {
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
      },
      screens: {
          'sm': '375px',
          'md': '768px',
          'lg': '1024px',
        },
      extend: {
          spacing: {
              '128': '32rem',
              '144': '36rem',
          },
          borderRadius: {
              '4xl': '2rem',
          }
      }
  },
  plugins: [
      require('@tailwindcss/typography')
  ]
}
