<template>
  <div class="user">
    <PageSearch :form-config="formConfig"></PageSearch>
    <div class="table-content">
      <hr />
      <BasicTable :tableData="tableData" :propLists="propLists">
        <template #status="scope">
          <el-button>{{ scope.row.enable ? "启用" : "禁用" }}</el-button>
        </template>
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>
        <template #>
          <el-button></el-button>
        </template>
      </BasicTable>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { formConfig } from "./config/search.config";
import PageSearch from "@/components/Form";
import BasicTable from "@/base-ui/BasicTable";
import { getUserList } from "@/api/main/system/user";
export default defineComponent({
  name: "User",
  components: { PageSearch, BasicTable },
  setup() {
    let propLists = [
      {
        prop: "name",
        label: "用户名",
        minWidth: "100"
      },
      {
        prop: "realname",
        label: "真实姓名",
        minWidth: "100"
      },
      {
        prop: "cellphone",
        label: "手机号码",
        minWidth: "100"
      },
      {
        prop: "enable",
        label: "状态",
        minWidth: "100"
      },
      {
        prop: "createAt",
        label: "创建时间",
        minWidth: "250"
      },
      {
        prop: "updateAt",
        label: "更新时间",
        minWidth: "250"
      }
    ];
    let tableData = ref();

    const getData = async () => {
      const data = {
        offset: 0,
        size: 10,
        name: "w",
        cellphone: 4
      };
      const res = await getUserList(data);
      tableData.value = res.data.list;
      const { list, totalCount } = res.data.list;
      console.log(" res1:", tableData.value);
    };
    getData();

    return {
      formConfig,
      tableData,
      propLists
    };
  }
});
</script>

<style lang="less">
.table-content {
  margin-top: 50px;
  padding-bottom: 50px;
}
</style>
