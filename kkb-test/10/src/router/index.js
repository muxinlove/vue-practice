import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 通用页面：不需要守卫，可直接访问
export const constRoutes = [
  {
    path: "/login",
    component: () => import("@/views/Home"),
    hidden: true // 导航菜单忽略该项
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    name: "home",
    meta: {
      title: "Home", // 导航菜单项标题
      icon: "cart" // 导航菜单项图标
    }
  },
  {
    path: "/about",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/About.vue"),
    name: "about",
    meta: {
      title: "About", // 导航菜单项标题
      icon: "user" // 导航菜单项图标
    },
    children: [
      {
        path: "a-1",
        component: () =>
          import("@/views/Home.vue"),
        name: "a-1",
        meta: {
          title: "a-1", // 导航菜单项标题
          icon: "cart" // 导航菜单项图标
        },
        children: [
          {
            path: "a-1-1",
            component: () =>
              import("@/views/About.vue"),
            name: "a-1-1",
            meta: {
              title: "a-1-1", // 导航菜单项标题
              icon: "cart" // 导航菜单项图标
            },
          },
          {
            path: "a-1-2",
            component: () => import("@/views/Home.vue"),
            name: "a-1-2",
            meta: {
              title: "a-1-2", // 导航菜单项标题
              icon: "cart" // 导航菜单项图标
            }
          }
        ]
      },
      {
        path: "a-2",
        component: () =>
          import("@/views/About.vue"),
        name: "a-2",
        meta: {
          title: "a-2", // 导航菜单项标题
          icon: "user" // 导航菜单项图标
        }
      }
    ]
  }
]

// 权限页面：受保护页面，要求用户登录并拥有访问权限的角色才能访问
export const asyncRoutes = [
  {
    path: "/about",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/About.vue"),
    name: "about",
    meta: {
      title: "About",
      icon: "denglong",
      roles: ['admin', 'editor']
    },
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constRoutes
});