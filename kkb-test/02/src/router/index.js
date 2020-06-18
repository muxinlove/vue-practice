import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '../kvue-router/index.js'
import Home from '../components/home.vue'
// import Layout from '../components/layout.vue'

// 1.应用插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/about.vue'),
    children: [
      {
        path: 'info',
        component: () => import('../components/info.vue')
      }
    ]
  },
  // {
  //   path: '/user/:id',
  //   name: 'user',
  //   component: () => import(/* webpackChunkName: "user" */ '../components/user.vue'),
  //   children: [
  //     {
  //       path: 'profile',
  //       component: () => import(/* webpackChunkName: "profile" */ '../components/profile.vue')
  //     },
  //     {
  //       path: 'posts',
  //       component: () => import(/* webpackChunkName: "posts" */ '../components/posts.vue')
  //     },
  //     {
  //       path: 'name',
  //       components: {
  //         default: () => import(/* webpackChunkName: "posts" */ '../components/posts.vue'),
  //         main: () => import(/* webpackChunkName: "main" */ '../components/main.vue'),
  //         bottom: () => import(/* webpackChunkName: "bottom" */ '../components/bottom.vue'),
  //       }
  //     },
  //   ]
  // }
]

// const routes = [
//   {
//     path: '/app',
//     name: 'app',
//     component: Layout,
//     children: [
//       {
//         path: 'posts',
//         components: {
//           default: () => import(/* webpackChunkName: "posts" */ '../components/posts.vue'),
//           main: () => import(/* webpackChunkName: "main" */ '../components/main.vue'),
//           bottom: () => import(/* webpackChunkName: "bottom" */ '../components/bottom.vue'),
//         }
//       },
//       {
//         path: 'profile',
//         component: () => import(/* webpackChunkName: "profile" */ '../components/profile.vue'),
//       },
//     ]
//   }
// ]

// 2 创建实例
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router