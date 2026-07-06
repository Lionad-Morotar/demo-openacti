<template>
  <!-- Acti is making headlines：三家媒体报道卡 + "View media coverage" 入口 -->
  <section class="headlines page-main-surface px-5 md:px-8 py-24 md:py-32">
    <div class="mx-auto max-w-[1280px]">
      <h2 class="headlines__title text-center text-3xl md:text-5xl font-bold tracking-tight text-foreground">
        Acti is making headlines
      </h2>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <a
          v-for="(item, i) in items"
          :key="i"
          class="headlines__card group flex flex-col rounded-3xl border border-black/5 bg-white/60 p-6 no-underline transition hover:-translate-y-1 hover:shadow-xl"
          :href="item.href"
          target="_blank"
          rel="noopener"
        >
          <div class="flex items-baseline justify-between">
            <span class="text-lg font-bold tracking-tight text-foreground">{{ item.media }}</span>
            <time class="text-xs uppercase tracking-widest" style="color:var(--color-eyebrow)">{{ item.date }}</time>
          </div>
          <h3 class="mt-4 text-base font-semibold leading-snug text-foreground">{{ item.title }}</h3>
          <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground opacity-70 transition group-hover:opacity-100">Read ›</span>
        </a>
      </div>

      <div class="mt-10 text-center">
        <a href="#" class="inline-flex items-center gap-1 text-sm font-medium text-foreground opacity-80 hover:opacity-100">View media coverage ›</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  { media: 'TechCrunch', date: 'JUNE 30, 2026', title: 'Acti puts AI agents directly into your smartphone keyboard', href: '#' },
  { media: 'Digital Trends', date: 'JULY 1, 2026', title: 'Acti just turned your smartphone keyboard into an AI assistant', href: '#' },
  { media: 'Superhuman', date: 'JULY 1, 2026', title: 'Acti drops an “Agentic Keyboard” for iOS and Android', href: '#' },
]
</script>
