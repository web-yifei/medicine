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
<<<<<<< HEAD
      "/mobile":{
        target:"http://gateway.fangkuaiyi.com",
        changeOrigin: true
      }
=======
>>>>>>> 1aa31052cb6c7d9b74305dcfe8afed6b0fefb38c
    }
  }
};
