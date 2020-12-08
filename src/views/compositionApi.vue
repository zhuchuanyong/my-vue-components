<!--
 * @Author: zhuchuanyong
 * @Date: 2020-10-13 16:17:50
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-12-08 18:34:10
 * @FilePath: \src\views\compositionApi.vue
-->
<template>
  <div class="composition-wrap">
    12324

    <MyAlert></MyAlert>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MyAlert from "@/components/alert";
// import * as MyAlert from "@/components/alert";

export default defineComponent({
  name: "Home",
  components: {
    MyAlert
  },
  mounted() {
    console.log("MyAlert", MyAlert);
  }
});
</script>

<style lang="scss">
.composition-wrap {
  font-size: 14px;
  background-color: $bg-white;
}
</style>
