<template>
  <div class="table-container">
    <div class="table-header">
      <div class="table-header-title">
        <slot name="header-title">{{ title }}</slot>
      </div>
      <div class="table-header-right">
        <slot name="header-btn"> </slot>
      </div>
    </div>

    <el-table
      :data="tableData"
      stripe
      class="table-main"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="isShowSelectCol"
        type="selection"
        align="center"
        width="28"
      ></el-table-column>
      <el-table-column
        v-if="isShowIdxCol"
        type="index"
        label="序号"
        align="center"
        width="70"
      ></el-table-column>
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

    <div class="table-footer">
      <slot name="table-footer">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: {
    type: String,
    require: true
  },
  tableData: {
    type: Array,
    require: true
  },
  propLists: {
    type: Array,
    require: true
  },
  isShowIdxCol: {
    type: Boolean,
    default: true
  },
  isShowSelectCol: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["selectionChange"]);
const handleSelectionChange = (val: any) => {
  emit("selectionChange", val);
};
</script>

<style lang="less" scoped>
.table-container {
  padding: 20px;
  box-shadow: 0px -1px 0px 0px #c6c6cad9;

  .table-main {
    width: 100%;
    margin-top: 18px;
  }

  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;

    .table-header-title {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .table-footer {
    margin: 0 auto;
    margin-top: 40px;
    width: 780px;
  }
}
</style>
