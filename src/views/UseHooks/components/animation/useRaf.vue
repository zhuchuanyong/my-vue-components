<!--
 * @Author: zhuchuanyong
 * @Date: 2020-12-08 16:47:14
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-12-08 16:47:51
 * @FilePath: \src\views\UseHooks\components\animation\useRaf.vue
-->
<template>
  <a-card title="useRaf">
    <p>不清楚是啥</p>
    <p>貌似与动画有关</p>
    <!-- <p>{{ elapsed }}</p> -->
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import { useRafFn } from "@vueuse/core";

export default defineComponent({
  name: "useRaf",
  components: {}
  // setup() {
  //   // const elapsed = useRafFn();
  //   const { pause, resume } = useRafFn((elapsed) => {
  //     console.log(elapsed.value);
  //   });
  //   return { pause, resume };
  // },
});
</script>
