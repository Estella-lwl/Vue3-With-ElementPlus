<template>
  <div class="user">
    <PageSearch :form-config="formConfig"></PageSearch>
    <PageContent
      :content-table-config="contentTableConfig"
      pageName="/role/list"
    ></PageContent>
  </div>
</template>

<script lang="ts" setup>
import { formConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import PageSearch from "@/components/Form";
import PageContent from "@/components/Table";
</script>

<style lang="less"></style>
