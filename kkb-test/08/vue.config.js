const path = require('path');

module.exports = {
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.vue', '.json', '.ts'],
      alias: {
        '@': path.resolve(__filename, 'src')
      }
    }
  },
  devServer: {
    before(app) {
      app.get('/api/list', (req, res) => {
        res.json([
          { id: 1, name: "类型注解" },
          { id: 2, name: "编译型语言" }])
      })
    }
  }
}