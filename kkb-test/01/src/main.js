import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import Bus from '@/utils/eventBus.js'
// Vue.prototype.$bus = new Bus()

import create from './01/utils/create.js.js
// Vue.prototype.$create = create

Vue.use(create)

new Vue({
  render: h => h(App),
}).$mount('#app')
