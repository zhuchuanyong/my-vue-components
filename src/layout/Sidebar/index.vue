<!--
 * @Author: zhuchuanyong
 * @Date: 2021-01-04 16:54:42
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-04 19:19:42
 * @FilePath: \src\layout\Sidebar\index.vue
-->

<template>
  <div class="h-screen flex flex-col menu-w">
    <div class="menu-logo flex flex-col">
      <img :src="logo" alt="" />
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu class="flex-1" theme="dark" mode="vertical">
        <SidebarItem :item="item" :key="index" v-for="(item, index) in routers"></SidebarItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import logo from "@/assets/sidebar-logo.png";
import { constantRoutes } from "@/router";
import SidebarItem from './SidebarItem.vue'
export default {
  data() {
    return {
      logo: logo,
      routers: constantRoutes,
    };
  },
  components:{

SidebarItem
  },
  mounted() {
    console.log("router", constantRoutes);
  },
};
</script>
<style lang="scss" scoped>
.menu-w {
  width: 210px;
}
.menu-logo {
  height: 52px;
  img {
    width: 80%;
    height: 60%;
  }
}
</style>
