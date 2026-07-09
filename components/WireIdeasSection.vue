<template>
  <!-- Wire Your Ideas.：左 App 列 + 中心手机 + 右 API 列 + 连接线跨 stage 放射 + ACTIER COMMUNITY 创作者 marquee。
       连接线 SVG absolute 覆盖整个 stage（viewBox 100x100 百分比），从手机中心(50,50)放射到左右节点列。 -->
  <section class="wire page-main-surface relative overflow-hidden pt-[120px] md:pt-[160px] pb-[100px] px-5 md:pb-[200px] snap-page">
    <div class="mx-auto max-w-[1280px]">
      <h2 class="text-center text-3xl font-bold tracking-tight text-foreground md:text-6xl">
        Wire Your Ideas.
      </h2>
      <p
        class="mx-auto mt-4 max-w-[640px] text-center text-sm md:mt-5 md:text-lg"
        style="color:var(--color-eyebrow)"
      >
        Mash up APIs and applications to forge custom Skill Keys. Deploy your creations and extend the Acti ecosystem.
      </p>

      <div class="wire__stage relative mt-14 md:mt-16">
        <!-- 连接线：覆盖整个 stage，从中心放射到左右节点 -->
        <svg
          class="wire__connectors"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            v-for="(p, i) in leftPaths"
            :key="'l' + i"
            :d="p"
            class="wire__path"
          />
          <path
            v-for="(p, i) in rightPaths"
            :key="'r' + i"
            :d="p"
            class="wire__path"
          />
        </svg>

        <div class="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">
          <div class="wire__col flex flex-col items-end gap-4 md:gap-6">
            <div
              v-for="app in apps"
              :key="app.name"
              class="wire__node"
            >
              <span
                class="wire__node-logo"
                :style="{ background: app.color }"
              >{{ app.logo }}</span>
              <div class="wire__node-text">
                <span class="wire__node-name">{{ app.name }}</span>
                <span class="wire__node-tag">App</span>
              </div>
            </div>
          </div>

          <div class="wire__center grid place-items-center">
            <PhoneMockup>
              <div class="wire__phone-screen" />
              <div class="wire__keyboard">
                <div
                  v-for="(row, ri) in kb"
                  :key="ri"
                  class="wire__krow"
                >
                  <span
                    v-for="k in row"
                    :key="k"
                    class="wire__key"
                    :class="{ 'wire__key--hot': hotKeys.has(k) }"
                  >{{ k }}</span>
                </div>
                <div class="wire__krow wire__krow--bottom">
                  <span class="wire__key wire__key--fn">123</span>
                  <span class="wire__key wire__key--fn">≲</span>
                  <span class="wire__space">space</span>
                  <span class="wire__enter">⏎</span>
                </div>
              </div>
            </PhoneMockup>
          </div>

          <div class="wire__col flex flex-col items-start gap-4 md:gap-6">
            <div
              v-for="api in apis"
              :key="api.name"
              class="wire__node"
            >
              <span
                class="wire__node-logo"
                :style="{ background: api.color }"
              >{{ api.logo }}</span>
              <div class="wire__node-text">
                <span class="wire__node-name">{{ api.name }}</span>
                <span class="wire__node-tag">API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-20 md:mt-28">
      <div
        class="mb-6 text-center text-xs uppercase tracking-widest"
        style="color:var(--color-eyebrow)"
      >
        ACTIER COMMUNITY
      </div>
      <MarqueeScroll :duration="60">
        <div
          v-for="c in creators"
          :key="c.name"
          class="wire__creator"
        >
          <div class="wire__creator-avatar">{{ c.avatar }}</div>
          <div class="wire__creator-name">{{ c.name }}</div>
          <div class="wire__creator-created">{{ c.skills }} Skills Created</div>
          <div class="wire__creator-stats">{{ c.downloads }} Downloads</div>
          <span
            class="wire__creator-arrow"
            aria-hidden="true"
          >›</span>
        </div>
      </MarqueeScroll>
    </div>
  </section>
</template>

<script setup lang="ts">
import PhoneMockup from '~/components/PhoneMockup.vue'
import MarqueeScroll from '~/components/MarqueeScroll.vue'

const apps = [
  { name: 'Notion', logo: 'N', color: '#111111' },
  { name: 'Gmail', logo: 'M', color: '#ea4335' },
  { name: 'Calendly', logo: 'C', color: '#006bff' },
  { name: '100+ Tools', logo: '🚀', color: '#5b6472' }
]
const apis = [
  { name: 'Weather', logo: '☀️', color: '#ff9500' },
  { name: 'NBA Stats', logo: '🏀', color: '#0f6cba' },
  { name: 'Twitter', logo: '𝕏', color: '#111111' },
  { name: '100+ APIs', logo: '🗄️', color: '#5b6472' }
]
const kb: string[][] = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]
// 部分高亮键（对齐原站键盘 t/y/u/g/x/c 微高亮）
const hotKeys = new Set(['t', 'y', 'u', 'g', 'x', 'c'])
// 连接线（百分比坐标）：手机中心(50,50)放射到左(13%)/右(87%)节点列，柔和弧线
const leftPaths = [
  'M50,50 C44,12 24,16 13,20',
  'M50,50 C44,37 24,40 13,40',
  'M50,50 C44,63 24,60 13,60',
  'M50,50 C44,88 24,84 13,80'
]
const rightPaths = [
  'M50,50 C56,12 76,16 87,20',
  'M50,50 C56,37 76,40 87,40',
  'M50,50 C56,63 76,60 87,60',
  'M50,50 C56,88 76,84 87,80'
]

const creators = [
  { name: 'alexm_', avatar: '🦊', skills: 14, downloads: '45.1K' },
  { name: 'kevinli92', avatar: '🧢', skills: 22, downloads: '128K' },
  { name: 'sara_dev', avatar: '🐱', skills: 9, downloads: '12.4K' },
  { name: 'mikecodes', avatar: '🐼', skills: 31, downloads: '302K' },
  { name: 'luna_dev', avatar: '🐰', skills: 7, downloads: '8.9K' },
  { name: 'ryebread', avatar: '🦁', skills: 18, downloads: '67K' }
]
</script>

<style scoped>
.wire__stage {
  position: relative;
  min-height: 420px;
}
/* 连接线 SVG 覆盖整个 stage */
.wire__connectors {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
.wire__path {
  fill: none;
  stroke: var(--color-eyebrow);
  stroke-width: 1.5;
  vector-effect: non-scaling-stroke;
  stroke-dasharray: 5 5;
  opacity: 0.6;
  animation: connector-dash-flow 1s linear infinite;
}
/* 节点：圆角 logo 图标 + 名称 + tag */
.wire__col { position: relative; z-index: 1; }
.wire__node {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.1rem 0.6rem 0.6rem;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 0.85rem;
  box-shadow: 0 6px 18px -10px rgba(0, 0, 0, 0.14);
}
.wire__node-logo {
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
}
.wire__node-text { display: flex; flex-direction: column; }
.wire__node-name { color: var(--color-foreground); }
.wire__node-tag {
  font-size: 0.6rem;
  padding: 0.05rem 0.35rem;
  border-radius: 0.25rem;
  background: var(--color-bg-soft);
  color: var(--color-eyebrow);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  align-self: flex-start;
  margin-top: 0.1rem;
}
.wire__center { position: relative; z-index: 1; }
.wire__phone-screen {
  height: 110px;
  margin: 0.4rem 0.4rem 0.5rem;
  border-radius: 0.5rem;
  background: var(--color-bg-main);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.wire__candidates {
  display: flex;
  gap: 0.4rem;
  font-size: 0.6rem;
  color: var(--color-eyebrow);
}
.wire__candidates span {
  padding: 0.1rem 0.4rem;
  border-radius: 999px;
  background: #ffffff;
}
.wire__input {
  font-size: 0.7rem;
  color: var(--color-foreground);
  padding: 0.25rem 0.4rem;
  background: #ffffff;
  border-radius: 0.3rem;
}
.wire__keyboard {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.4rem;
  background: var(--color-bg-soft);
}
.wire__krow { display: flex; justify-content: center; gap: 0.2rem; }
.wire__key {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  font-size: 0.6rem;
  border-radius: 0.25rem;
  background: #ffffff;
  color: var(--color-foreground);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}
.wire__key--hot {
  background: #e3ecff;
  color: #2f7dff;
}
.wire__key--fn { flex: 1.4; font-size: 0.5rem; }
.wire__space {
  flex: 4;
  height: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  background: #ffffff;
  font-size: 0.5rem;
  color: var(--color-eyebrow);
}
.wire__enter {
  flex: 1.6;
  height: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  background: #2f7dff;
  color: #ffffff;
  font-size: 0.6rem;
}
/* 社区卡片：头像 + 名 + Skills Created + 下载 + 箭头 */
.wire__creator {
  position: relative;
  flex: 0 0 210px;
  margin-right: 1rem;
  padding: 1.2rem;
  border-radius: var(--radius-2xl);
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 6px 20px -12px rgba(0, 0, 0, 0.12);
}
.wire__creator-avatar {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: var(--color-bg-soft);
  font-size: 1.3rem;
}
.wire__creator-name { margin-top: 0.6rem; font-weight: 600; }
.wire__creator-created {
  display: inline-block;
  margin-top: 0.4rem;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  background: rgba(47, 125, 255, 0.1);
  color: #2f7dff;
  font-size: 0.7rem;
  font-weight: 600;
}
.wire__creator-stats { font-size: 0.8rem; color: var(--color-eyebrow); margin-top: 0.3rem; }
.wire__creator-arrow {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  color: var(--color-eyebrow);
  font-size: 1.2rem;
}
@media (max-width: 768px) {
  .wire__connectors { display: none; }
  .wire__stage > div { grid-template-columns: 1fr; }
}
</style>
