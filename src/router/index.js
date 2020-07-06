import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

// 修改1 工厂函数 服务端面向多个客户 保证每个客户的路由都是独立的
export function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/about',
        component: About
      }
    ]
  })
}
