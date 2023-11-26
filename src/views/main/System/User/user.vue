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
    >
      <template #enable="scope">
        <el-tag :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-tag>
      </template>
    </PageContent>
  </div>
</template>

<script setup lang="ts">
import { formConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import PageSearch from "@/components/Form";
import PageContent from "@/components/Table";
import { usePageSearch } from "@/hooks/usePageSearch";

const pageName = "users";

const [pageContentRef, handleSearch, handleReset] = usePageSearch();
</script>

<style lang="less"></style>
