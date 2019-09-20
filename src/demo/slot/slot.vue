<template>
  <div>
    vue slot
    <slot>默认</slot>
    <slot v-bind:user="cuser" name="header">头部</slot>
    <slot name="footer">底部</slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cuser: {
        lastName: "名"
      }
    };
  }
};
</script>
