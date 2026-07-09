<template>
  <!-- The Philosophy：大标题 + 2×2 卡片（每卡片右上角字母装饰） -->
  <section class="philosophy page-main-surface relative overflow-hidden pt-[120px] md:pt-[160px] pb-[100px] px-5 md:pb-[200px] snap-page">
    <div class="relative mx-auto max-w-[1280px]">
      <h2 class="mb-10 text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl">
        The Philosophy
      </h2>
      <div class="grid grid-cols-2 gap-6 md:gap-8">
        <div
          v-for="p in items"
          :key="p.word"
          class="philosophy__card"
        >
          <span
            class="philosophy__card-letter"
            aria-hidden="true"
          >{{ p.letter }}</span>
          <h3 class="text-2xl font-bold tracking-tight text-foreground md:text-4xl">
            {{ p.word }}
          </h3>
          <div
            class="mt-2 text-xs uppercase tracking-widest"
            style="color:var(--color-eyebrow)"
          >
            {{ p.sub }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  { word: 'Amplify', sub: 'Your Bandwidth', letter: 'A' },
  { word: 'Command', sub: 'Your Routine', letter: 'C' },
  { word: 'Transcend', sub: 'App Boundaries', letter: 'T' },
  { word: 'Intuit', sub: 'Your Needs', letter: 'I' }
]
</script>

<style scoped>
.philosophy__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.philosophy__bg-letter {
  position: absolute;
  font-size: 38vw;
  font-weight: 900;
  opacity: 0.035;
  color: var(--color-foreground);
  line-height: 1;
}
.philosophy__bg-letter--1 {
  left: 2%;
  top: 5%;
}
.philosophy__bg-letter--2 {
  right: 25%;
  top: 45%;
}
.philosophy__bg-letter--3 {
  left: 35%;
  top: 0%;
}
.philosophy__bg-letter--4 {
  right: 2%;
  bottom: 5%;
}
.philosophy__card {
  position: relative;
  z-index: 1;
  padding: 2.5rem 2rem;
  border-radius: var(--radius-3xl);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.06);
  overflow: hidden;
  min-height: 180px;
}
/* 卡片大水印字母：占满卡片，极淡，作背景层次 */
.philosophy__card-letter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 11rem;
  font-weight: 900;
  line-height: 1;
  color: var(--color-foreground);
  opacity: 0.06;
  pointer-events: none;
}
</style>
