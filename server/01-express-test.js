// 获取express实例
const express = require('express')

const app = new express()

// 路由
app.get('/', (req, res) => {
  res.send('<strong>hello vue ssr</strong>')
})

// 监听端口
app.listen('3000', () => {
  console.log('listen 3000 port success');
})