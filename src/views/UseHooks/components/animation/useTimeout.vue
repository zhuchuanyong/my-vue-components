<template>
  <a-card title="useTimeout">
    <p>定时器</p>
    <p>Ready: {{ ready.toString() }}</p>
    <a-button @click="start" :disabled="!ready" type="primary">
      Start Again
    </a-button> </a-card
  >;
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useTimeout } from "@vueuse/core";

export default defineComponent({
  name: "useTimeout",
  components: {},
  setup() {
    const { ready, start } = useTimeout(5000);

    return { ready, start };
  },
});
</script>
