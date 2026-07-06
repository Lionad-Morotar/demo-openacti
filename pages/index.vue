<template>
  <!-- 首页：完整装配 AppHeader + 8 sections + AppFooter。S6 加 scroll-snap 与响应式校验 -->
  <div class="page-main-surface min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1">
      <HeroSection />
      <HeadlinesSection />
      <ActiBarSection />
      <ArsenalSection />
      <WireIdeasSection />
      <PhilosophySection />
      <AskAISection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// 首页：所有 section 由 Nuxt 自动导入的组件装配。
</script>
