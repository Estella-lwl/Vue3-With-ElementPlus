import { FormConfig } from "@/base-ui/BasicForm";

// 最后该表单所有配置都在下面：（也就可以直接放到config文件中）
export const formConfig: FormConfig = {
  itemStyle: {
    padding: "20px 60px"
  },
  colLayout: {
    xl: 7,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  labelWidth: "120px",
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
      field: "password",
      label: "密码",
      type: "password",
      // width: 90,
      rules: [],
      placeholder: "请输入密码"
    },
    {
      field: "gender",
      label: "性别",
      type: "select",
      // width: 90,
      rules: [],
      placeholder: "请选择性别",
      options: [
        {
          title: "q",
          value: "0"
        },
        {
          title: "w",
          value: "1"
        }
      ]
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
