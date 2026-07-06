<template>
  <span
    class="tracer-label"
    data-testid="tracer-label"
  >{{ text }}</span>
</template>

<script setup lang="ts">
// S1 tracer bullet 组件：仅用于证明 Vue + Tailwind + vitest 链路打通，S2 起可移除。
defineProps<{ text: string }>()
</script>
