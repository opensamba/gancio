process.env.VUE_APP_API = process.env.NODE_ENV === 'production' ? process.env.BASE_URL || 'http://localhost:9000' : 'http://localhost:9000'
process.env.VUE_APP_TITLE = process.env.TITLE || 'Gancio'
process.env.VUE_APP_DESCRIPTION = process.env.DESCRIPTION || 'Event manager for radical movements'

module.exports = {
  publicPath: process.env.BASE_URL,
  devServer: {
    disableHostCheck: true
  },
  transpileDependencies: [
    /\bvue-awesome\b/,
    'vuex-persist'
  ]
}
