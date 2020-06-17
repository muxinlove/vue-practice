<template>
  <div>
    <div>count:{{count}}</div>
    <div>doubleCount:{{doubleCount}}</div>
    <button @click="add">add</button>
    <br />
    <button @click="asyncAdd">async add</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    doubleCount() {
      return this.$store.getters.doubleCount;
    }
  },
  methods: {
    add() {
      this.$store.commit("add");
    },
    asyncAdd() {
      this.$store.dispatch("add");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>