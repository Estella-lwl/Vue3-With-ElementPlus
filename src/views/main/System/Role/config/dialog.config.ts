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
      label: "角色名",
      type: "input",
      placeholder: "请输入角色名"
    },
    {
      field: "intro",
      label: "角色介绍",
      type: "input",
      placeholder: "请输入角色介绍"
    }
  ]
};
