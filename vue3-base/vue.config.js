const path = require('path')

module.exports = {
  devServer: {
    // 监听端口
    port: 8090
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}
