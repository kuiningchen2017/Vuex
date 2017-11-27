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
    count: 18,
  },
  /*
  * 现在所有的状态，也就是变量都放在了store.js中，我们组件如何才能获取到修改后的值呢？
  * 1，vue 提供了注入机制，就是把我们的store 对象注入到根实例中。
  * 然后在所有的子组件中,this.$store 来指向store 对象。
  * 在store.js 中，我们export store, 把store已经暴露出去了。
  * new Vue() 在main.js中，所以直接在main.js 中引入store  并注入即可。
   * */

/*
* mutation 在vue中只有mutation才能改变state
* 每一个mutation都有一个名字和一个处理函数 因为只有mutation才能改变state，
* 所以处理函数自动会获取一个默认参数state
* action去commit一个mutation，它要指定commit哪个mutation 所以mutation至少需要一个名字
* commit mutation之后 要做什么事情 那就需要给他指定一个处理函数
* 名字 + 处理函数 就构成了 mutation
* */
  mutations: {
    // +1
    // Vue建议我们mutation类型用大写常量表示
    INCREMENT: function(state) {
      state.count++;
    },
    // -1
    DECREMENT(state) {
      state.count--;
    },
  },
  /*
  * action去commit mutations 所以还要定义action. store.js 里面添加actions.
  * action 和 mutation 的定义是类似的  我们要dispatch(派发)一个action
  * 所以actions肯定也要有一个名字
  * dispatch action之后它要做事情 就是commit mutation
  * 所以还要给他指定一个函数
  * 因为要commit mutation
  * 所以函数也会自动获得一个默认参数 context 它是一个store的实例
  * 通过它就可以获得store实例对象的属性和方法
  * 如context.state 就会获取到state属性 context.commit就会执行commit命令
  * */
  actions: {
    increment(context) {
      context.commit('INCREMENT');
    },
    decrement(context) {
      context.commit('DECREMENT');
    },
    /*
     * 可以简写一下 因为函数的参数context是一个对象 ， 函数中用的是对象的一个方法
     * 我们可以通过结构赋值直接获取到该方法
     * */
    actions: {
      increment({commit}) {
        commit('INCREMENT');
      },
      decrement({commit}) {
        commit('DECREMENT');
      },
    },
  }
  /*
  * dispatch action
  * 现在就剩下dispatch action了，那么什么时候dispatch action呢？
  * 只有当我们点击按钮的时候，给按钮添加click事件，
  * 在click事件处理函数中 dispatch action
  * 打开increment.vue组件 给两个按钮添加click事件
  * */
});
export default store;
