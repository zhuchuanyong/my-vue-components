<!--
 * @Author: zhuchuanyong
 * @Date: 2020-10-13 16:17:50
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-12-09 16:36:07
 * @FilePath: \src\views\compositionApi.vue
-->
<template>
  <div class="composition-wrap">
    12324

    <myalert></myalert>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import myalert from "@/components/MyAlert";
// import * as MyAlert from "@/components/alert";

export default defineComponent({
  name: "Home",
  components: {
    myalert
  },
  mounted() {
    console.log("MyAlert", myalert);
  }
});
</script>

<style lang="scss">
.composition-wrap {
  font-size: 14px;
  background-color: $bg-white;
}
</style>
