<template>
  <div class="bar-echart">
    <BasicEchart :option="barOption"></BasicEchart>
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
});

const barOption = computed(() => {
  return {
    xAxis: {
      data: props.data.xLabels,
      axisLabel: {
        inside: true, // 文本显示柱中
        color: "#fff"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#999"
      }
    },
    dataZoom: [
      {
        type: "inside"
      }
    ],
    series: [
      {
        type: "bar",
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" }
            ])
          }
        },
        data: props.data.xValue
      }
    ]
  };
});
</script>

<style scoped></style>
