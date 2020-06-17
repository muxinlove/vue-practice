export default {
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
}