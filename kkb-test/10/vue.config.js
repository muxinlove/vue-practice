const path = require('path')

const port = 7070
const title = 'vue最佳实践'

module.exports = {
  publicPath: '/best-practice', // 基础URL
  devServer: {
    port
  },
  // 原生webpack选项
  configureWebpack: {
    name: title
  },
  // 链式调用 更细粒度的配置
  chainWebpack(config) {
    // 修改原svg规则
    config.module.rule('svg')
      .exclude.add(resolve('./src/icons'))

    // 添加icons规则处理icons下的svg
    config.module.rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('./src/icons')).end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  }
}

function resolve(dir) {
  return path.resolve(__dirname, dir)
}