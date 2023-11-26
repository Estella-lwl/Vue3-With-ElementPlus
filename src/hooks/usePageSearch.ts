import { ref } from "vue";
import PageContent from "@/components/Table/src/page-content.vue";

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  const handleSearch = (queryInfo: any) => {
    pageContentRef.value?.getData(queryInfo);
  };

  const handleReset = () => {
    pageContentRef.value?.getData();
  };

  return [pageContentRef, handleSearch, handleReset];
}
