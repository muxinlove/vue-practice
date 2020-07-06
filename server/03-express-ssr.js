// 获取express实例
const express = require('express')
const Vue = require('vue')
const path = require('path')
const favicon = require('serve-favicon')


// 2.获取渲染器实例
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer()

const server = new express()

// 处理favicon
server.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))

// 路由
server.get('*', (req, res) => {
  console.log('url', req.url);


  // 1.创建vue实例
  const app = new Vue({
    template: '<i>{{msg}}</i>',
    data() {
      return {
        msg: "hello world"
      }
    }
  })

  // 3.用渲染器渲染vue实例
  renderer.renderToString(app).then(html => {
    res.send(html)
  }).catch(e => {
    res.status(500)
    res.send('internal server error')
  })
})

// 监听端口
server.listen('3000', () => {
  console.log('listen 3000 port success');
})