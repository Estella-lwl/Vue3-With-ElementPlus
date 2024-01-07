import { Module } from "vuex";
import { IRootStore } from "../types";
import { IDashboardState } from "./types";
import {
  getCateGoodsCount,
  getCateGoodsSale,
  getCateGoodsCollection,
  getGoodsCitySale
} from "@/api/main/analysis/dashboard";

// Module泛型需传两个参数
const dashboardModule: Module<IDashboardState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      cateGoodsCount: [],
      cateGoodsSale: [],
      cateGoodsCollection: [],
      goodsCitySale: []
    };
  },

  mutations: {
    changeCateGoodsCount(state, list) {
      state.cateGoodsCount = list;
    },
    changeCateGoodsSale(state, list) {
      state.cateGoodsSale = list;
    },
    changeCateGoodsCollection(state, list) {
      state.cateGoodsCollection = list;
    },
    changeGoodsCitySale(state, list) {
      state.goodsCitySale = list;
    }
  },

  actions: {
    async getDashboardAction({ commit }) {
      // 发起网络请求获取上面数据
      const goodsCountData = await getCateGoodsCount();
      commit("changeCateGoodsCount", goodsCountData.data);

      const goodsSaleData = await getCateGoodsSale();
      commit("changeCateGoodsSale", goodsSaleData.data);

      const goodsCollectionData = await getCateGoodsCollection();
      commit("changeCateGoodsCollection", goodsCollectionData.data);

      const goodsCitySaleData = await getGoodsCitySale();
      commit("changeGoodsCitySale", goodsCitySaleData.data);
    }
  }
};

export default dashboardModule;
