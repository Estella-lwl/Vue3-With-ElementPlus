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
      :dialog-config="dialogConfig"
      :init-data="initData"
    ></PageDialog>
  </div>
</template>

<script setup lang="ts">
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

const [pageDialogRef, initData, handleAddAction, handleEditAction] =
  usePageDialog(addCallback, editCallback);
</script>

<style lang="less"></style>
