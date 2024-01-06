// /* eslint-disable */
// declare module "*.vue" {
//   import type { DefineComponent } from "vue";
//   const component: DefineComponent<{}, {}, any>;
//   export default component;
// }

/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare let $store: any;
declare module "*.json"; /* 识别json文件 */
