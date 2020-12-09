<!--
 * @Author: zhuchuanyong
 * @Date: 2020-10-13 13:12:35
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-12-09 16:31:01
 * @FilePath: \src\views\UseHooks\components\vueuse.vue
-->
<template>
  <div class="flex">
    <useinterval></useinterval>
    <useIntervalFn></useIntervalFn>
    <useNow></useNow>

    <useRaf></useRaf>
    <useTimeout></useTimeout>
    <useTimeoutFn></useTimeoutFn>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useinterval from "@views/UseHooks/components/animation/useInterval.vue";
import useIntervalFn from "@views/UseHooks/components/animation/useIntervalFn.vue";
import useNow from "@views/UseHooks/components/animation/useNow.vue";
import useRaf from "@views/UseHooks/components/animation/useRaf.vue";
import useTimeout from "@views/UseHooks/components/animation/useTimeout.vue";
import useTimeoutFn from "@views/UseHooks/components/animation/useTimeoutFn";
export default defineComponent({
  name: "vueuse",
  components: {
    useinterval,
    useIntervalFn,
    useNow,
    useRaf,
    useTimeout,
    useTimeoutFn
  }
});
</script>
