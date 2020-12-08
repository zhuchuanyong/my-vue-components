<!--
 * @Author: zhuchuanyong
 * @Date: 2020-10-13 13:12:35
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-12-08 16:43:13
 * @FilePath: \src\views\Home.vue
-->
<template>
  <div class="home-wrap b">
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
    FormOneTsx
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
  }
});
</script>
<style lang="scss">
.home-wrap {
  font-size: 14px;
  background-color: $bg-white;
  @include ellipsis(1);
}
</style>
