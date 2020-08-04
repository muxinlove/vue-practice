<template>
  <div>
    <p class="text">从不同方向使鼠标指针移过下面的内容</p>
    <p>↓</p>
    <span>→</span>
    <div class="block">
      <div class="block-hover">上</div>
      <div class="block-hover">右</div>
      <div class="block-hover">下</div>
      <div class="block-hover">左</div>
      <div class="block_content">Hover me!</div>
    </div>
    <span>←</span>
    <p>↑</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
body {
  padding: 2em;
  text-align: center;
  .block {
    position: relative;
    display: inline-block;
    width: 10em;
    height: 10em;
    vertical-align: middle;
    overflow: hidden;
    .block-hover {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: all 0.3s ease;
      opacity: 0;
      &:nth-child(1) {
        background: red;
        top: -90%;
      }
      &:nth-child(2) {
        background: orange;
        left: 90%;
      }
      &:nth-child(3) {
        background: blue;
        top: 90%;
      }
      &:nth-child(4) {
        background: green;
        left: -90%;
      }
      &:hover {
        opacity: 1;
        top: 0;
        left: 0;
      }
    }
    .block_content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 10em;
      background: #333;
      color: #fff;
    }
  }
}
</style>