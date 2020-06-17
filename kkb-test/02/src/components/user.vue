<template>
  <div>
    <div>user page</div>
    <router-view></router-view>
    <router-view name="main"></router-view>
    <router-view name="bottom"></router-view>
  </div>
</template>

<script>
export default {
  name: "user",
  mounted() {
    console.log("params", this.$route.params);
  }
};
</script>

<style lang="scss" scoped>
</style>