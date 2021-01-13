<!--
 * @Author: zhuchuanyong
 * @Date: 2021-01-13 15:47:57
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-13 16:35:19
 * @FilePath: \src\layout\components\Sidebar\link.vue
-->

<template>
  <!-- eslint-disable vue/require-component-is -->
  <!-- <component v-bind="linkProps(to)">
    <slot></slot>
  </component> -->

  <!-- <a v-if="isExternal(to)" :href="to" target="_blank" rel="noopener">
    <slot />
  </a> -->
  <router-link :to="to">
    <slot />
  </router-link>
</template>
<script lang="ts">
import isURL from "validator/es/lib/isURL.js";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup() {
    console.log("isURL32424", isURL("32424"));
    const linkProps = (url: string) => {
      console.log("url", url);
      return {
        is: "router-link",
        to: url
      };
    };

    return { linkProps };
  }
});
</script>
