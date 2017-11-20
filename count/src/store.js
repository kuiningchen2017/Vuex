import Vue from 'vue';
import Vuex from 'vuex';
/*
* 用vuex进行状态管理，store是vuex的核心，所以命名为store.js
* 我们这里只有一个变量count需要管理，所以在创建store对象的时候
* 给构造函数传递参数 state下面只有一个count 并且初始化为 0
* */

// 告诉vue声明使用vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 11111118,
  },
  /*
  * 现在所有的状态，也就是变量都放在了store.js中，我们组件如何才能获取到修改后的值呢？
  * 1，vue 提供了注入机制，就是把我们的store 对象注入到根实例中。
  * 然后在所有的子组件中,this.$store 来指向store 对象。
  * 在store.js 中，我们export store, 把store已经暴露出去了。
  * new Vue() 在main.js中，所以直接在main.js 中引入store  并注入即可。
   * */
});
export default store;
