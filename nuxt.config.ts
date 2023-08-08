export default {
  app: {
    head: {
      title: 'Patrick Chartrand',
      titleTemplate: 'Patrick Chartrand',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: ['~/assets/css/style.css'],

  modules: [
    // https://vueuse.org/
    '@vueuse/nuxt',
    // https://tailwindcss.nuxtjs.org/
    '@nuxtjs/tailwindcss',
    // https://nuxt.com/modules/i18n
    '@nuxtjs/i18n',
    // https://pinia.vuejs.org/core-concepts/
    '@pinia/nuxt',
  ],

  components: {
    dirs: ['components'],
    global: true,
  },

  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix',
    langDir: 'locales',
    locales: [
      { code: 'en', iso: 'en-CA', name: 'English', file: 'en.json' },
      { code: 'fr', iso: 'fr-CA', name: 'Français', file: 'fr.json' },
    ],
  },

  nitro: {
    preset: 'vercel-edge',
  },
};
