<!--
 * @Author: zhuchuanyong
 * @Date: 2021-01-04 16:54:42
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-04 19:19:42
 * @FilePath: \src\layout\Sidebar\index.vue
-->

<template>
  <!-- 排除隐藏菜单 -->
  <div v-if="!item?.meta?.hidden">
    <el-submenu>
      <span>{{ item?.mate?.title }}</span>
      <template v-if="item.children">
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span>{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarItem",
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  mounted() {
    console.log(this.item);
  },
});
</script>
