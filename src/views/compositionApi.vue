<template>
  <div class="composition-wrap">12324</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const counter = ref<number>(0);
    const addNum = () => {
      console.log("counter", counter);
      counter.value++;
    };

    const minusNum = () => {
      console.log("counter", counter);
      counter.value--;
    };
    return { counter, addNum, minusNum };
  },
});
</script>

<style lang="scss">
.composition-wrap {
  font-size: 14px;
  background-color: $bg-white;
}
</style>
