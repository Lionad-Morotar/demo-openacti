<template>
  <!-- Acti Bar > Space Bar：3 步 pill（无数字）+ 左侧 4 功能卡片横排 + 右侧手机演示（搜索框 + 浅蓝键盘）。
       对齐原站当前版本：静态卡片+手机，无光环。 -->
  <section class="actibar page-main-surface relative overflow-hidden pt-[160px] md:pt-[264px] pb-[160px] md:pb-[356px] px-5 snap-page">
    <div class="mx-auto flex max-w-[1100px] flex-col items-center">
      <h2 class="text-center text-3xl font-bold tracking-tight text-foreground md:text-6xl">
        Acti Bar <span class="actibar__arrow">&gt;</span> Space Bar
      </h2>
      <p
        class="mt-4 max-w-[560px] text-center text-sm md:mt-5 md:max-w-[640px] md:text-lg"
        style="color:var(--color-eyebrow)"
      >
        No more app switching. Type your intent anywhere, <strong style="color:var(--color-foreground);font-weight:600">long-press the Acti Bar</strong>, then invoke magic.
      </p>

      <!-- 3 步 pill：无数字，白底浅灰边，圆形箭头连接 -->
      <div class="mt-10 flex flex-wrap items-center justify-center gap-5 md:mt-12 md:gap-7">
        <template
          v-for="(step, i) in steps"
          :key="i"
        >
          <div class="actibar__step">{{ step }}</div>
          <span
            v-if="i < steps.length - 1"
            class="actibar__step-arrow"
            aria-hidden="true"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                fill="#ffffff"
                stroke="rgba(0,0,0,0.08)"
              />
              <path
                d="M7 10h6M10 7l3 3-3 3"
                stroke="#5b6472"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </template>
      </div>

      <!-- 中部：左侧 4 功能卡片横排 + 右侧手机演示 -->
      <div class="actibar__stage mt-[60px] flex flex-wrap items-center justify-between gap-6 md:mt-[251px] md:gap-10">
        <div class="actibar__cards flex flex-1 flex-wrap items-stretch justify-center gap-4 md:gap-6">
          <div
            v-for="card in cards"
            :key="card.title"
            class="actibar__card"
          >
            <div class="actibar__card-icon">
              <ActiBarIcon :name="card.icon" />
            </div>
            <div class="actibar__card-title">{{ card.title }}</div>
          </div>
        </div>

        <!-- 手机演示：写实 iPhone 外壳 + 搜索框 + 蓝键盘 -->
        <PhoneMockup>
          <div class="actibar__search-bar">
            <span class="actibar__search-text">World Cup today</span>
            <span class="actibar__search-icons">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 11a7 7 0 0 1-14 0M12 18v3"
                  stroke="#5b6472"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#5b6472"
                  stroke-width="1.8"
                />
                <path
                  d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"
                  stroke="#5b6472"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
          <div class="actibar__keyboard">
            <div
              v-for="(row, ri) in keyboardRows"
              :key="ri"
              class="actibar__krow"
            >
              <span
                v-for="key in row"
                :key="key"
                class="actibar__key"
              >{{ key }}</span>
            </div>
            <div class="actibar__krow actibar__krow--bottom">
              <span class="actibar__key actibar__key--fn">123</span>
              <span class="actibar__key actibar__key--fn">≲</span>
              <span class="actibar__actibar-key">Acti Bar<span class="actibar__tap"> 👆</span></span>
              <span class="actibar__key actibar__key--fn">⏎</span>
            </div>
          </div>
        </PhoneMockup>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ActiBarIcon from '~/components/ActiBarIcon.vue'
import PhoneMockup from '~/components/PhoneMockup.vue'

const steps = ['Type your intent', 'Hold the Acti Bar', 'Invoke magic']
const keyboardRows: string[][] = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]

// 4 功能卡片：对齐原站 ACTI 触发 / 餐厅 / 位置 / 世界杯 场景
const cards = [
  { icon: 'acti', title: 'AI Trigger' },
  { icon: 'restaurant', title: "Summon SF's best Italian restaurants." },
  { icon: 'location', title: 'Share your location link instantly.' },
  { icon: 'trophy', title: 'Drop World Cup schedules' }
] as const
</script>

<style scoped>
.actibar__arrow {
  display: inline-block;
  margin: 0 0.2em;
  color: var(--color-foreground);
}
/* 步骤 pill：白底、柔和投影、更长（对齐原站长 pill + 圆形阴影箭头） */
.actibar__step {
  padding: 0.75rem 1.7rem;
  border-radius: var(--radius-3xl);
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-foreground);
  box-shadow: 0 4px 14px -4px rgba(0, 0, 0, 0.12);
}
.actibar__step-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
}
/* 4 功能卡片：修长竖向（高 ≈520 对齐原站），接近无底板悬浮（极淡白） */
.actibar__card {
  flex: 1 1 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.4rem;
  padding: 2rem 1rem 2.2rem;
  border-radius: var(--radius-3xl);
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid transparent;
  min-height: 500px;
}
.actibar__card-icon {
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
}
.actibar__card-title {
  width: 100%;
  font-size: 0.85rem;
  font-weight: 600;
  line-height: 1.35;
  text-align: left;
  color: var(--color-foreground);
}
/* 手机 mockup：黑边框，搜索框 + 浅蓝键盘 */
.actibar__phone {
  position: relative;
  z-index: 1;
  width: 280px;
  padding: 0.75rem;
  border-radius: 2rem;
  background: #ffffff;
  border: 8px solid #111111;
  box-shadow: 0 24px 60px -24px rgba(0, 0, 0, 0.22);
}
.actibar__search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.65rem 0.85rem;
  margin: 0.5rem 0.5rem 0.75rem;
  border-radius: var(--radius-2xl);
  background: #dde8f5;
  font-size: 0.85rem;
  color: var(--color-foreground);
}
.actibar__search-icons {
  display: inline-flex;
  gap: 0.4rem;
  opacity: 0.7;
}
.actibar__keyboard {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 0.5rem;
  border-radius: var(--radius-2xl);
  background: #dce7f4; /* 蓝紫键盘底，对齐原站 iOS 键盘色调 */
}
.actibar__krow {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
}
.actibar__key {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  border-radius: 0.4rem;
  background: #ffffff;
  font-size: 0.78rem;
  color: var(--color-foreground);
  box-shadow: 0 1.5px 0 rgba(0, 0, 0, 0.18), 0 1px 2px rgba(0, 0, 0, 0.08);
}
.actibar__key--fn {
  flex: 1.5;
  font-size: 0.65rem;
}
/* Acti Bar 键取代空格键：蓝色胶囊（对齐原站 iOS 蓝调） */
.actibar__actibar-key {
  flex: 4;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  background: linear-gradient(135deg, #2f7dff, #1e5fcc);
  color: #ffffff;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: 0 2px 6px rgba(47, 125, 255, 0.4);
}
@media (max-width: 768px) {
  .actibar__card {
    flex: 1 1 120px;
  }
}
</style>
