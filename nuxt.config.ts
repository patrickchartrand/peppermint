export default defineNuxtConfig({
  app: {
    head: {
      title: 'Patrick Chartrand', // titleTemplate: '%s - Patrick Chartrand',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'description', name: 'description', content: 'Patrick Chartrand' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }, 
      ],
      script: []
    },
  },
  devtools: { enabled: false },
  css: ['~/assets/css/style.css'],
  modules: [
    '@vueuse/nuxt', 
    '@nuxtjs/i18n', 
    '@pinia/nuxt', 
    '@nuxtjs/tailwindcss',
    'nuxt-mail'
    //'@nuxtjs/firebase'
    // '@sidebase/nuxt-pdf'
  ],
  components: {
    dirs: ['components'],
    global: true,
  },
  mail: {
    message: {
      to: process.env.NUXT_MAIL_TARGET,
    },
    smtp: {
      host: process.env.NUXT_MAIL_SMPT,
      port: process.env.NUXT_MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.NUXT_MAIL_USERNAME,
        pass: process.env.NUXT_MAIL_PASSWORD,
      }
    },
  },
} as Configs)

/*
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