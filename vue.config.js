module.exports = {
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
    '/front': {
        target: 'http://apps.yaocaimaimai.com',
      changeOrigin: true
       }
    },
   
  },

}
