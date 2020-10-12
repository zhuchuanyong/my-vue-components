<template>
  <div class="flex">
    <useinterval></useinterval>
    <useIntervalFn></useIntervalFn>
    <useNow></useNow>
    <useRaf></useRaf>
    <useTimeout></useTimeout>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useinterval from "/@UseHooksAnimation/useInterval.vue";
import useIntervalFn from "/@UseHooksAnimation/useIntervalFn.vue";
import useNow from "/@UseHooksAnimation/useNow.vue";
import useRaf from "/@UseHooksAnimation/useRaf.vue";
import useTimeout from "/@UseHooksAnimation/useTimeout.vue";
export default defineComponent({
  name: "vueuse",
  components: {
    useinterval,
    useIntervalFn,
    useNow,
    useRaf,
    useTimeout,
  },
});
</script>
