/**
 * 站点 baseURL 常量。
 *
 * 必须与 nuxt.config.ts 的 app.baseURL 保持一致。
 * 之所以用硬编码常量而非 import.meta.env.BASE_URL：后者在 Nuxt dev SSR 下经 Vite 资源解析
 * 会被改写到 `_nuxt/` 子路径（导致 public/ 资源 404）。硬编码避免歧义，dev / generate / 部署一致。
 */
export const SITE_BASE = '/demo-openacti/'
