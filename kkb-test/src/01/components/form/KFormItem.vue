<template>
  <div>
    <!-- label -->
    <label v-if="label">{{label}}</label>
    <!-- input -->
    <slot></slot>
    <!-- 校验规则 -->
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
// Async-validator
import Schema from "async-validator";

export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      error: ""
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      // 规则
      const rules = this.form.rules[this.prop];
      // 值
      const value = this.form.model[this.prop];
      // 校验描述对象
      const description = { [this.prop]: rules };
      // schema实例
      const schema = new Schema(description);
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.error = errors[0].message;
        } else {
          this.error = "";
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>