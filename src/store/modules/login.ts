import { Module } from "vuex"; // 为了与TS结合使用，使用vuex4时需要从vuex中引入Modules。
import { ILoginStore } from "./types";
import { IRootStore } from "../types";

// 划分模块后，每个模块中Module都要有两个泛型，分别代表：当前模块和根模块的state类型。
const loginModule: Module<ILoginStore, IRootStore> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {}
    };
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log("执行accountLoginAction", payload);
    }
  }
};

export default loginModule;
