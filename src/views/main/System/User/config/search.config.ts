import { FormConfig } from "@/base-ui/BasicForm";

export const formConfig: FormConfig = {
  colLayout: {
    xl: 5,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  labelWidth: "65px",
  formItems: [
    {
      field: "userName",
      label: "用户名",
      type: "input",
      // width: 200,
      rules: [],
      placeholder: "请输入用户名"
    },
    {
      field: "realName",
      label: "姓名",
      type: "input",
      rules: [],
      placeholder: "请输入姓名"
    },
    {
      field: "cellphone",
      label: "手机号",
      type: "input",
      placeholder: "请输入手机号"
    },
    {
      field: "enable",
      label: "用户状态",
      type: "select",
      placeholder: "请选择用户状态",
      options: [
        {
          title: "启用",
          value: 1
        },
        {
          title: "禁用",
          value: 0
        }
      ]
    },
    {
      field: "createAt",
      label: "创建时间",
      type: "datepicker",
      //将以下属性全都使用时可以v-bind
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ]
};
