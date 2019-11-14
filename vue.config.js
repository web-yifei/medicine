module.exports = {
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      "/front": {
        target: "http://apps.yaocaimaimai.com",
        changeOrigin: true
      },
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
      },
      "/ajax": {
        target: "http://m.maoyan.com",
        changeOrigin: true
      },
    }
  }
};
