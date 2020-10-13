<template>
  <a-card title="useIntervalFn">
    <p>计数器可设置默认值</p>
    <p>{{ counter }}</p>
    <a-button type="primary" @click="start">开始 </a-button>
    <a-button class="mx-1" type="primary" @click="stop">停止</a-button>
    <a-button type="primary" @click="reset">清除</a-button>
  </a-card>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useIntervalFn } from "@vueuse/core";

export default defineComponent({
  name: "useIntervalFn",
  components: {},
  setup() {
    const counter = ref(10);
    const { start, stop } = useIntervalFn(() => {
      counter.value++;
    }, 1000);
    const reset = () => {
      counter.value = 0;
      stop();
    };
    return { counter, start, stop, reset };
  }
});
</script>
