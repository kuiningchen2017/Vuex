vuex的核心是store（仓库），它是一个通过vuex.Store构造函数生成的对象。
为什么它会是核心呢？
    因为我们调用这个构造函数创建对象的时候，给它传递参数中包装了 state(状态) mutation(突变) action(行动)
  等核心内容。看下官网的例子：
  const store = new Vue.Store({
    state: {
      count: 0,
    },
    mutations: {
      increment(state) {
        state.count++,
      };
    },
  })

  vuex的思想是当我们在页面点击一个按钮时，它会出发dispatch一个action，action随后会执行(commit)一个
mutation，mutation会立即改变state，state改变以后，我们的页面会获取state中的数据，页面就会发生变化。

  state: 就是我们页面中用到的各种变量。在写vue中，我们经常写{{msg}} msg就是一个状态 因为它变化
页面就会重新渲染。

  用vuex进行状态管理，store是vuex的核心，所以我们创建一个store.js文件，使用vuex之前要告诉vue使用它，
Vue.use(vuex); 我们这里只有一个变量count需要管理，所以在创建store对象的时候，给构造函数传参，state下面
只有一个count，且初始化为0 .

  import Vue from 'vue';
  import Vuex from 'vuex';

  Vue.use(Vuex);

  const store = new Vuex.store({
    state: {
      count: 0,
    }
  })
  export default store

  现在所有的状态都放入了store.js中了，那么我们的组件怎么才能获取到状态并且修改值呢？
  vue提供了注入机制，就是把我们的store对象注入到根实例中（入口js文件main.js），
vue的根实例就是new Vue()构造函数，然后在所有子组件中 this.$store来指向store对象
如果我们把store.js里面的count变为8，页面中就变为了8

  <template>
    <div>
      <h3>
        Count is {{count}}
      </h3>
    </div>
  </template>

  <script>
    export default {
      computed: {
        count() {
          return this.$store.count;
        },
      },
    };
  </script>

  通过computed属性可以获取到状态值，但是组件中每一个属性（如：count）都是函数，
那么如果有10个，就要写10个函数，且重复写10遍 return this.$store.count; 不方便
vue提供了mapState函数，它把state直接映射到我们的组件中
  当然使用mapState之前要先引入它，它两种用法，或接受一个对象，或接受一个数组，
  对象用法如下：
  <script>
    import {mapState} from 'vuex'; // 引入mapState

    export default {
      // 下面两种方法都可以
      computed: mapState({
        count: function(state) {
          state.count
        }
        // 组件内的每一个属性函数都会获得一个默认参数state，然后通过state直接获取它的属性更简洁
        count: (state) => state.count
      })
    }
  </script>
