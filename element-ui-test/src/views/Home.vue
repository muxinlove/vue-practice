<template>
  <div class="home">
    <!-- <HelloWorld msg="hello world vue" /> -->
    <!-- basic -->
    <Basic />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Basic from "@/components/Basic.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Basic
  }
};
</script>
