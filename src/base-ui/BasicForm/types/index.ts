type FormItemType = "input" | "password" | "select" | "datepicker";

export interface FormType {
  type: FormItemType; //规定表单项类型
  field: string;
  label: string;
  width?: number;
  rules?: any[];
  placeholder?: any;
  // 针对select：
  options?: any[];
  // 针对datePicker等特殊属性：
  otherOptions?: any;
}

// 将以上属性合并到一起：所以在之后新建表单使用时可以直接使用下面的。
export interface FormConfig {
  formItems: FormType[]; // 这里不能忘了方括号！！！
  labelWidth?: string;
  itemStyle?: any;
  colLayout?: any;
}
