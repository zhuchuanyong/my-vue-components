/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-04 14:21:51
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-04 16:48:50
 * @FilePath: \src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/styles/index.scss';

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import 'windi.css';

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app');
