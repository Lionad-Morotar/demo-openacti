<template>
  <!-- Don't take our word for it.：5 个 AI 入口 -->
  <section class="askai page-main-surface px-5 py-20 md:py-28">
    <div class="mx-auto max-w-[900px] text-center">
      <h2 class="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        Don’t take our word for it.
      </h2>
      <p
        class="mx-auto mt-4 max-w-[560px] text-base md:text-lg"
        style="color:var(--color-eyebrow)"
      >
        Ask an AI you already trust whether Acti is right for you.
      </p>
      <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          v-for="ai in ais"
          :key="ai"
          href="#"
          class="askai__btn"
        >{{ ai }}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const ais = ['Ask ChatGPT', 'Ask Claude', 'Ask Gemini', 'Ask Perplexity', 'Ask Grok']
</script>

<style scoped>
.askai__btn {
  padding: 0.7rem 1.4rem;
  border-radius: var(--radius-3xl);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-foreground);
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.15s;
}
.askai__btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.15);
}
</style>
