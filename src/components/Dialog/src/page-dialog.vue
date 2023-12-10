<template>
  <div class="page-dialog">
    <el-dialog
      title="新建用户"
      width="30%"
      center
      v-model="dialogVisible"
      destroy-on-close
    >
      <BasicForm v-bind="dialogConfig" v-model="formData"></BasicForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
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

const props = defineProps({
  dialogConfig: {
    type: Object,
    required: true
  },

  initData: {
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

defineExpose({
  dialogVisible
});
</script>
