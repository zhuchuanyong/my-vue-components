<template>
  <div class="about">
    <div>axios</div>
    <div v-for="item in banner" :key="item.targetId">{{ item.imageUrl }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "axios",
  data() {
    return {
      banner: []
    };
  },
  mounted() {
    this.getinfo();
  },
  methods: {
    getinfo() {
      fetch("http://localhost:3000/banner")
        .then(r => r.json())
        .then(res => {
          console.log("res :>> ", res);
          this.banner = res.banners;
        });
    }
  }
});
</script>
