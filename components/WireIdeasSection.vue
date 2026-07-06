<template>
  <!-- Wire Your Ideas.：左右 App/API 列 + 中心键盘 + connector 虚线流动 + halo + ACTIER COMMUNITY 创作者 marquee -->
  <section class="wire page-main-surface relative overflow-hidden pt-[160px] pb-[100px] px-5 md:pb-[200px] snap-page">
    <div class="mx-auto max-w-[1280px]">
      <h2 class="text-center text-3xl font-bold tracking-tight text-foreground md:text-6xl">Wire Your Ideas.</h2>
      <p class="mx-auto mt-4 max-w-[640px] text-center text-sm md:text-lg" style="color:var(--color-eyebrow)">
        Mash up APIs and applications to forge custom Skill Keys. Deploy your creations and extend the Acti ecosystem.
      </p>

      <div class="wire__stage relative mt-14 grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:mt-16 md:gap-8">
        <div class="wire__col flex flex-col items-end gap-3 md:gap-4">
          <div v-for="app in apps" :key="app.name" class="wire__node">
            <span class="wire__node-dot" :style="{ background: app.color }" />
            <span class="wire__node-name">{{ app.name }}</span>
            <span class="wire__node-tag">App</span>
          </div>
        </div>

        <div class="wire__center relative grid place-items-center">
          <svg class="wire__connectors" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
            <path v-for="(p, i) in leftPaths" :key="'l' + i" :d="p" class="wire__path" />
            <path v-for="(p, i) in rightPaths" :key="'r' + i" :d="p" class="wire__path" />
          </svg>
          <HaloRings :count="3" :duration="8" :stagger="2" />
          <div class="wire__keyboard-mini">
            <div v-for="(row, ri) in kb" :key="ri" class="wire__krow">
              <span v-for="k in row" :key="k" class="wire__key" :class="{ 'wire__key--acti': actiSet.has(k) }">{{ k }}</span>
            </div>
          </div>
        </div>

        <div class="wire__col flex flex-col items-start gap-3 md:gap-4">
          <div v-for="api in apis" :key="api.name" class="wire__node">
            <span class="wire__node-dot" :style="{ background: api.color }" />
            <span class="wire__node-name">{{ api.name }}</span>
            <span class="wire__node-tag">API</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-20 md:mt-28">
      <div class="mb-6 text-center text-xs uppercase tracking-widest" style="color:var(--color-eyebrow)">ACTIER COMMUNITY</div>
      <MarqueeScroll :duration="60">
        <div v-for="c in creators" :key="c.name" class="wire__creator">
          <div class="wire__creator-avatar">{{ c.name.slice(0, 2) }}</div>
          <div class="wire__creator-name">{{ c.name }}</div>
          <div class="wire__creator-stats">{{ c.skills }} Skills · {{ c.downloads }} Downloads</div>
        </div>
      </MarqueeScroll>
    </div>
  </section>
</template>

<script setup lang="ts">
import HaloRings from '~/components/HaloRings.vue'
import MarqueeScroll from '~/components/MarqueeScroll.vue'

const apps = [
  { name: 'Notion', color: '#111111' },
  { name: 'Gmail', color: '#ea4335' },
  { name: 'Calendly', color: '#006bff' },
  { name: '100+ Tools', color: '#5b6472' },
]
const apis = [
  { name: 'Weather', color: '#ff9500' },
  { name: 'NBA Stats', color: '#0f6cba' },
  { name: 'Twitter', color: '#111111' },
  { name: '100+ APIs', color: '#5b6472' },
]
const actiSet = new Set(['A', 'C', 'T', 'I'])
const kb: string[][] = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]
// connector 贝塞尔路径：从中心(200,150)散向左右
const leftPaths = [
  'M200,150 C140,80 80,80 40,55',
  'M200,150 C140,135 80,135 40,120',
  'M200,150 C140,165 80,165 40,185',
  'M200,150 C140,220 80,245 40,250',
]
const rightPaths = [
  'M200,150 C260,80 320,80 360,55',
  'M200,150 C260,135 320,135 360,120',
  'M200,150 C260,165 320,165 360,185',
  'M200,150 C260,220 320,245 360,250',
]

const creators = [
  { name: 'alexm_', skills: 14, downloads: '45.1K' },
  { name: 'kevinli92', skills: 22, downloads: '128K' },
  { name: 'sara_dev', skills: 9, downloads: '12.4K' },
  { name: 'mikecodes', skills: 31, downloads: '302K' },
  { name: 'luna_dev', skills: 7, downloads: '8.9K' },
  { name: 'ryebread', skills: 18, downloads: '67K' },
]
</script>

<style scoped>
.wire__node {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-2xl);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 0.85rem;
}
.wire__node-dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 9999px;
}
.wire__node-tag {
  font-size: 0.65rem;
  padding: 0.1rem 0.4rem;
  border-radius: 0.25rem;
  background: var(--color-bg-soft);
  color: var(--color-eyebrow);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.wire__center {
  width: 100%;
  min-height: 320px;
  position: relative;
}
.wire__connectors {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.wire__path {
  fill: none;
  stroke: var(--color-eyebrow);
  stroke-width: 1.5;
  stroke-dasharray: 6 6;
  opacity: 0.5;
  animation: connector-dash-flow 1s linear infinite;
}
.wire__keyboard-mini {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.6rem;
  border-radius: var(--radius-2xl);
  box-shadow: 0 12px 40px -16px rgba(0, 0, 0, 0.2);
}
.wire__krow {
  display: flex;
  justify-content: center;
  gap: 0.2rem;
}
.wire__key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.2rem;
  height: 1.5rem;
  font-size: 0.65rem;
  border-radius: 0.25rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: var(--color-keyboard-glyph);
}
.wire__key--acti {
  background: linear-gradient(135deg, #6c8cff, #b86cff);
  color: #ffffff;
  border-color: transparent;
}
.wire__creator {
  flex: 0 0 220px;
  margin-right: 1rem;
  padding: 1.2rem;
  border-radius: var(--radius-2xl);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.wire__creator-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, #6c8cff, #b86cff);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.8rem;
}
.wire__creator-name {
  margin-top: 0.6rem;
  font-weight: 600;
}
.wire__creator-stats {
  font-size: 0.8rem;
  color: var(--color-eyebrow);
  margin-top: 0.2rem;
}
@media (max-width: 768px) {
  .wire__stage {
    grid-template-columns: 1fr;
  }
  .wire__connectors {
    display: none;
  }
}
</style>
