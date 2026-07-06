/**
 * 把 baseURL 与相对路径拼成部署安全的绝对 URL。
 *
 * GitHub Pages 子路径部署（baseURL '/demo-openacti/'）下，public/ 静态资源
 * 必须带上 baseURL 前缀，否则 404。此函数容忍 base 与 path 的首尾斜杠差异。
 */
export function joinBasePath(base: string, path: string): string {
  const b = base.endsWith('/') ? base.slice(0, -1) : base
  const p = path.startsWith('/') ? path : `/${path}`
  return `${b}${p}`
}
