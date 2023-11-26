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
    ></PageContent>
  </div>
</template>

<script lang="ts" setup>
import { formConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import PageSearch from "@/components/Form";
import PageContent from "@/components/Table";
import { usePageSearch } from "@/hooks/usePageSearch";

const pageName = "role";
const [pageContentRef, handleSearch, handleReset] = usePageSearch();
</script>

<style lang="less"></style>
