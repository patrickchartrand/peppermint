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
    // https://vueuse.org/
    '@vueuse/nuxt', 
    // https://v8.i18n.nuxtjs.org/
    '@nuxtjs/i18n', 
    // https://pinia.vuejs.org/core-concepts/
    '@pinia/nuxt', 
    // https://nuxt.com/modules/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://firebase.nuxtjs.org
    //'@nuxtjs/firebase'
    // https://nuxt.com/modules/nuxt-pdf
    // '@sidebase/nuxt-pdf'
  ],
  components: {
    dirs: ['components'],
    global: true,
  },
  /*firebase: {
    config: {
      apiKey: "AIzaSyABLlatSBRogilyvhy828-P89mwdbZD_r8",
      authDomain: "peppermint-40421.firebaseapp.com",
      projectId: "peppermint-40421",
      storageBucket: "peppermint-40421.firebasestorage.app",
      messagingSenderId: "159788776768",
      appId: "1:159788776768:web:7a63f76380cc7682bb8ea5"
    },
    services: {
      auth: true
    }
  }*/
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