<template>
  <div id="app">
    <SideBar></SideBar>
    {{$route.path}}
    <router-view></router-view>
    <!-- <div>hello vue</div>
    <div>
      <svg-icon icon-class="cart"></svg-icon>
      <svg-icon icon-class="user"></svg-icon>
    </div>-->
  </div>
</template>

<script>
import SideBar from "@/components/sidebar/Index.vue";
export default {
  name: "App",
  components: {
    SideBar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
