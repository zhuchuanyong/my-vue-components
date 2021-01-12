<!--
 * @Author: zhuchuanyong
 * @Date: 2020-10-13 16:17:50
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-12 19:58:40
 * @FilePath: \src\views\compositionApi.vue
-->
<template>
  <div class="composition-wrap">
    <div class="cssnext">dev</div>
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

<style>
:root {
  --mainColor: #12345678;
}
.composition-wrap {
  font-size: 14px;
}
</style>
