/* 引入时顺便起别名因为自定义的也叫这个： */
import { createStore, Store, useStore as useVuexStore } from "vuex"; // 其中Store是vuex提供的一个类型
import { IRootStore, IStoreType } from "./types";
import login from "./modules/login";
import main from "./modules/main";

// 使createStore接收一个泛型：
const store = createStore<IRootStore>({
  state() {
    // 最终要返回个对象：
    return {
      name: "polariis",
      age: 1
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  // 将所有子模块统一在这里注册：
  modules: {
    login,
    main
  }
});

export function useStore(): Store<IStoreType> {
  // 将vuex的useStore起别名后再return出去，而在这个过程中已经给它明确制定了类型：
  return useVuexStore();
}

// vuex在刷新后数据会消失，所以数据持久化：
export function setupStore() {
  //调用login中的action：
  store.dispatch("login/loginLastAction");
}

export default store;
