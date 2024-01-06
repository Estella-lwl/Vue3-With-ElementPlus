import * as echarts from "echarts";
import chinaMapData from "@/base-ui/BasicEchart/src/data/china.json";

echarts.registerMap("china", chinaMapData); // 注册地图

export default function (el: HTMLElement) {
  const echartsInstance = echarts.init(el);

  const setOption = (options: echarts.EChartsOption) => {
    echartsInstance.setOption(options);
  };

  // echarts缩放：监听；调用echarts实例的resize。
  window.addEventListener("resize", () => {
    echartsInstance.resize();
  });

  const reSize = () => {
    echartsInstance.resize();
  };

  return {
    echartsInstance,
    setOption,
    reSize
  };
}
