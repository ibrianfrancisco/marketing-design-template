const env = require('dotenv').config();

export default {
  env: env.parsed,
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: titleChunk =>
      titleChunk ? `BRF Marketing: ${titleChunk}` : 'BRF Marketing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,900&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['hooper/dist/hooper.css', '~/assets/css/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/global-components'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://tailwindcss.nuxtjs.org/setup
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    purgeCSSInDev: false,
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
        ],
      },
    ],
  ],
  router: {
    linkActiveClass: 'active-link',
  },
  purgeCSS: {
    enabled: false,
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-import': {},
        'postcss-nested': {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: false,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
  },
};
