<template>
  <div class="table-content">
    <hr />
    <BasicTable :tableData="tableData" v-bind="contentTableConfig">
      <!-- header插槽 -->
      <template #header-btn>
        <el-button type="primary" size="small">新增用户</el-button>
        <el-button plain size="small">
          <el-icon color="#409EFC"><RefreshRight /></el-icon>
        </el-button>
      </template>
      <!-- 列插槽 -->
      <template #enable="scope">
        <el-tag :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-tag>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.timeFormat(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.timeFormat(scope.row.updateAt) }}</span>
      </template>
      <template #edit>
        <el-button plain size="small" type="success">
          <el-icon><Edit /></el-icon>
          &nbsp;编辑
        </el-button>
        <el-button plain size="small" type="danger">
          <el-icon><Delete /></el-icon>
          &nbsp;删除
        </el-button>
      </template>
      <!-- footer插槽 -->
    </BasicTable>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import BasicTable from "@/base-ui/BasicTable";
import { getUserList, getTableData } from "@/api/main/system/user";

const props = defineProps({
  pageName: {
    type: String,
    require: true
  },

  contentTableConfig: {
    type: Object,
    require: true
  }
});

/**
 * - 本层封装会统一处理table数据。
 */

let tableData = ref();
const getData = async () => {
  const data = {
    offset: 0,
    size: 10
    // name: "w",
    // cellphone: 4
  };

  const pageUrl = `/${props.pageName}/list`; //拼接接口地址
  const res = await getTableData(pageUrl, data); //获取表格数据
  const { list, totalCount } = res.data;
  tableData.value = list;
};
getData();

const selectionChange = (val: any) => {
  console.log("val", val);
};
</script>

<style scoped>
.table-content {
  margin-top: 50px;
  padding-bottom: 50px;
}
</style>
