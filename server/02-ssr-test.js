// 1.创建vue实例
const Vue = require('vue')
const app = new Vue({
  template: '<i>hello vue ssr</i>'
})
// 2.获取渲染器实例
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer()

// 3.用渲染器渲染vue实例
renderer.renderToString(app).then(html => {
  console.log('html', html);

}).catch(e => {
  console.log('e', e);

})