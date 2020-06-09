<template>
  <div>
    <button @click="onClick">child2 触发事件</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$bus.$emit("child-click");
    }
  }
};
</script>

<style scoped>
</style>