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
        target: "http://10.2.153.48:3000",
        changeOrigin: true
      },
      "/ajax": {
        target: "http://m.maoyan.com",
        changeOrigin: true
      },
      "/zixun": {
        target: "https://www.zk120.com"
      }
    }
  }
};
