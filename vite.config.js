const path = require("path");
function resolve (dir = "") {
  return path.join(__dirname, dir);
}
export default {
  alias: {
    // 别名必须以 / 开头、结尾    坑啊  找了半天问题
    "/@/": resolve("src"),
    "/@style/": resolve("src/style"),
    "/@views/": resolve("src/views"),
    "/@UseHooksAnimation/": resolve("src/views/UseHooks/components/animation"),
  },
};
