<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Hello msg="msgggg" @add-feature="onAddFeature"></Hello>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hello from "./components/Hello.vue";
interface Feature {
  id: number;
  name: string;
}

@Component({
  components: {
    Hello
  }
})
export default class App extends Vue {
  onAddFeature(f: Feature) {
    console.log("新增:", f.name);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
