export const contentTableConfig = {
  propLists: [
    {
      prop: "name",
      label: "用户名",
      minWidth: "100"
    },
    {
      prop: "realname",
      label: "真实姓名",
      minWidth: "100"
    },
    {
      prop: "cellphone",
      label: "手机号码",
      minWidth: "120"
    },
    {
      prop: "enable",
      label: "状态",
      minWidth: "100"
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "230"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "230"
    },
    {
      prop: "edit",
      label: "操作",
      minWidth: "180"
    }
  ],
  isShowIdxCol: true,
  isShowSelectCol: true,
  title: "用户列表"
};
