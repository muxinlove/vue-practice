<template>
  <div class="home">
    <div>this is a home page</div>
    <h2 @click="$store.commit('add')">{{$store.state.count}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  asyncData({ store }) {
    return store.dispatch("getCount");
  }
};
</script>
