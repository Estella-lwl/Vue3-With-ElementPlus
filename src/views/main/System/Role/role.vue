<template>
  <div class="role">
    <PageSearch
      :form-config="formConfig"
      @searchEvent="handleSearch"
      @resetEvent="handleReset"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      dialogTitle="新建角色"
      :pageName="pageName"
      :content-table-config="contentTableConfig"
      @add-action="handleAddAction"
      @edit-action="handleEditAction"
    ></PageContent>

    <PageDialog
      ref="pageDialogRef"
      dialogTitle="新建角色"
      :pageName="pageName"
      :dialog-config="dialogConfig"
      :init-data="initData"
      :checked-data="menuCheckList"
    >
      <el-tree
        :data="menuData"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        :default-checked-keys="leafKeys"
        @check="checkChange"
      />
    </PageDialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useStore } from "@/store";
import { formConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import PageSearch from "@/components/Form";
import PageContent from "@/components/Table";
import PageDialog from "@/components/Dialog";
import { dialogConfig } from "./config/dialog.config";
import { usePageSearch } from "@/hooks/usePageSearch";
import { usePageDialog } from "@/hooks/usePageDialog";
import { getMenuLeafKeys } from "@/utils/mapMenu";

const pageName = "role";
const [pageContentRef, handleSearch, handleReset] = usePageSearch();

// 处理dialog的hook
const leafKeys = ref();

const addCallback = () => {
  leafKeys.value = undefined; // 解决新建弹窗中tree的回显
};

const editCallback = (item: any) => {
  // 回显el-tree
  leafKeys.value = getMenuLeafKeys(item.menuList);
};

const [pageDialogRef, initData, handleAddAction, handleEditAction] =
  usePageDialog(addCallback, editCallback);
const store = useStore();

// 树形结构
const menuData = computed(() => store.state.allMenu); // 全部菜单
const menuCheckList = ref();
const checkChange = (curNodeObj: any, treeCheckedObj: any) => {
  // 处理&组装所选
  menuCheckList.value = {
    ...treeCheckedObj.checkedKeys,
    ...treeCheckedObj.halfCheckedKeys
  };
};
</script>

<style lang="less"></style>
