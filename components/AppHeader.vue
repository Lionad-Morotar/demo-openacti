<template>
  <header class="app-header">
    <nav class="app-nav">
      <a
        href="#"
        class="app-logo"
        aria-label="ACTI"
      >
        <img
          :src="asset('raw/img/logo-nav.png')"
          alt="ACTI"
          class="app-logo__img"
        >
      </a>

      <!-- nav-slot 打字机：5 行同周期 26s，负 delay 错峰，三动画（presence/typed/caret）同步。
           纯 CSS 实现，对齐原站机制：任意时刻仅一行落在 presence 可见段。 -->
      <a
        class="nav-slot"
        href="#"
        aria-label="What an agentic keyboard does — rotating"
      >
        <span
          class="nav-slot-stage"
          aria-hidden="true"
        >
          <span
            v-for="(line, i) in taglines"
            :key="i"
            class="nav-slot-line"
            :style="{ '--w': `${widths[i]}px`, '--d': `-${(i * perLine).toFixed(2)}s` } as Record<string, string>"
          >
            <span class="nav-slot-typed">{{ line }}</span>
            <span
              class="nav-slot-caret"
              aria-hidden="true"
            />
          </span>
        </span>
      </a>

      <div class="app-nav__actions">
        <a
          href="#"
          class="app-nav__action"
        >
          <img
            :src="asset('raw/img/icon-play.svg')"
            alt=""
            class="app-nav__icon"
          >
          <span>Action</span>
        </a>
        <a
          href="#"
          class="app-nav__action"
        >
          <img
            :src="asset('raw/img/icon-discord.svg')"
            alt=""
            class="app-nav__icon"
          >
          <span>Community</span>
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { joinBasePath } from '~/utils/publicPath'
import { SITE_BASE } from '~/utils/site'

const BASE = SITE_BASE
const asset = (p: string) => joinBasePath(BASE, p)

// 5 条 rotating tagline，逐字取自原站
const taglines = [
  '“Words in. Actions out.”',
  '“Press to type, hold to act.”',
  '“The first agentic keyboard.”',
  '“Every text field is an action layer.”',
  '“It doesn\'t predict your next word. It takes your next action.”'
]

// 每行文本宽度：SSR 用预估 fallback，客户端 onMounted 后测量实际渲染宽度覆盖，
// 避免 Outfit 字体未加载时打字展开宽度偏差。
const widths = ref<number[]>([146, 168, 180, 214, 369])
const TOTAL = 26 // 秒，对齐原站总周期
const perLine = TOTAL / taglines.length // 5.2s 每行切换

onMounted(() => {
  const fontFamily = getComputedStyle(document.body).fontFamily
  widths.value = taglines.map((text, i) => {
    const probe = document.createElement('span')
    Object.assign(probe.style, {
      visibility: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      fontFamily,
      fontSize: '0.95rem',
    })
    probe.textContent = text
    document.body.appendChild(probe)
    const measured = Math.ceil(probe.getBoundingClientRect().width)
    document.body.removeChild(probe)
    return measured > 0 ? measured : (widths.value[i] ?? measured)
  })
})
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 1rem 2rem;
  background: color-mix(in srgb, var(--color-bg-main) 80%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.app-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
}
.app-logo__img {
  height: 32px;
  width: auto;
}
.app-nav__actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
.app-nav__action {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  color: var(--color-foreground);
  text-decoration: none;
}
.app-nav__icon {
  width: 20px;
  height: 20px;
}
.app-nav__action:hover {
  opacity: 0.7;
}

/* ===== nav-slot 纯 CSS 打字机 ===== */
.nav-slot {
  position: relative;
  display: inline-grid;
  place-items: center;
  min-width: 240px;
  height: 1.6em;
  text-decoration: none;
  color: var(--color-foreground);
}
.nav-slot-stage {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 1.6em;
}
.nav-slot-line {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.95rem;
  animation: 26s linear infinite nav-slot-presence;
  animation-delay: var(--d);
}
.nav-slot-typed {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: 26s linear infinite nav-slot-typed;
  animation-delay: var(--d);
}
.nav-slot-caret {
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 2px;
  background: currentColor;
  animation: 26s steps(1) infinite nav-slot-caret;
  animation-delay: var(--d);
}

@media (max-width: 768px) {
  .nav-slot {
    display: none;
  }
}
</style>
