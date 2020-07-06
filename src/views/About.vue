<template>
  <div class="about">
    <div>This is an about page</div>
  </div>
</template>

<script>
export default {
  name: "About",
  asyncData({ store }) {
    return store.dispatch("getCount");
  }
};
</script>

