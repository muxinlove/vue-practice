<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  // 类似于data
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate(cb) {
      // [resultPromise]
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>