// https://nuxt.com/docs/api/configuration/nuxt-config
// import eslintPlugin from 'vite-plugin-eslint';
import languages from './i18n/lang/languages'
import theme from './config/theme'
import brand from './assets/text/brand'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: brand.starter.name,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: brand.starter.desc },
        { name: 'msapplication-TileColor', content: '#FFFFFF' },
        { name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png' },
        // PWA primary color
        { name: 'theme-color', content: theme.primary},
        // Facebook
        { property: 'author', content: 'awrora' },
        { property: 'og:site_name', content: 'awrora.ux-maestro.com' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        // Twitter
        { property: 'twitter:site', content: 'awrora.ux-maestro.com' },
        { property: 'twitter:domain', content: 'awrora.ux-maestro.com' },
        { property: 'twitter:creator', content: 'awrora' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:image:src', content: '/images/logo-suinet.png' },
        { property: 'og:url', content: brand.starter.url },
        { property: 'og:title', content: brand.starter.projectName },
        { property: 'og:description', content: brand.starter.desc },
        { name: 'twitter:site', content: brand.starter.url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: brand.starter.img },
        { property: 'og:image', content: brand.starter.img },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ],
      link: [
        // Favicon
        { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-icon-180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicons/manifest.json' },
        // Fonts and Icons
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;800&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css' }
      ]
    },
  },

  components: false,

  css: [
    'aos/dist/aos.css',
    'vuetify/lib/styles/main.sass',
    '@splidejs/vue-splide/css',
    '@/assets/scss/vuetify-overide.scss',
    '@/assets/scss/transition.scss',
    '@/assets/scss/vendors/animate.css',
    '@/assets/scss/vendors/animate-extends.css',
    '@/assets/scss/vendors/hamburger-menu.css',
    '@/assets/scss/vendors/slick-carousel/slick.css',
    '@/assets/scss/vendors/slick-carousel/slick-theme.css'
  ],

  modules: [
    '@nuxtjs/i18n',
    'vite-plugin-eslint'
  ],

  i18n: {
    baseUrl: 'https://ai.webfluentia.com',
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        files: ['en-US.json']
      },
      {
        code: 'de',
        name: 'German',
        iso: 'de-DE',
        files: ['de-DE.json']
      },
      {
        code: 'zh',
        name: 'Chinese',
        iso: 'zh-ZH',
        files: ['zh-ZH.json']
      },
      {
        code: 'pt',
        name: 'pt',
        iso: 'pt-PT',
        files: ['pt-PT.json']
      },
    ],
    lazy: true,
    langDir: './lang',
    defaultLocale: 'en',
    vueI18n: "./config/i18n.js",
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@import "@/assets/scss/styles.scss";` } // eslint-disable-line
      }
    },
    plugins: [
      // eslintPlugin(),
    ]
  },

  build: {
    transpile: ['vuetify', 'three'],
  },

  devServer: {
    port: 8001, // default: 3000
  },

  compatibilityDate: '2024-11-07'
})