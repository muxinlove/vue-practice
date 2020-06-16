<template>
  <div>
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
import emitter from "../../mixins/emitter.js";

export default {
  inheritAttrs: false,
  name: "KInput",
  componentName: "KInput",
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    }
  },
  mixins: [emitter],
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);

      // 校验
      // this.$parent.$emit("validate");
      this.dispatch("KFormItem", "validate");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>