<!--
 * @Author: zhuchuanyong
 * @Date: 2020-12-08 16:47:14
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-12-08 16:48:03
 * @FilePath: \src\views\UseHooks\components\animation\useNow.vue
-->
<template>
  <a-card title="useNow ">
    <p>当前时间</p>
    <!-- <p>{{ now }}</p> -->
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import { useNow } from "@vueuse/core";

export default defineComponent({
  name: "useNow",
  components: {},
  setup() {
    // const now = useNow();
    // return { now };
  }
});
</script>
