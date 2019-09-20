<template>
  <div>
    万腾
    <MySlot>1233 {{ user.name }}</MySlot>
    <MySlot>
      <template v-slot:header="slotProps">
        <div>222</div>
        <div>{{ slotProps.user.lastName }}</div>
      </template>
    </MySlot>
  </div>
</template>
<script>
import MySlot from "./slot";
export default {
  components: { MySlot },
  data() {
    return { user: { name: "lm" } };
  }
};
</script>
