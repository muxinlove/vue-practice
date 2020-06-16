import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router, // Vue.prototype.$router = router
  render: h => h(App),
}).$mount('#app')
