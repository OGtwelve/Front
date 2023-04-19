const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  devServer: {
    port: 8080,
    open: false,
    proxy: {
        '/api': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
  }
})
