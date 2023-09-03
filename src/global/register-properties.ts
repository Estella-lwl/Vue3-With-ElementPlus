import { App } from "vue";
import { utcDateFormat } from "@/utils/dateFormat";

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    timeFormat(value: string) {
      return utcDateFormat(value);
    }
  };
}
