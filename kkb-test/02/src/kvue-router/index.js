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
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        default: ''
      }
    },
    // template 不能使用的原因是 需要编译器的存在，webpack是一个纯运行时的环境
    render(h) {
      // h(tag, data, children)
      // 使用 <router-link to="about">xxxx</router-link>
      // 实际 <a href="#/about">xxx</a>

      // this.$slots.default 插槽
      return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
      // vue-cli 内置了jsx语法的解析 babel
      // return <a href={'#' + this.to}>{this.$slots.default}</a>
    }
  })


  Vue.component('router-view', {
    render(h) {
      // 获取当前path所对应的component
      // $options router 实例
      const component = this.$router.$options.routes.find(route => route.path === this.$router.current).component
      return h(component)
    }
  })
}