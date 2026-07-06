import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'

// 与 260624-crewdle-banner 一致：~ / ~~ 指向项目根，jsdom 环境支撑 Vue 组件挂载测试。
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': resolve(__dirname),
      '~~': resolve(__dirname)
    }
  },
  test: {
    environment: 'jsdom',
    globals: true
  }
})
