import { Module } from "vuex"; // 为了与TS结合使用，使用vuex4时需要从vuex中引入Modules。
import { ILoginState } from "./types";
import { IRootStore } from "../types";

// 划分模块后，每个模块中Module都要有两个泛型，分别代表：当前模块和根模块的state类型。
const loginModule: Module<ILoginState, IRootStore> = {
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
      // 1. 登录逻辑，发送请求：
    }
  }
};

export default loginModule;
