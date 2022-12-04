import { createStore } from "vuex";
import { IRootStore } from "./types";
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

export default store;
