import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // state 定义公共的数据
  state: {
    count: 0,
  },
  // getters 只对state中的数据起到包装的作用，并不会修改state中的任何数据，相当于计算属性
  getters: {
    showNum(state) {
      return "当前最新的数量是【" + state.count + "】";
    },
  },
  // 只有 mutations 中定义的函数，才有权力修改 state 中的数据
  mutations: {
    // 不要再mutations中执行异步操作，不允许
    add(state, num) {
      state.count += num;
    },
    sub(state) {
      state.count--;
    },
    sun(state, num) {
      state.count -= num;
    },
  },
  // actions 专门处理异步操作的
  actions: {
    addAsync(context) {
      setTimeout(() => {
        // 在actions 中，不能直接修改state中的数据，
        // 必须同过 context.commit() 触发某个 mutation 才行
        context.commit("sub");
      }, 1000);
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit("add", step);
      }, 1000);
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit("sub");
      }, 1000);
    },
  },
  // modules，可以让每一个模块拥有自己的
  // state、mutation、action、getters，
  // 使得结构非常清晰，方便管理；如果所有的状态或者方法都写在一个store里面，将会变得非常臃肿，难以维护。
  modules: {},
});
