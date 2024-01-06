<template>
  <div class="echart-container">
    <div ref="echartRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, watchEffect } from "vue";
import useEchart from "@/hooks/useEchart";

const props = defineProps({
  width: {
    type: String,
    default: "100%"
  },
  height: {
    type: String,
    default: "360px"
  },
  option: {
    type: Object,
    require: true
  }
});

const echartRef = ref<HTMLElement>();
onMounted(() => {
  const { setOption } = useEchart(echartRef.value);
  // props.option每次改变则调用setOption
  watchEffect(() => {
    setOption(props.option);
  });
});
</script>

<style scoped></style>
