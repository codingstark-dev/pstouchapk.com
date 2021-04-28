module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    textColor: (theme) => ({
      ...theme('colors'),
      pscolor: '#192a93',
      white: '#FFFFFF',
      pslite: '#2f41b7',
    }),

    backgroundColor: (theme) => ({
      ...theme('colors'),
      pscolor: '#192a93',
      pslite: '#2f41b7',
    }),
    extend: {
      fontFamily: {
        heading: ['"Roboto", "sans-serif"'],
        body: ['"DmSans", "sans-serif"'],
      },
      typography: {
        default: {
          css: {
            h1: {
              'padding-top': '0.5em',
              'font-weight': '600',
              'font-size': '22px',
              'text-align:': 'center',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
