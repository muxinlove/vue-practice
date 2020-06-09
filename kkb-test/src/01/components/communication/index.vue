<template>
  <div>
    <child1></child1>
    <child2></child2>
  </div>
</template>

<script>
import Child1 from "./child1.vue";
import Child2 from "./child2.vue";

export default {
  name: "index",
  components: {
    Child1,
    Child2
  }
};
</script>

<style lang="scss" scoped>
</style>