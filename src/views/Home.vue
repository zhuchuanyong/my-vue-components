<template>
  <div>
    <a-button type="primary" @click="addNum"> 加1 </a-button>
    <span class="mx-1">counter:{{ counter }}</span>
    <a-button type="primary" @click="minusNum"> 减1 </a-button>
  </div>
  <div class="flex">
    <FormOne class="flex-1" msg="Welcome to Your Vue.js + TypeScript App" />
    <FormOneTsx class="flex-1" msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FormOne from "@/components/FormOne.vue"; // @ is an alias to /src
import FormOneTsx from "@/components/FormOneTsx.tsx";

export default defineComponent({
  name: "Home",
  components: {
    FormOne,
    FormOneTsx,
  },
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
