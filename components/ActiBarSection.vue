<template>
  <!-- Acti Bar > Space Bar：3 步 pill + halo 光环扩散 + 手机键盘 mockup（ACTI 四键高亮）+ 命令示例轮播 -->
  <section class="actibar page-main-surface relative overflow-hidden pt-[120px] md:pt-[160px] pb-[100px] md:pb-[200px] px-5 snap-page">
    <div class="mx-auto flex max-w-[1100px] flex-col items-center">
      <h2 class="text-center text-3xl font-bold tracking-tight text-foreground md:text-6xl">
        Acti Bar <span class="actibar__arrow">›</span> Space Bar
      </h2>
      <p
        class="mt-4 max-w-[560px] text-center text-sm md:mt-5 md:max-w-[640px] md:text-lg"
        style="color:var(--color-eyebrow)"
      >
        No more app switching. Type your intent anywhere, long-press the Acti Bar, then invoke magic.
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-3 md:mt-12 md:gap-4">
        <template
          v-for="(step, i) in steps"
          :key="i"
        >
          <div class="actibar__step">
            <span class="actibar__step-num">{{ i + 1 }}</span>{{ step }}
          </div>
          <span
            v-if="i < steps.length - 1"
            class="actibar__step-arrow"
          >›</span>
        </template>
      </div>

      <div class="actibar__stage relative mt-14 flex items-center justify-center md:mt-20">
        <HaloRings
          :count="4"
          :duration="7"
          :stagger="1.6"
        />
        <div class="actibar__phone relative">
          <div class="actibar__command-bar">
            <span class="actibar__command-text">{{ currentCommand }}</span>
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
                :class="{ 'actibar__key--acti': actiKeys.has(key) }"
              >{{ key }}</span>
            </div>
            <div class="actibar__krow actibar__krow--bottom">
              <span class="actibar__key actibar__key--fn">123</span>
              <span class="actibar__key actibar__key--fn">≲</span>
              <span class="actibar__actibar-key">Acti Bar</span>
              <span class="actibar__key actibar__key--fn">⏎</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HaloRings from '~/components/HaloRings.vue'

const steps = ['Type your intent', 'Hold the Acti Bar', 'Invoke magic']
const actiKeys = new Set(['A', 'C', 'T', 'I'])
const keyboardRows: string[][] = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]

const commands = [
  'Summon SF\'s best Italian restaurants.',
  'Share your location link instantly.',
  'Drop World Cup schedules.'
]
const currentCommand = ref(commands[0])
let cmdIdx = 0
let cmdTimer: ReturnType<typeof setInterval> | null = null
onMounted(() => {
  cmdTimer = setInterval(() => {
    cmdIdx = (cmdIdx + 1) % commands.length
    currentCommand.value = commands[cmdIdx]
  }, 2800)
})
onUnmounted(() => { if (cmdTimer) clearInterval(cmdTimer) })
</script>

<style scoped>
.actibar__arrow {
  display: inline-block;
  margin: 0 0.2em;
  color: var(--color-eyebrow);
}
.actibar__step {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-3xl);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 0.9rem;
  font-weight: 500;
}
.actibar__step-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background: var(--color-foreground);
  color: var(--color-bg-main);
  font-size: 0.75rem;
  font-weight: 700;
}
.actibar__step-arrow {
  color: var(--color-eyebrow);
  opacity: 0.6;
}
.actibar__stage {
  width: 100%;
  max-width: 420px;
  height: 460px;
}
.actibar__phone {
  position: relative;
  z-index: 1;
  width: 300px;
  padding: 1rem;
  border-radius: var(--radius-3xl);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 20px 60px -20px rgba(0, 0, 0, 0.15);
}
.actibar__command-bar {
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border-radius: var(--radius-2xl);
  background: var(--color-bg-soft);
  font-size: 0.85rem;
  color: var(--color-foreground);
  min-height: 2.5rem;
  display: flex;
  align-items: center;
}
.actibar__keyboard {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.actibar__krow {
  display: flex;
  justify-content: center;
  gap: 0.3rem;
}
.actibar__key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.6rem;
  height: 2rem;
  padding: 0 0.3rem;
  border-radius: 0.375rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 0.8rem;
  color: var(--color-keyboard-glyph);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
}
/* ACTI 四键高亮：紫蓝渐变 + 发光，对应原站 ACTI 字样高亮 */
.actibar__key--acti {
  background: linear-gradient(135deg, #6c8cff, #b86cff);
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(108, 140, 255, 0.4);
}
.actibar__key--fn {
  min-width: 2.4rem;
  font-size: 0.7rem;
}
/* Acti Bar 键取代空格键：深色胶囊 */
.actibar__actibar-key {
  flex: 1;
  min-width: 8rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  background: linear-gradient(135deg, #111111, #333333);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}
</style>
