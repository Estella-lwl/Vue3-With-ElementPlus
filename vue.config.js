const path = require("path");

module.exports = {
  outputDir: "./build",
  // publicPath: './',
  devServer: {
    proxy: {
      "^/api": {
        target: "https://coderwhy.org/dev",
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
