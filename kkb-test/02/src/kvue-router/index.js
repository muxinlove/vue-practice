import View from './krouter-view.js'
import Link from './krouter-link.js'

let Vue

export default class KVueRouter {
  constructor(options) {
    this.$options = options

    // 需要创建响应式的current属性
    // 工具 响应式
    Vue.util.defineReactive(this, 'current', '/')

    // 监控url变化
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    // 创建一个路由映射表
    this.routeMap = {}
    options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })
  }

  onHashChange() {
    console.log(window.location.hash);
    this.current = window.location.hash.slice(1)
  }
}

KVueRouter.install = (_Vue) => {
  // 保存构造函数 在KVueRouter内部使用
  Vue = _Vue

  // 混入
  // 挂载$router
  // 怎么获取根实例上的router选项
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }

    }
  })

  // 任务2 实现2个全局组件 router-link router-view
  Vue.component('router-link', Link)
  Vue.component('router-view', View)
}