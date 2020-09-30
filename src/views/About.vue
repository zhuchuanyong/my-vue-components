<template>
  <div class="about">
    <h1>SWRV</h1>
    <div v-if="error">failed to load</div>
    <div v-if="!data">loading...</div>
    <!-- <div v-else>{{ data }}</div> -->
    <div v-else>
      <div v-for="item in data.banner" :key="item.targetId">
        {{ item.imageUrl }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useSWRV from "swrv";

export default defineComponent({
  name: "SWRV",
  setup() {
    const fetcher = (url: string) =>
      fetch(url).then((r) => {
        return r.json();
      });
    const { data, error } = useSWRV("http://localhost:3000/banner", fetcher);
    console.log("data :>> ", data);

    return {
      data,
      error,
    };
  },
});
</script>
