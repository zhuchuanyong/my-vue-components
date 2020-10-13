const path = require("path");
function resolve (dir = "") {
  return path.join(__dirname, dir);
}
module.exports = {
  configureWebpack: {
    plugins: [],
    resolve: {
      extensions: ['.js', '.ts', '.vue', '.json', '.jsx', '.tsx'],
      alias: {
        "@": resolve("src"),
        "@style": resolve("src/style"),
        "@views": resolve("src/views"),
        "@UseHooksAnimation": resolve(
          "src/views/UseHooks/components/animation"
        ),
      },
    },
  },
};
