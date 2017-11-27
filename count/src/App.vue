<template>
  <div id="app">
    <img src="./assets/logo.png">
    <display></display>
    <increment></increment>
  </div>
</template>

<script>
  // 组件需要别的组件时 记得import引入 还有下面的components配置
  import display from './dispaly.vue';
  import increment from './increment.vue';
export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    display,
    increment,
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
