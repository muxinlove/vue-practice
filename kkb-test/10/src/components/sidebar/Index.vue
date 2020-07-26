<template>
  <el-menu :default-active="activeMenu">
    <SideBarItem v-for="route in sideMenu" :key="route.name" :item="route" :base-path="route.path"></SideBarItem>
  </el-menu>
</template>

<script>
import SideBarItem from "./SideBarItem";

export default {
  name: "SideBar",
  data() {
    return {
      sideMenu: [
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
              component: () => import("@/views/Home.vue"),
              name: "a-1",
              meta: {
                title: "a-1", // 导航菜单项标题
                icon: "cart" // 导航菜单项图标
              },
              children: [
                {
                  path: "a-1-1",
                  component: () => import("@/views/About.vue"),
                  name: "a-1-1",
                  meta: {
                    title: "a-1-1", // 导航菜单项标题
                    icon: "cart" // 导航菜单项图标
                  }
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
              component: () => import("@/views/About.vue"),
              name: "a-2",
              meta: {
                title: "a-2", // 导航菜单项标题
                icon: "user" // 导航菜单项图标
              }
            }
          ]
        }
      ]
    };
  },
  computed: {
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // 默认激活项
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  },
  components: {
    SideBarItem
  }
};
</script>

<style lang="scss" scoped>
</style>