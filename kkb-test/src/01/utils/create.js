import Vue from 'vue'

function create(component, props) {
  // 创建vm实例
  const vm = new Vue({
    render(h) {
      // h createElement
      return h(component, { props })
    }
  }).$mount() // 只会创建dom 不会挂载

  document.body.appendChild(vm.$el)

  const comp = vm.$children[0]
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}
export default create;
