// 入口主文件
import Vue from 'vue'
import App from './App.vue'
// 引入vuex的store对象
import store from './store.js';

new Vue({
  el: '#app',
  store, // 注入到根实例当中
  render: h => h(App)
});
