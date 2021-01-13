/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-04 14:21:51
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-13 10:58:54
 * @FilePath: \src\main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/index.scss";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
const app=createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .mount("#app");

  const win: any = window //
if (process.env.NODE_ENV === 'development') {
  if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
    // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
    win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
  }
}
