<!--
 * @Author: zhuchuanyong
 * @Date: 2021-01-04 16:54:42
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-13 16:49:17
 * @FilePath: \src\layout\components\Sidebar\index.vue
-->

<template>
  <div class="h-screen flex flex-col menu-w">
    <div class="menu-logo flex flex-col ">
      <img :src="logo" alt="" />
    </div>
    <el-menu class="flex-1">
      <template :key="item.path" v-for="item in routers">
        <AppLink :to="item.path">
          <el-menu-item v-if="!item?.meta?.hidden ?? true">
            <Item :icon="item?.meta?.icon" :title="item?.meta?.title"></Item>
            <!-- {{ item.name }} -->
          </el-menu-item>
        </AppLink>
      </template>
    </el-menu>
  </div>
</template>
<script>
import logo from "@/assets/sidebar-logo.png";
import isURL from "validator/es/lib/isURL.js";
import { constantRoutes } from "@/router";
import Item from "./Item";
import AppLink from "./Link";
export default {
  components: {
    Item,
    AppLink
  },
  data() {
    return {
      logo: logo,
      routers: constantRoutes
    };
  },
  mounted() {
    console.log("router", constantRoutes);
  },
  methods: {
    resolvePath(routePath) {
      if (isURL(routePath)) {
        return routePath;
      }
      if (isURL(this.basePath)) {
        return this.basePath;
      }
      // return path.resolve(this.basePath, routePath);
    }
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
