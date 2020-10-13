<template>
  <div class="about">
    <a-tabs>
      <a-tab-pane key="1" tab="vueuse">
        <vueuse></vueuse>
      </a-tab-pane>
      <a-tab-pane key="2" tab="vue-hooks" force-render>
        <a-card title="useInterval" style="width: 300px">
          <p>vue-hooks</p>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="3" tab="vue-use-web" force-render>
        <a-card title="Default size card" style="width: 300px">
          <p>vue-use-web</p>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="4" tab="vue-composition-toolkit" force-render>
        <a-card title="Default size card" style="width: 300px">
          <p>vue-composition-toolkit</p>
        </a-card>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import vueuse from "./components/vueuse.vue";

export default defineComponent({
  name: "Usehook",
  components: {
    vueuse
  }
});
</script>
