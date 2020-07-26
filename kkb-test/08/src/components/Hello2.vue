<template>
  <div>{{msg}}</div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Hello2 extends Vue {
  @Prop({ required: true, type: String })
  msg: String;
}
</script>
<style lang="scss" scoped>
</style>