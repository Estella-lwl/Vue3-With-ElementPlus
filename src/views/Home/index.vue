<template>
  <div>
    <PageSearch :form-config="formConfig"></PageSearch>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formConfig } from "./config/search.config";
import PageSearch from "@/components/PageSearch";

export default defineComponent({
  components: { PageSearch },
  setup() {
    return {
      formConfig
    };
  }
});
//   {
//     type: "input",
//     label: "用户名",
//     // width: 200,
//     rules: [],
//     placeholder: "请输入用户名"
//   },
//   {
//     type: "password",
//     label: "密码",
//     // width: 90,
//     rules: [],
//     placeholder: "请输入密码"
//   },
//   {
//     type: "select",
//     label: "性别",
//     // width: 90,
//     rules: [],
//     placeholder: "请选择性别",
//     options: [
//       {
//         title: "q",
//         value: "0"
//       },
//       {
//         title: "w",
//         value: "1"
//       }
//     ]
//   },
//   {
//     type: "datePicker",
//     label: "时间",
//     // width: 150,
//     rules: [],
//     placeholder: "请选择时间范围",
//     //将以下属性全都使用时可以v-bind
//     otherOptions: {
//       startPlaceholder: "开始时间",
//       endPlaceHolder: "结束时间",
//       type: "timeRange"
//     }
//   }
// ];

// const labelWidth = "120px";
// const itemStyle = {
//   padding: "20px 60px"
// };
// const colLayout = {
//   xl: 7,
//   lg: 8,
//   md: 12,
//   sm: 24,
//   xs: 24
// };
</script>

<style lang="less">
/*  */
</style>
