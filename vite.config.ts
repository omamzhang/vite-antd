import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path' // 报错需引入 yarn add @types/node -D
import createPluginImport from "vite-plugin-importer"

const configDefault = {
  /* 基础配置 */
  // root: './',
  // base: '',
  // publicDir: "public",
  /* UI配置 */
  plugins: [
    react(),
    createPluginImport({
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: "css",
    }),
  ],
  /* 预处理配置  css */
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#00ab94', // 全局主色
          '@link-color': '#1DA57A', // 链接色
          '@border-radius-base': '2px', // 组件/浮层圆角
        },
        // math: 'parens-division',
      },
    },
  },
  /* 文件配置 */
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"], // 默认值，这些文件引入时不需要写后缀
  },

  /* 服务 */
  server: {
    host: "0.0.0.0",
    port: 5512,
    strictPort: true, // 设为TRUE时若端口被占用会直接退出，FALSE会尝试下一个可用端口
    open: true, // 自动打开浏览器；当此值为字符串时，会被用作 URL 的路径名
  },
}
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const configAsync = {
    ...configDefault,
    css: {
      ...configDefault?.css,
      modules: {
        ...configDefault?.css?.modules,
        // 配置css编译后在浏览器中的类名
        generateScopedName:
          mode === "development" ? "[path][name]__[local]" : "[local]",
      },
    }
  }
  return configAsync;
})
