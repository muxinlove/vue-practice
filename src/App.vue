<template>
  <div id="app">
    阿里云 人机校验
    <nc></nc>
  </div>
</template>

<script>
import Nc from "./components/nc.vue";

export default {
  name: "App",
  components: {
    Nc
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
