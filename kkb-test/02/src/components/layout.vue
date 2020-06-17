<template>
  <div>
    <h1>User Settings</h1>
    <Nav />
    <router-view />
    <router-view name="main"></router-view>
    <router-view name="bottom"></router-view>
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss" scoped>
</style>