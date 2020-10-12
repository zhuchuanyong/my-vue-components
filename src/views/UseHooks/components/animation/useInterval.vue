<template>
  <a-card title="useInterval">
    <p>计数器</p>
    <p>{{ counter }}</p>
    <a-button type="primary" @click="start">开始 </a-button>
    <a-button class="mx-1" type="primary" @click="stop">停止</a-button>
    <a-button type="primary" @click="reset">清除</a-button>
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useInterval } from "@vueuse/core";

export default defineComponent({
  name: "useInterval",
  components: {},
  setup() {
    const { counter, start, stop } = useInterval(1000);
    const reset = () => {
      counter.value = 0;
      stop();
    };
    return { counter, start, stop, reset };
  },
});
</script>
