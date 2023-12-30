<template>
  <div class="user">
    <PageSearch
      :form-config="formConfig"
      @searchEvent="handleSearch"
      @resetEvent="handleReset"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      :pageName="pageName"
      @add-action="handleAddAction"
      @edit-action="handleEditAction"
    >
      <template #enable="scope">
        <el-tag :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-tag>
      </template>
    </PageContent>

    <PageDialog
      ref="pageDialogRef"
      dialogTitle="新建用户"
      :pageName="pageName"
      :dialog-config="dialogConfigAct"
      :init-data="initData"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import PageSearch from "@/components/Form";
import PageContent from "@/components/Table";
import PageDialog from "@/components/Dialog";

import { formConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { dialogConfig } from "./config/dialog.config";

import { usePageSearch } from "@/hooks/usePageSearch";
import { usePageDialog } from "@/hooks/usePageDialog";

const pageName = "users";
const [pageContentRef, handleSearch, handleReset] = usePageSearch();

// 控制密码显示
const addCallback = () => {
  const pwdItem = dialogConfig.formItems.find(
    (item) => item.field === "password"
  );
  pwdItem!.isHiddenItem = false;
};
const editCallback = () => {
  const pwdItem = dialogConfig.formItems.find(
    (item) => item.field === "password"
  );
  pwdItem!.isHiddenItem = true;
};

// 下拉-动态添加部门和角色列表
const store = useStore();
const dialogConfigAct = computed(() => {
  /*
    1.先将store获取到的数据转化为下拉选项的格式；
    2. 将维护好的格式赋值给 departmentItem 的options选项。
 */
  const departmentItem = dialogConfig.formItems.find(
    (item) => item.field === "departmentId"
  );
  departmentItem!.options = store.state.allDepartment.map((item) => {
    return { title: item.name, value: item.id };
  });

  const roleItem = dialogConfig.formItems.find(
    (item) => item.field === "roleId"
  );
  roleItem!.options = store.state.allRole.map((item) => {
    return { title: item.name, value: item.id };
  });

  return dialogConfig;
});

const [pageDialogRef, initData, handleAddAction, handleEditAction] =
  usePageDialog(addCallback, editCallback);
</script>

<style lang="less"></style>
