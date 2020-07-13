import Vue from "vue";
import { AxiosInstance } from "axios";

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}


// 模块扩展vue 避免this.$axios报错
declare module "vue/types/vue" {
  interface Vue {
    $axios: AxiosInstance;
  }
}

// 扩展ComponentOptions 避免引入store router报错
// import VueRouter from "vue-router";
// import { Store } from "vuex";
// declare module "vue/types/options" {
//   interface ComponentOptions<V extends Vue> {
//     router?: VueRouter;
//     store?: Store<any>;
//   }
// }
