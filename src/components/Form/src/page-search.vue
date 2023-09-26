<template>
  <div class="page-search">
    <BasicForm v-bind="formConfig" v-model="formData">
      <template #header>
        <p>检索</p>
      </template>

      <template #formBtn>
        <div class="search-btn">
          <el-button type="primary" @click="handleReset">重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </BasicForm>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import BasicForm from "@/base-ui/BasicForm";

const props = defineProps({
  formConfig: {
    type: Object,
    required: true
  }
});

const formSrcData: any = {};
const formItems = props.formConfig.formItems ?? [];

for (const item of formItems) {
  formSrcData[item.field] = "";
}
const formData = ref(formSrcData);

/** 表单重置：
 * -思路1.使用下面的方式（双向绑定）；
 * -思路2.不使用双向绑定，改用给每个筛选项绑定module-value。
 */
const handleReset = () => {
  //通过
  for (const key in formSrcData) {
    formData.value[key] = formSrcData[key]; //将原表单数据与这里连接(要确保修改的是对象属性)
  }
};
</script>
