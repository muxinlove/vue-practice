<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/user/1">User:1</router-link>
    </div>
    <!-- 出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
