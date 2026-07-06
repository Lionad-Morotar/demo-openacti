import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

// 部署范式参考 260624-crewdle-banner：baseURL 对应 GitHub 仓库名，nuxt generate 静态化。
// baseURL 必须与仓库名一致（demo-openacti），GitHub Pages 子路径才能正确加载资源。
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-07-06',
  future: {
    compatibilityVersion: 4,
  },
  app: {
    baseURL: '/demo-openacti/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
