# demo-openacti

线上地址：https://lionad-morotar.github.io/demo-openacti/

Demo 项目，复刻 [openacti.com](https://www.openacti.com/) 首页的视觉与交互动效（Acti — The World's First Agentic Keyboard）。

## 工具栈

- Nuxt 4 + Vue 3 + TypeScript
- Tailwind CSS v4（`@tailwindcss/vite`）
- 纯 CSS keyframes 动画（无 GSAP/Three/Lenis）
- 静态生成 `nuxt generate` → GitHub Pages

## 开发

```bash
pnpm install
pnpm dev          # http://localhost:2351/demo-openacti/
pnpm test         # vitest
pnpm typecheck    # tsc --noEmit
pnpm generate     # 静态产物到 .output/public
```

## 设计 Token

取自原站 `:root`，定义于 `assets/css/main.css` 的 `@theme`：`--color-bg-main:#eef2f7` / `--color-foreground:#111` / `--font-sans:"Outfit"` 等。

## 动画（9 keyframes）

`ambient-halo-breathe` / `ring-diffuse` / `hero-ring-expand` / `creator-cards-marquee` / `connector-dash-flow` / `pulse` / `nav-slot-presence` / `nav-slot-typed` / `nav-slot-caret`。
