const path = require("path");
function resolve(dir = "") {
  return path.join(__dirname, dir);
}
module.exports = {
  configureWebpack: {
    plugins: [],
    resolve: {
      extensions: [".js", ".ts", ".vue", ".json", ".jsx", ".tsx"],
      alias: {
        "@": resolve("src"),
        "@style": resolve("src/style"),
        "@views": resolve("src/views")
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "~@/style/variables.scss";
        @import "~@/style/mixins.scss";
        `
      }
    }
  }
};
