// 获取express实例
const express = require('express')
// const Vue = require('vue')
const path = require('path')
const favicon = require('serve-favicon')
const fs = require('fs')


// 2.获取渲染器实例
const { createBundleRenderer } = require('vue-server-renderer')
// 参数1 服务端打包文件
const bundle = require(resolve('../dist/server/vue-ssr-server-bundle.json'))

// 参数2 客户端相关
const template = fs.readFileSync(resolve("../public/index.html"), "utf-8");
const clientManifest = require(resolve('../dist/client/vue-ssr-client-manifest.json'))

const renderer = createBundleRenderer(bundle, {
  runInNewContext: false, // https://ssr.vuejs.org/zh/api/#runinnewcontext 
  template, // 宿主文件 
  clientManifest // 客户端清单
})

const server = express();

// 处理favicon
server.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))

// 静态资源
server.use(express.static(resolve('../dist/client'), { index: false }))

// 路由
server.get('*', async (req, res) => {
  console.log('url', req.url);

  // 上下文
  const context = {
    title: 'ssr test',
    url: req.url
  }
  // 返回
  try {
    const html = await renderer.renderToString(context)
    res.send(html)
  } catch (error) {
    res.status(500)
    res.send('服务端渲染错误')
  }

})

// 监听端口
server.listen('3000', () => {
  console.log('listen 3000 port success');
})

function resolve(dir) {
  return path.resolve(__dirname, dir)
}