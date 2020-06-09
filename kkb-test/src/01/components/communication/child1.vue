<template>
  <div>child1 监听事件</div>
</template>

<script>
export default {
  created() {
    // $bus 寄存在prototype上 发布订阅者是同一个
    this.$bus.$on("child-click", () => {
      console.log("child-click emit1");
    });
    this.$bus.$on("child-click", () => {
      console.log("child-click emit2");
    });
  }
};
</script>

<style scoped>
</style>