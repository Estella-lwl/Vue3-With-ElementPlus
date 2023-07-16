const path = require("path");

module.exports = {
  outputDir: "./build",
  // publicPath: './',
  devServer: {
    proxy: {
      "^/api": {
        target: "http://121.37.196.89:8880",
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
