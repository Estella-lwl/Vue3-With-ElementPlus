<template>
  <div class="user">
    <PageSearch :form-config="formConfig"></PageSearch>
    <PageContent
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

const pageName = "users";
</script>

<style lang="less"></style>
