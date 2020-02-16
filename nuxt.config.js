
// eslint-disable-next-line nuxt/no-cjs-in-config
const { resolve } = require('path')
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */

  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  render: {
    resourceHints: false
  },

  modules: [
    '@ax2/gpt-ads-module',
    '@nuxtjs/amp'

  ],
  amp: {
    origin: 'http://localhost:3000'
  },
  gptAds: {
    networkCode: '96551095'
  },
  /*
  ** Build configuration
  */

  build: {
    /*
    ** Yo u can extend webpack config he re
    */
    extend(config, ctx) {
    }
  }
}
