<template>
  <!-- Video Showcase：Acti 产品演示视频。原站为 hero 之后的独立 section（#video-showcase），本地从 HeroSection 拆出以对齐结构。 -->
  <section class="showcase page-main-surface relative px-5 pt-8 pb-[100px] md:pb-[160px]">
    <div class="relative mx-auto aspect-video w-full max-w-[960px] overflow-hidden rounded-3xl bg-bg-soft">
      <video
        ref="showcaseRef"
        class="h-full w-full object-cover"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        :poster="asset('raw/img/poster-desktop.png')"
        :src="asset('raw/videos/Acti_showcase_desktop.mp4')"
      />
      <button
        v-if="showToggle"
        class="showcase__unmute"
        type="button"
        @click="toggleMute"
      >
        {{ muted ? '取消静音' : '静音' }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { joinBasePath } from '~/utils/publicPath'
import { SITE_BASE } from '~/utils/site'

const asset = (p: string) => joinBasePath(SITE_BASE, p)

const showcaseRef = ref<HTMLVideoElement | null>(null)
const muted = ref(true)
const showToggle = ref(false)

onMounted(() => {
  // 仅在客户端展示静音切换；SSR 不渲染按钮避免 hydration 不一致
  showToggle.value = true
})

function toggleMute() {
  const v = showcaseRef.value
  if (!v) return
  v.muted = !v.muted
  muted.value = v.muted
  if (!v.muted) v.play().catch(() => {})
}
</script>

<style scoped>
.showcase__unmute {
  position: absolute;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: var(--radius-2xl);
  background: color-mix(in srgb, #000 60%, transparent);
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  border: none;
}
.showcase__unmute:hover {
  background: color-mix(in srgb, #000 80%, transparent);
}
</style>
