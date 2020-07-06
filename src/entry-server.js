// 调用main里的工厂函数 创建vue实例
import { createApp } from './main.js'

// 该函数会被express路由处理函数调用 用于创建vue实例
export default context => {
  // 返回promise 确保异步的操作都结束
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp(context)

    // 显示首屏处理
    // hash/history/abstract(node端)
    router.push(context.url)

    // 检测路由就绪事件
    router.onReady(() => {
      // 获取匹配的路由组件数组
      const matchedComponents = router.getMatchedComponents()

      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      Promise.all(
        matchedComponents.map(Component => {
          if (Component.asyncData) {
            return Component.asyncData({
              store,
              route: router.currentRoute
            })
          }
        })
      ).then(() => {
        // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML
        context.state = store.state
        resolve(app)
      })
    }, reject)
  })
}