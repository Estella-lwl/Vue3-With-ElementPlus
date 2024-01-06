<template>
  <div class="pie-echart">
    <BasicEchart :option="pieOption"></BasicEchart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import BasicEchart from "./echart.vue";
import { IDataType } from "./types";

const props = defineProps({
  data: {
    // type: IDataType,
    required: true,
    default: () => ({})
  }
});

const pieOption = computed(() => {
  return {
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "horizontal",
      left: "center"
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: "50%",
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
});
</script>

<style scoped></style>
