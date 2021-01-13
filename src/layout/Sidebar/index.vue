<!--
 * @Author: zhuchuanyong
 * @Date: 2021-01-04 16:54:42
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-13 14:24:41
 * @FilePath: \src\layout\Sidebar\index.vue
-->

<template>
  <div class="h-screen flex flex-col menu-w">
    <div class="menu-logo flex flex-col ">
      <img :src="logo" alt="" />
    </div>
    <a-menu mode="inline" class="flex-1" theme="dark">
      <template v-for="item in routers">
        <a-menu-item :key="item.path" v-if="!item?.meta?.hidden ?? true">
          <router-link :to="item.path">
            <mail-outlined />{{ item.name }}
          </router-link>
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>
<script>
import logo from "@/assets/sidebar-logo.png";
import { constantRoutes } from "@/router";
export default {
  data() {
    return {
      logo: logo,
      routers: constantRoutes
    };
  },
  mounted() {
    console.log("router", constantRoutes);
  }
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
