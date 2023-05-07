import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./packages/index.js", // 打包的时候以指定文件为入口
      name: "tsheep-ui", // 打包后dist目录下的js文件名
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    // 这里配置需要注意：Vite新版本resolve配置改为对象形式，如下：
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "icon",
        replacement: path.resolve(__dirname, "src/assets/icon"),
      },
    ],
  },
});
