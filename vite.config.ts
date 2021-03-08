import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
  plugins: [vue(),WindiCSS()]
})
