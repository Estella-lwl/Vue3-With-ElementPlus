import { FormConfig } from "@/base-ui/BasicForm";

// 最后该表单所有配置都在下面：（也就可以直接放到config文件中）
export const dialogConfig: FormConfig = {
  colLayout: {
    span: 24 //独占一行
  },
  itemStyle: {},
  labelWidth: "70px",
  formItems: [
    {
      field: "name",
      label: "用户名",
      type: "input",
      placeholder: "请输入用户名"
    },
    {
      field: "realname",
      label: "真实姓名",
      type: "input",
      placeholder: "请输入真实姓名"
    },
    {
      field: "password",
      label: "用户密码",
      type: "password",
      placeholder: "请输入密码",
      isHiddenItem: true
    },
    {
      field: "cellphone",
      label: "用户名",
      type: "input",
      placeholder: "请输入用户名"
    }
  ]
};
