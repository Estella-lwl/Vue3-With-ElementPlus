<template>
  <div class="line-echart">
    <BasicEchart :option="lineOption"></BasicEchart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import * as echarts from "echarts";
import BasicEchart from "./echart.vue";
import { IDataType } from "./types";

const props = defineProps({
  data: {
    // type: IDataType,
    required: true,
    default: () => ({})
  }
  // xLabels: {
  //   type: Array,
  //   required: true
  // },
  // xValue: {
  //   type: Array,
  //   required: true
  // }
});

const lineOption = computed(() => {
  return {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    toolbox: {
      feature: {
        // saveAsImage: {}
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true // 布局是否包含label
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: props.data.xLabels
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(55, 162, 255)"
            },
            {
              offset: 1,
              color: "rgb(116, 21, 219)"
            }
          ])
        },
        emphasis: {
          focus: "series"
        },
        data: props.data.xValue
      }
    ]
  };
});
</script>

<style scoped></style>
