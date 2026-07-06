<template>
  <!-- 无缝跑马灯：渲染 slot 两次为一组（group），track 用 creator-cards-marquee 平移 -50%，
       因前半组与后半组内容相同，平移到 -50% 时视觉无缝衔接。两端 mask 渐隐。 -->
  <div
    class="marquee"
    :class="{ 'marquee--reverse': reverse }"
  >
    <div
      class="marquee__track"
      :style="{ animationDuration: `${duration}s` }"
    >
      <div class="marquee__group">
        <slot />
      </div>
      <div
        class="marquee__group"
        aria-hidden="true"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ duration?: number, reverse?: boolean }>(), {
  duration: 40,
  reverse: false
})
</script>

<style scoped>
.marquee {
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent);
}
.marquee__track {
  display: flex;
  width: max-content;
  animation-name: creator-cards-marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.marquee--reverse .marquee__track {
  animation-direction: reverse;
}
.marquee__group {
  display: flex;
  flex-shrink: 0;
}
</style>
