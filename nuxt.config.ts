export default defineNuxtConfig({
  app: {
    head: {
      title: 'Patrick Chartrand',
      titleTemplate: '%s - Patrick Chartrand',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'description', name: 'description', content: 'Patrick Chartrand Website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
      ],
    },
  },
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    // https://vueuse.org/
    '@vueuse/nuxt',
    // https://v8.i18n.nuxtjs.org/
    '@nuxtjs/i18n',
    // https://pinia.vuejs.org/core-concepts/
    '@pinia/nuxt',
    // https://nuxt.com/modules/tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  components: {
    dirs: ['components'],
    global: true,
  },
  /**
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix',
    langDir: 'locales',
    locales: [
      { code: 'en', iso: 'en-CA', name: 'English', file: 'en.json' },
      { code: 'fr', iso: 'fr-CA', name: 'Français', file: 'fr.json' },
    ],
  },
  */
})


