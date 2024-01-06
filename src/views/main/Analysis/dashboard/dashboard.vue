<template>
  <div class="dashboard">
    <el-row :gutter="12">
      <el-col :span="7">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>商品品类数量</span>
            </div>
          </template>
          <PieEchart :data="cateGoodsCount"></PieEchart>
        </el-card>
      </el-col>

      <el-col :span="10">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>商品销量——地图</span>
            </div>
          </template>
          <MapEchart :data="goodsMapData"></MapEchart>
        </el-card>
      </el-col>

      <el-col :span="7">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>商品品类数量——玫瑰图</span>
            </div>
          </template>
          <NightingaleEchart :data="cateGoodsCount"></NightingaleEchart>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="12" class="content-row">
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>商品品类销量——折线图</span>
            </div>
          </template>
          <LineEchart :data="cateGoodsSale"></LineEchart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>商品收藏量——柱状图</span>
            </div>
          </template>
          <BarEchart :data="cateGoodsCollect"></BarEchart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import {
  PieEchart,
  NightingaleEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from "@/base-ui/BasicEchart";

const store = useStore();
store.dispatch("dashboard/getDashboardAction");

// 商品数量
const cateGoodsCount = computed(() => {
  // option.series.data的字段是name和value与接口返回不符 => map处理
  return store.state.dashboard.cateGoodsCount.map((item) => {
    return { name: item.name, value: item.goodsCount };
  });
});

// 商品销量
const cateGoodsSale = computed(() => {
  const xLabels: string[] = [];
  const xValue: any[] = [];
  const goodsSaleData = store.state.dashboard.cateGoodsSale;
  for (const item of goodsSaleData) {
    xLabels.push(item.name);
    xValue.push(item.goodsSale);
  }
  return { xLabels, xValue };
});

// 收藏量
const cateGoodsCollect = computed(() => {
  const xLabels: string[] = [];
  const xValue: any[] = [];
  const goodsFavorData = store.state.dashboard.cateGoodsCollection;
  for (const item of goodsFavorData) {
    xLabels.push(item.name);
    xValue.push(item.goodsFavor);
  }
  return { xLabels, xValue };
});

// 城市销量
const goodsMapData = computed(() => {
  return store.state.dashboard.goodsCitySale.map((item) => {
    return { name: item.address, value: item.count };
  });
});
</script>

<style lang="less" scoped>
.content-row {
  margin-top: 20px;
}
</style>
