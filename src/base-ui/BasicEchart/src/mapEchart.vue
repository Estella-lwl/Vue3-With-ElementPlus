<template>
  <div class="bar-echart">
    <BasicEchart :option="mapOption"></BasicEchart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, withDefaults } from "vue";
import BasicEchart from "./echart.vue";
import { convertMapGeo } from "@/utils/convertMapGeo";
import { IDataType } from "./types";

// props default value
const props = withDefaults(
  defineProps<{
    data: IDataType[];
  }>(),
  {}
);

const mapOption = computed(() => {
  return {
    // backgroundColor: "#fff",
    title: {
      text: "全国销量统计",
      left: "center",
      textStyle: {
        color: "#fff"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: function (params: any) {
        return params.name + " : " + params.value[2];
      }
    },
    visualMap: {
      min: 0,
      max: 60000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ["高", "低"],
      inRange: {
        color: ["rgb(70, 240, 252)", "rgb(250, 220, 46)", "rgb(245, 38, 186)"]
      },
      textStyle: {
        color: "#fff"
      }
    },
    // 地理编码
    geo: {
      map: "china", // 基于china的地理编码
      roam: "scale",
      emphasis: {
        areaColor: "#f4cccc",
        borderColor: "rgb(9, 54, 95)",
        itemStyle: {
          areaColor: "#f4cccc"
        }
      }
    },
    series: [
      // 地图数据
      {
        name: "销量",
        type: "scatter",
        coordinateSystem: "geo", // 根据经纬度显示对应数据
        data: convertMapGeo(props.data), // 经纬度转化
        symbolSize: 12,
        emphasis: {
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1
          }
        }
      },
      // 绘制地图
      {
        type: "map",
        map: "china",
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
  };
});
</script>

<style scoped></style>
