import Vue from 'vue'
import Notice from '../components/comps/notice.vue';


// render
// function create(component, props) {
//   // 创建vm实例
//   const vm = new Vue({
//     render(h) {
//       // h createElement
//       return h(component, { props })
//     }
//   }).$mount() // 只会创建dom 不会挂载

//   document.body.appendChild(vm.$el)

//   const comp = vm.$children[0]
//   comp.remove = () => {
//     document.body.removeChild(vm.$el)
//     vm.$destroy()
//   }
//   return comp
// }

// Vue.extend 继承
function create(component, props) {
  const Ctro = Vue.extend(component)
  const comp = new Ctro({ propsData: props }).$mount()
  document.body.appendChild(comp.$el)

  comp.remove = () => {
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }
  return comp
}

export default {
  install(Vue) {
    Vue.prototype.$notice = options => {
      return create(Notice, options)
    }
  }
};
