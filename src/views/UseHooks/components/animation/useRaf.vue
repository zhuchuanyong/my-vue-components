<template>
  <a-card title="useRaf">
    <p>不清楚是啥</p>
    <p>貌似与动画有关</p>
    <p>{{ elapsed }}</p>
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRaf } from "@vueuse/core";

export default defineComponent({
  name: "useRaf",
  components: {},
  setup() {
    const elapsed = useRaf();

    return { elapsed };
  },
});
</script>
