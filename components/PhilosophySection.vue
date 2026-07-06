<template>
  <!-- The Philosophy：4 理念超大字 + 背景半透明 A/C/T/I 字母装饰 -->
  <section class="philosophy page-main-surface relative overflow-hidden pt-[160px] pb-[100px] px-5 md:pb-[200px] snap-page">
    <div class="philosophy__bg" aria-hidden="true">
      <span v-for="(l, i) in letters" :key="l" class="philosophy__bg-letter" :class="`philosophy__bg-letter--${i + 1}`">{{ l }}</span>
    </div>
    <div class="relative mx-auto max-w-[1280px]">
      <div class="mb-8 text-center text-xs uppercase tracking-widest md:mb-12" style="color:var(--color-eyebrow)">
        The Philosophy
      </div>
      <div class="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        <div v-for="p in items" :key="p.word" class="philosophy__item">
          <h3 class="text-3xl font-bold tracking-tight text-foreground md:text-5xl">{{ p.word }}</h3>
          <div class="mt-2 text-xs uppercase tracking-widest" style="color:var(--color-eyebrow)">{{ p.sub }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  { word: 'Amplify', sub: 'Your Bandwidth' },
  { word: 'Command', sub: 'Your Routine' },
  { word: 'Transcend', sub: 'App Boundaries' },
  { word: 'Intuit', sub: 'Your Needs' },
]
const letters = ['A', 'C', 'T', 'I']
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
.philosophy__item {
  position: relative;
  z-index: 1;
}
</style>
