<template>
  <a-card title="useNow ">
    <p>当前时间</p>
    <p>{{ now }}</p>
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useNow } from "@vueuse/core";

export default defineComponent({
  name: "useNow",
  components: {},
  setup() {
    const now = useNow();

    return { now };
  }
});
</script>
