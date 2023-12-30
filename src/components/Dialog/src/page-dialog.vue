<template>
  <div class="page-dialog">
    <el-dialog
      :title="dialogTitle"
      width="30%"
      center
      v-model="dialogVisible"
      destroy-on-close
    >
      <BasicForm v-bind="dialogConfig" v-model="formData"></BasicForm>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleDialogCommit">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineExpose, watch } from "vue";
import BasicForm from "@/base-ui/BasicForm";
import { createUser, editUser, getTableData } from "@/api/main/system/user";

const props = defineProps({
  dialogTitle: {
    type: String,
    required: true
  },

  pageName: {
    type: String,
    required: true
  },

  dialogConfig: {
    type: Object,
    required: true
  },

  initData: {
    type: Object,
    default: () => ({})
  },

  checkedData: {
    type: Object,
    default: () => ({})
  }
});

let dialogVisible = ref(false);
let formData = ref<any>({});

watch(
  () => props.initData,
  (newVal) => {
    for (const item of props.dialogConfig.formItems) {
      formData.value[`${item.field}`] = newVal[`${item.field}`];
    }
  }
);

const handleDialogCommit = () => {
  const url = props.pageName;
  const id = props.initData.id;
  let res = ref();
  if (Object.keys(props.initData).length) {
    // 编辑用户
    res.value = editUser(`/${url}/${id}`, {
      ...formData.value,
      ...props.checkedData,
      id: props.initData.id
    });
  } else {
    // 新建用户
    res.value = createUser(`/${url}`, {
      ...formData.value,
      ...props.checkedData
    });
  }
  if (res.value) {
    dialogVisible.value = false;
    getTableData(`/${props.pageName}/list`, { offset: 0, size: 10 });
  }
};

defineExpose({
  dialogVisible,
  formData
});
</script>
