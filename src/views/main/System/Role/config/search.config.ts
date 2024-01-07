import { FormConfig } from "@/base-ui/BasicForm";

export const formConfig: FormConfig = {
  colLayout: {
    xl: 5,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  labelWidth: "70px",
  formItems: [
    {
      field: "name",
      label: "角色名称",
      type: "input",
      // width: 200,
      rules: [],
      placeholder: "请输入角色名称"
    },
    {
      field: "intro",
      label: "权限",
      type: "input",
      // width: 90,
      rules: [],
      placeholder: "请输入权限"
    },
    {
      field: "date",
      label: "时间",
      type: "datepicker",
      // width: 150,
      rules: [],
      //将以下属性全都使用时可以v-bind
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ]
};
