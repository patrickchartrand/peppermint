module.exports = {
    content: [
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
    ],
    theme: {
      container: {
        center: true,
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
    ],
  }
  