const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'NanumGothic', 'NanumGothicOTF', ...defaultTheme.fontFamily.sans],
        mono: ['monospace'],
      },
      fontSize: {
        'xs': '10pt',
      }
    },
  },
  plugins: []
}