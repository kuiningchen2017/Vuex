<template>
  <div>
    <h3>count is {{count}}</h3>
    <p>组件自己的内部计算属性 {{ localComputed }}</p>
  </div>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    // computed: {
      /*
      * 在子组件中，用computed属性，computed属性是根据它的依赖自动更新的
      * 所以只要把store的state发生变化，它就会自动变化
      * */
      // count() {
        // return this.$store.state.count;
      // },
    // }
    /*
     * 通过computed属性可以获取到状态值，但是组件中的每一个属性（如：count）都是函数
     * 如果有10个，那么就要写10个函数，并且重复写10次  return this.$store.state.xxx; 不方便
     * 所以 vue提供了mapState函数，它把state直接映射到我们的组件中
     * （在数组中 map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。）
     * （forEach（）方法对数组的每个元素执行一次提供的函数 场景：为一些相同的元素，绑定事件处理器！）
     * */
    // 当然使用mapState之前要引入它 import {mapState} from "vuex";
    // computed: mapState({
      // 组件内的每一个属性函数都会获得一个默认参数state 然后通过state直接获取它的属性更简洁
      // count: state => state.count,
      // count : function (state) {
        // return state.count;
      // }

      // ’count‘ 直接映射到state对象中的count 它相当于 this.$store.state.count
      // count: 'count'
    // }),
    /* 还有最后一个问题 如果我们组件内部也有computed属性怎么办？它又不属于mapState中
    * 那就用到了对象分割  把mapState函数生成的对象再分割成一个一个的，就像最开始的时候，我们一个一个罗列计算属性
    * 有10个属性 我们就写10个函数
    * es6中的... 就是分割用的，但是只能分割数组。
    * 在ECMAScript stage-3 阶段它可以分割对象，所以这时还要用到babel-stage-3;
     * npm install babel-preset-stage-3 --save-dev,
     * 安装完全后，一定不要忘记在babelrc 就是babel 的配置文件中，写入stage-3,
    * */
    computed: {
      localComputed() {
        return this.count + 10;
      },
      ...mapState({
        count: state => state.count,
      }),
    }
  };
</script>
<style scoped>
  h3 {
    font-size: 30px;
  }
</style>
