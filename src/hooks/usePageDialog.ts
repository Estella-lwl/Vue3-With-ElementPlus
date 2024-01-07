import { ref } from "vue";
import PageDialog from "@/components/Dialog/src/page-dialog.vue";

type CallbackType = (item?: object) => void;

export function usePageDialog(
  addCallback?: CallbackType,
  editCallback?: CallbackType
) {
  const pageDialogRef = ref<InstanceType<typeof PageDialog>>();
  const initData = ref({});

  const handleAddAction = () => {
    if (pageDialogRef.value) {
      initData.value = {};
      pageDialogRef.value.dialogVisible = true;
      addCallback && addCallback();
    }
  };

  const handleEditAction = (item: any) => {
    if (pageDialogRef.value) {
      initData.value = item;
      pageDialogRef.value.dialogVisible = true;
      editCallback && editCallback(item);
    }
  };

  return [pageDialogRef, initData, handleAddAction, handleEditAction];
}
