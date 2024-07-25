var WebpackObfuscator = require('webpack-obfuscator');

export default {
  router: {
    mode: 'abstract'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    new WebpackObfuscator ({
        rotateStringArray: true
    }, ['excluded_bundle_name.js'])
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '', //미러링 할 링크
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  rules: [
    {
        test: /\.js$/,
        exclude: [ 
            path.resolve(__dirname, 'excluded_file_name.js') 
        ],
        enforce: 'post',
        use: { 
            loader: WebpackObfuscator.loader, 
            options: {
                rotateStringArray: true
            }
        }
    }
]
}
