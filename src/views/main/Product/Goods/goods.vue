<template>
  <div class="user">
    <PageContent
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      pageName="goods"
    >
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #status="scope">
        <el-tag :type="scope.row.status ? 'success' : 'danger'">
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-tag>
      </template>
    </PageContent>
  </div>
</template>

<script setup lang="ts">
import PageContent from "@/components/Table";
import { contentTableConfig } from "./config/content.config";

const pageName = "goods";
</script>

<style lang="less"></style>
