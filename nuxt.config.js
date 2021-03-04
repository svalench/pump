export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'arhiterm',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800' },
    ]
  },

  loading: {color:'blue'},

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-picture-swipe',
      // '~/plugins/vue-click-outside'

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
        // Simple usage
        '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  axios: {
    proxy: false,
    baseURL: "http://193.123.37.74:8000"
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
           type: 'Token'
        },
        user: {
          property: '',
        },
        endpoints: {
          login: { url: '/signin/backend/signin/', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: '/users/mydata/', method: 'get' }
        },
        // tokenRequired: true,
        tokenType: '',
      },
    },
    redirect: {
      home: false,
      callback: false,
      logout: false
    }
  },


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [
      "vee-validate/dist/rules",
      'vue-picture-swipe'
    ],
  },



vuetify: {
  treeShake: true,
  defaultAssets: {
    font: {
      family: 'Montserrat'
    },
    icons: 'fa',
  }

}


}
