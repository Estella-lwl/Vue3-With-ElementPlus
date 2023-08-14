<template>
  <div class="el-table">
    <el-table :data="tableData" stripe style="width: 100%">
      <template v-for="propItem in propLists" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <!-- scope拿到本行的数据 -->
          <template #default="scope">
            <!-- 通过:row="scope.row"将数据传递给外层 -->
            <slot :name="propItem.prop" :row="scope.row">
              <!-- 默认展示： -->
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  tableData: {
    type: Array,
    require: true
  },
  propLists: {
    type: Array,
    require: true
  }
});
</script>

<style lang="less" scoped></style>
