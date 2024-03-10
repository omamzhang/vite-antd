import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'; // 报错需引入 yarn add @types/node -D

// https://vitejs.dev/config/
export default defineConfig({
  /* 基础配置 */
  // root: './',
  // base: '',
  // publicDir: "public",
  /* UI配置 */
  plugins: [react()],
  /* 预处理配置  css */
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
        // math: 'parens-division',
      },
    },
  },
  // 文件配置
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
})
