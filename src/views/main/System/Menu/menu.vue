<template>
  <div class="menu">
    <PageContent
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      :pageName="pageName"
    >
    </PageContent>
  </div>
</template>

<script setup lang="ts">
import { contentTableConfig } from "./config/content.config";
import PageContent from "@/components/Table";

const pageName = "menu";
</script>

<style scoped></style>
