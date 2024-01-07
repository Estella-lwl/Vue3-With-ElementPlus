const path = require("path");

module.exports = {
  outputDir: "./build",
  // publicPath: './',
  devServer: {
    proxy: {
      "^/api": {
<<<<<<< HEAD
        target: "https://coderwhy.org/dev",
=======
        target: "http://121.37.196.89:8880",
>>>>>>> 8c2587a3a853b6adb111249819ae21083ba3a26a
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components"
      }
    }
  }
};
