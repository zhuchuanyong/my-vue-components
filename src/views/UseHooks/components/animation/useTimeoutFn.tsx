import { defineComponent, ref } from "vue";
import { useTimeoutFn } from "@vueuse/core";
export default defineComponent({
  name: "FormOne",
  props: {
    msg: String
  },
  setup() {
    const defaultText = "等待3秒";
    const text = ref(defaultText);

    const { start } = useTimeoutFn(() => {
      text.value = "Fired!";
    }, 3000);
    const restart = () => {
      console.log("122", 122);
      text.value = defaultText;
      console.log("text.value", text.value);
      start();
    };
    return () => (
      <a-card title="useTimeoutFn">
        <p>定时器 ff </p>
        <p>{text.value} </p>
        <a-button onClick={restart} type="primary">
          Start Again
        </a-button>
      </a-card>
    );
  }
});
