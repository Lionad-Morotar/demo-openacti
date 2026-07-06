<template>
  <!-- 多层光环扩散：每环用 ring-diffuse 动画改变 width/height（40→820px），
       inset:0 + margin:auto 保证环始终相对父容器居中。stagger 控制环间错峰。 -->
  <div
    class="halo-rings"
    aria-hidden="true"
  >
    <span
      v-for="r in rings"
      :key="r"
      class="halo-ring"
      :style="{ animationDelay: `${(r * stagger).toFixed(2)}s`, animationDuration: `${duration}s` }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  count?: number
  duration?: number
  stagger?: number
}>(), {
  count: 3,
  duration: 6,
  stagger: 2
})

const rings = computed(() => Array.from({ length: props.count }, (_, i) => i))
</script>

<style scoped>
.halo-rings {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.halo-ring {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  border: 1px solid color-mix(in srgb, var(--color-eyebrow) 60%, transparent);
  animation-name: ring-diffuse;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
}
</style>
