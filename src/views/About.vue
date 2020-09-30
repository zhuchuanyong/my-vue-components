<template>
  <div class="about">
    <a-button type="primary" @click="SwrvFlagClick">
      SwrvFlag: {{ SwrvFlag }}
    </a-button>

    <a-button type="primary" @click="AoptionsFlagClick">
      AoptionsFlag: {{ AoptionsFlag }}
    </a-button>

    <Aoptions v-if="AoptionsFlag"></Aoptions>

    <swr v-if="SwrvFlag"></swr>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Aoptions from "@/components/Aoptions.vue";
import swr from "@/components/swr.vue";

export default defineComponent({
  name: "SWRV",
  components: {
    Aoptions,
    swr,
  },
  setup() {
    let AoptionsFlag = ref(false);
    let SwrvFlag = ref(true);
    const SwrvFlagClick = () => {
      SwrvFlag.value = !SwrvFlag.value;
    };

    const AoptionsFlagClick = () => {
      AoptionsFlag.value = !AoptionsFlag.value;
    };
    return { AoptionsFlag, SwrvFlag, AoptionsFlagClick, SwrvFlagClick };
  },
});
</script>
