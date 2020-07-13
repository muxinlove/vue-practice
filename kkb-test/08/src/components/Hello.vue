<template>
  <div>
    <div>属性</div>
    <div>{{msg}}</div>
    <div>特性列表</div>
    <div>
      <input type="text" @keyup.enter="addFeature" />
    </div>
    <ul>
      <li v-for="feature in features" :key="feature.id">{{feature.name}}</li>
    </ul>
    <div>总共: {{count}}</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from "vue-property-decorator";
// import { getFeature } from "../api/feature";
interface Feature {
  id: number;
  name: string;
}

@Component
export default class Hello extends Vue {
  // Prop属性装饰器
  // 括号中的配置是给vue的
  // 变量附近的配置是给ts的
  // ! -> 一定赋值断言 告诉编译器别操心了
  @Prop({ type: String, required: true })
  msg!: string;

  // 属性就是data
  features: Feature[] = [];

  // 函数就是method
  // 如何和生命周期函数同名 那就是生命周期
  created() {
    // this.features = [{ id: 0, name: "web" }];
    // getFeature().then(res => {
    //   this.features = res.data;
    // });
    this.$axios.get<Feature[]>("/api/list").then(res => {
      this.features = res.data;
    });
  }

  //函数直接作为回调
  //Emit修饰的函数就是自定义事件
  // Emit('abc') 可以另外指定自定义事件名
  //如果有返回值 则作为事件参数
  //等同于 this.$emit('add-feature', feature)
  //若没有返回值形参将作为事件参数
  @Emit()
  addFeature(e: KeyboardEvent) {
    // inp 类型 EventTarget
    const inp = e.target as HTMLInputElement;
    const feature = {
      id: this.features.length + 1,
      name: inp.value
    };
    this.features.push(feature);
    inp.value = "";
    return feature;
  }

  // get set
  // getter计算属性
  get count() {
    return this.features.length;
  }

  @Watch("msg")
  onMsgChange(val: string, oldVal: any) {
    console.log("val", val, "oldVal", oldVal);
  }
}
</script>
<style lang="scss" scoped>
</style>