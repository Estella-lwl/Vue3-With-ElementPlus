<template>
  <div class="table-content">
    <BasicTable
      :tableData="tableData"
      :dataCount="totalCount"
      v-model:page="pageInfo"
      v-bind="contentTableConfig"
    >
      <!-- header插槽 -->
      <template #header-btn>
        <el-button
          v-if="isCreate"
          type="primary"
          size="small"
          @click="handleAdd"
          >新增</el-button
        >
        <el-button plain size="small">
          <el-icon color="#409EFC"><RefreshRight /></el-icon>
        </el-button>
      </template>
      <!-- 列插槽(固定显示的) -->
      <template #createAt="scope">
        <span>{{ $filters.timeFormat(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.timeFormat(scope.row.updateAt) }}</span>
      </template>
      <template #edit="scope">
        <el-button
          v-if="isUpdate"
          plain
          size="small"
          type="primary"
          @click="handleEdit(scope.row)"
        >
          <el-icon><Edit /></el-icon>
          &nbsp;编辑
        </el-button>
        <el-button
          v-if="isDelete"
          plain
          size="small"
          type="danger"
          @click="handleDelete(scope.row)"
        >
          <el-icon><Delete /></el-icon>
          &nbsp;删除
        </el-button>
      </template>
      <!-- 动态插槽 -->
      <template
        v-for="item in dynamicPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </BasicTable>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, defineExpose } from "vue";
import BasicTable from "@/base-ui/BasicTable";
import { usePermission } from "@/hooks/usePermission";
import { getTableData } from "@/api/main/system/user";
import { deleteTableData } from "@/api/main/system/user";

const emit = defineEmits(["addAction", "editAction"]);
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

// 获取用户的按钮操作权限
const isCreate = usePermission(props.pageName, "create");
const isDelete = usePermission(props.pageName, "delete");
const isUpdate = usePermission(props.pageName, "update");

/**
 * - 本层封装会统一处理table数据。
 */

let tableData = ref();

const pageInfo = ref({ curPage: 1, pageSize: 10 });
// 切换页码
watch(pageInfo, () => getData());
let list = ref(tableData.value?.list);
let totalCount = ref(tableData.value?.totalCounts);

const getData = async (queryInfo: any = {}) => {
  const data = {
    offset: (pageInfo.value.curPage - 1) * pageInfo.value.pageSize, // 第一页偏移为0
    size: pageInfo.value.pageSize,
    ...queryInfo
  };

  const pageUrl = `/${props.pageName}/list`; //拼接接口地址
  const res = await getTableData(pageUrl, data); //获取表格数据
  list = res.data.list;
  totalCount = res.data.totalCount;
  tableData.value = list;
};
getData();

// 动态的插槽
const dynamicPropSlots = props.contentTableConfig?.propList.filter(
  (item: any) => {
    // if (item.slotName === "status") return false;
    // if (item.slotName === "enable") return false;
    if (item.slotName === "createAt") return false; // 默认显示的插槽
    if (item.slotName === "updateAt") return false; // 默认显示的插槽
    if (item.slotName === "edit") return false; // 默认显示的插槽
    return true;
  }
);

const handleAdd = () => {
  emit("addAction");
};

const handleEdit = (val: any) => {
  emit("editAction", val);
};

const handleDelete = async (payload: any = {}) => {
  const { id } = payload;
  const url = `/${props.pageName}/${id}`; //拼接请求路径
  await deleteTableData(url);
  getData({ offset: 0, size: 10 }); //删除一条数据后重新请求
};

defineExpose({
  getData
});
</script>

<style scoped>
.table-content {
  margin-top: 40px;
  padding-bottom: 50px;
}
</style>
