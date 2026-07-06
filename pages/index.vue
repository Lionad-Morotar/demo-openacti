<template>
  <!-- 首页：S4 装配 ActiBar + Arsenal；S5 继续填充 WireIdeas/Philosophy/AskAI/Footer -->
  <div class="page-main-surface min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1">
      <HeroSection />
      <HeadlinesSection />
      <ActiBarSection />
      <ArsenalSection />
    </main>
  </div>
</template>

<script setup lang="ts">
// 首页：section 由 Nuxt 自动导入的组件装配。
</script>
