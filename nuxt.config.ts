import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

// 部署范式参考 260624-crewdle-banner：baseURL 对应 GitHub 仓库名，nuxt generate 静态化。
// baseURL 必须与仓库名一致（demo-openacti），GitHub Pages 子路径才能正确加载资源。
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/demo-openacti/'
  },
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2026-07-06',
  vite: {
    plugins: [tailwindcss()]
  }
})
