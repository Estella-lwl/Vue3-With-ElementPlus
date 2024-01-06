<template>
  <div class="nightingale-echart">
    <BasicEchart :option="nightingaleOption"></BasicEchart>
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

const nightingaleOption = computed(() => {
  return {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: [10, 100],
        center: ["50%", "45%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 10
        },
        data: props.data
      }
    ]
  };
});
</script>

<style scoped></style>
