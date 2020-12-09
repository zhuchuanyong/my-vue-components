/*
 * @Author: zhuchuanyong
 * @Date: 2020-09-27 13:42:36
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-12-09 18:13:47
 * @FilePath: \postcss.config.js
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const postcssPresetEnv = require("postcss-preset-env");
module.exports = {
  plugins: [
    postcssPresetEnv({ stage: 4 }),
    require("tailwindcss"),
    require("autoprefixer")
  ]
};
