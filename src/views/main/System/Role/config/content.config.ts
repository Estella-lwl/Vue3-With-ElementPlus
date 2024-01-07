export const contentTableConfig = {
  propList: [
    {
      prop: "id",
      label: "id",
      minWidth: "100"
    },
    {
      prop: "name",
      label: "角色",
      minWidth: "100"
    },
    {
      prop: "intro",
      label: "权限",
      minWidth: "120"
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "200",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "200",
      slotName: "updateAt"
    },
    {
      prop: "edit",
      label: "操作",
      minWidth: "180",
      slotName: "edit"
    }
  ],
  isShowIdxCol: true,
  isShowSelectCol: true,
  title: "角色列表"
};
