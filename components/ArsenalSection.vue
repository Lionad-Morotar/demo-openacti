<template>
  <!-- Choose Your Arsenal.：单卡切换器（中心卡片 + 虚拟键盘高亮键 + 左右箭头）+ 底部技能 tab。
       对齐原站当前版本：点击 tab/箭头切换技能，键盘高亮该技能触发键。 -->
  <section class="arsenal page-main-surface pt-[120px] md:pt-[160px] pb-[100px] md:pb-[200px] px-5">
    <div class="mx-auto max-w-[1100px]">
      <h2 class="text-center text-3xl font-bold tracking-tight text-foreground md:text-6xl">
        Choose Your Arsenal.
      </h2>
      <p
        class="mx-auto mt-4 max-w-[640px] text-center text-sm md:mt-5 md:text-lg"
        style="color:var(--color-eyebrow)"
      >
        Built for the obsessed. Equip the exact skill set tailored to your subculture, and execute at the speed of thought.
      </p>

      <!-- 切换器：左箭头 + 中心(卡片+键盘) + 右箭头 -->
      <div class="mt-14 flex items-center justify-center gap-4 md:mt-20 md:gap-8">
        <button
          type="button"
          class="arsenal__arrow"
          aria-label="上一个技能"
          @click="prev"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div class="arsenal__display">
          <div class="arsenal__card">
            <div class="arsenal__card-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="15"
                  fill="#111111"
                />
                <path
                  d="M8 11a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5l-4 3v-3.5A3 3 0 0 1 8 16z"
                  fill="#ffffff"
                />
                <path
                  d="M15 10.5v3.2M15 15.4v.4"
                  stroke="#111111"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="arsenal__card-body">
              <div class="arsenal__card-name">{{ current.name }}</div>
              <div class="arsenal__card-desc">{{ current.desc }}</div>
            </div>
          </div>
          <div class="arsenal__keyboard">
            <div
              v-for="(row, ri) in keyboardRows"
              :key="ri"
              class="arsenal__krow"
            >
              <span
                v-for="k in row"
                :key="k"
                class="arsenal__key"
                :class="{ 'arsenal__key--hot': k === current.key }"
              >{{ k }}</span>
            </div>
            <div class="arsenal__krow arsenal__krow--bottom">
              <span class="arsenal__key arsenal__key--fn">123</span>
              <span class="arsenal__key arsenal__key--fn">≲</span>
              <span class="arsenal__space">space</span>
              <span class="arsenal__key arsenal__key--fn">⏎</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="arsenal__arrow"
          aria-label="下一个技能"
          @click="next"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <!-- 底部技能 tab -->
      <div class="mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
        <button
          v-for="(s, i) in skills"
          :key="s.name"
          type="button"
          class="arsenal__tab"
          :class="{ 'arsenal__tab--active': i === idx }"
          @click="select(i)"
        >
          {{ s.name }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const skills = [
  { name: 'Vibe Sync', desc: 'Break the ice with a message tailored to their interests.', key: 'v' },
  { name: 'Weather Rizz', desc: 'Send a thoughtful message based on the weather.', key: 'w' },
  { name: 'Twitter Guy', desc: 'Draft posts in your own tone, instantly.', key: 't' },
  { name: 'Productivity Ninja', desc: 'Turn raw text into calendar events and tasks.', key: 'p' },
  { name: 'Super Writer', desc: 'Polish any draft into publish-ready prose.', key: 's' },
  { name: 'GenZ Rizzer', desc: 'Generate openers that actually land.', key: 'g' },
  { name: 'Crypto Degen', desc: 'Track wallets and fire off transactions fast.', key: 'c' },
  { name: 'Super Fans', desc: 'Keep your people close, across every app.', key: 'f' }
] as const

const keyboardRows: string[][] = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]

const idx = ref(0)
const current = computed(() => skills[idx.value]!)
function select(i: number) { idx.value = i }
function next() { idx.value = (idx.value + 1) % skills.length }
function prev() { idx.value = (idx.value - 1 + skills.length) % skills.length }
</script>

<style scoped>
/* 切换箭头：圆形白底 */
.arsenal__arrow {
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: var(--color-foreground);
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.2s var(--ease-out);
}
.arsenal__arrow:hover { transform: scale(1.06); }
/* 中心展示：卡片 + 键盘 */
.arsenal__display {
  flex: 0 0 auto;
  width: 420px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}
.arsenal__card {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.6rem 1.75rem;
  border-radius: var(--radius-3xl);
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 12px 40px -16px rgba(0, 0, 0, 0.12);
  text-align: left;
}
.arsenal__card-icon {
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arsenal__card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding-top: 0.2rem;
}
.arsenal__card-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-foreground);
}
.arsenal__card-desc {
  font-size: 0.9rem;
  line-height: 1.4;
  color: var(--color-eyebrow);
}
/* 虚拟键盘：浅灰底，高亮键紫蓝 */
.arsenal__keyboard {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 0.6rem;
  border-radius: var(--radius-2xl);
  background: var(--color-bg-soft);
}
.arsenal__krow {
  display: flex;
  justify-content: center;
  gap: 0.3rem;
}
.arsenal__key {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  border-radius: 0.4rem;
  background: #ffffff;
  font-size: 0.8rem;
  color: var(--color-foreground);
  box-shadow: 0 1.5px 0 rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.05);
}
/* 当前技能触发键高亮 */
.arsenal__key--hot {
  background: linear-gradient(135deg, #6c8cff, #b86cff);
  color: #ffffff;
  box-shadow: 0 3px 10px rgba(108, 140, 255, 0.45);
}
.arsenal__key--fn {
  flex: 1.4;
  font-size: 0.65rem;
}
.arsenal__space {
  flex: 5;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  background: #ffffff;
  font-size: 0.65rem;
  color: var(--color-eyebrow);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}
/* 底部技能 tab */
.arsenal__tab {
  padding: 0.5rem 1rem;
  border-radius: var(--radius-3xl);
  background: transparent;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-eyebrow);
  cursor: pointer;
  transition: all 0.2s var(--ease-out);
}
.arsenal__tab--active {
  background: #ffffff;
  color: var(--color-foreground);
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.1);
}
@media (max-width: 768px) {
  .arsenal__display { width: 100%; }
}
</style>
