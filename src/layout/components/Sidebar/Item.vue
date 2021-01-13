<!--
 * @Author: zhuchuanyong
 * @Date: 2021-01-13 15:00:54
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-13 15:47:40
 * @FilePath: \src\layout\components\Sidebar\item.vue
-->
<template>
  <!-- 存在 el-icon 用el 字体图标渲染 -->
  <i v-if="icon.includes('el-icon')" :class="[icon, 'sub-el-icon']" />
  <!-- TODO svg组件 -->
  <span>{{ title }}</span>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuItem",
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  }
});
</script>
