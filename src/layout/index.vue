<!--
 * @Author: zhuchuanyong
 * @Date: 2021-01-04 14:51:58
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-13 15:04:42
 * @FilePath: \src\layout\index.vue
-->
<template>
  <div class="app-wrapper flex">
    <Sidebar></Sidebar>
    <div class="main-container flex-1">
      <div>nav-bar</div>
      <div>tags</div>
      <div>
        appmain
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { Sidebar } from "./components";
export default {
  components: {
    Sidebar
  }
};
</script>
