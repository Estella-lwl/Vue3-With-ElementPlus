export const contentTableConfig = {
  title: "菜单列表",
  propList: [
    {
      prop: "name",
      label: "菜单名称",
      minWidth: "150"
    },
    {
      prop: "type",
      label: "类型",
      minWidth: "60"
    },
    {
      prop: "url",
      label: "菜单url",
      minWidth: "100"
    },
    {
      prop: "icon",
      label: "菜单icon",
      minWidth: "100"
    },
    {
      prop: "permission",
      label: "按钮权限",
      minWidth: "100"
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
      label: "操作",
      minWidth: "220",
      slotName: "edit"
    }
  ],
  isShowIdxCol: false,
  isShowSelectCol: false,
  // 是否展开树形结构
  childrenProps: {
    rowKey: "id", //唯一标识
    treeProp: {
      children: "children" // 嵌套结构中数据源于哪个属性
    }
  },
  isShowFooter: false
};
