import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user"; // 引入各个模块的代码
import getters from "./getters";
if (!window.VueRouter) {
  Vue.use(Vuex);
}

export default new Vuex.Store({
  getters,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user
  }
});
