import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '@/icons/index.js'
import router from '@/router/index.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
