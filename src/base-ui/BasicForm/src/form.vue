<template>
  <div class="form">
    <div>
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <!-- 遍历表单项 -->
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.title + "-" + option.value }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  :type="item.type"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div>
      <slot name="formBtn"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, defineComponent, PropType } from "vue";
import { FormType } from "../types";

export default defineComponent({
  props: {
    // 给组件双向绑定后传的值默认叫 modelValue：
    modelValue: {
      type: Object,
      required: true //要求必传后就确保有值，就不会报警告。
    },
    // 表单项配置：
    formItems: {
      // 使用PropType作用：把array当作PropType类型，它可以接收一个泛型。数组或对象类型时可以使用。
      type: Array as PropType<FormType[]>,
      required: true,
      default: () => []
    },
    // 宽度：
    labelWidth: {
      type: String,
      default: "100px"
    },
    // 一般情况下表单项样式应该是一致的，所以单独拎出来传递：
    itemStyle: {
      type: Object,
      default: () => ({ padding: "10px 40px" })
    },
    // 响应式布局，可以由外部决定：
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920；一个占6份，24/6=4，也就是一行里面占4个。
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },

  emits: ["update: modelValue"],

  setup(props, { emit }) {
    //这里使用ref而非reactive是为了避免一些双向绑定时可能会出现的问题：
    const formData = ref({
      ...props.modelValue //将props传过来的数据放入新对象
    });

    // 监听formData的变化 => emit至父组件
    watch(
      formData,
      (newValue) => {
        console.log("newValue:", newValue);
        // 将变化后的值发射回父组件，这里才是实现组件双向绑定的过程：
        emit("update: modelValue", newValue);
      },
      {
        deep: true
      }
    );

    return {
      formData
    };
  }
});
</script>

<style scoped lang="less">
.form {
  padding: 20px 12px;
  .form-item {
    padding: 5px 30px;
  }
}
</style>
