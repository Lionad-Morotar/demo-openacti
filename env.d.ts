/// <reference types="vite/client" />

// 让 tsc 能解析 .vue 显式 import（vitest 测试文件用）。运行时由 vite/vue 编译处理。
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, never>, Record<string, never>, unknown>
  export default component
}
