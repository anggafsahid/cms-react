const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


// vue.config.js
module.exports = {
  publicPath: '/', // This ensures the app loads from the root path and doesn't get misconfigured.
  devServer: {
    proxy: {
      '/api': {
        target: 'https://cms-headless-production.up.railway.app',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};


module.exports = {
  devServer: {
    proxy: 'https://cms-headless-production.up.railway.app',
  },
};