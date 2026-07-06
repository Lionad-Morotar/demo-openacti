<template>
  <!-- Hero：badge + hero-title SVG + 副标题 + 下载按钮 + showcase video + silk 虹彩背景。
       原站 hero 内无动画元素（光环在 ActiBar），故 hero 视觉以静态排版 + 视频为主。 -->
  <section class="hero relative flex flex-col items-center overflow-hidden pt-[102px] md:pt-[138px] pb-[100px] md:pb-[160px] px-5">
    <video
      class="hero__silk"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      :src="asset('raw/videos/silk-iridescent.mp4')"
      aria-hidden="true"
    />

    <div class="hero__badge relative z-10 mt-0 flex items-center gap-2 overflow-hidden rounded-full px-5 py-2">
      <img class="hero__badge-deco" :src="asset('raw/img/badge-decoration.svg')" alt="" aria-hidden="true" />
      <img class="hero__badge-logo relative z-[1] h-full" :src="asset('raw/img/icon-google.svg')" alt="" />
      <span class="hero__badge-text relative z-[1] text-sm font-medium text-foreground">Selected for Google AI Startups</span>
    </div>

    <div class="hero__title relative z-10 mt-[60px] md:mt-[90px] w-full max-w-[791px]">
      <img class="hero__title-base block w-full h-auto" :src="asset('raw/img/hero-title-base.svg')" alt="Think it. ACTI on." />
      <!-- base.svg 的 ACTI 区域镂空（viewBox 304-502 无 path），用 hero-acti-4x.png 填充对齐 -->
      <img class="hero__title-acti" :src="asset('raw/img/hero-acti-4x.png')" alt="" aria-hidden="true" />
    </div>

    <p class="hero__sub relative z-10 mt-6 text-center text-[18px] md:text-[24px] font-semibold" style="color:#999">
      The World’s First Agentic Keyboard
    </p>

    <div class="hero__ctas relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
      <a href="https://apps.apple.com/us/app/id6745523677" target="_blank" rel="noopener">
        <img class="h-[48px] w-auto" :src="asset('raw/img/appstore-badge.svg')" alt="Download on the App Store" />
      </a>
      <a href="https://play.google.com/store" target="_blank" rel="noopener">
        <img class="h-[48px] w-auto" :src="asset('raw/img/googleplay-badge.svg')" alt="Get it on Google Play" />
      </a>
    </div>

    <div class="hero__showcase relative z-10 mt-14 w-full max-w-[960px] aspect-video overflow-hidden rounded-3xl bg-bg-soft">
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
      <button v-if="showToggle" class="hero__unmute" type="button" @click="toggleMute">
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
/* hero 背景径向渐变：模拟原站 silk 虹彩视频的 subtle 光晕。
   dev 环境 video autoplay 受限不加载首帧时，CSS 渐变保证视觉层次；
   silk video 播放时（opacity-30）作为动态增强叠加其上。 */
.hero {
  background:
    radial-gradient(ellipse 80% 60% at 50% 38%, color-mix(in srgb, #b8c8ff 38%, transparent), transparent 70%),
    radial-gradient(ellipse 60% 50% at 62% 55%, color-mix(in srgb, #d8b8ff 26%, transparent), transparent 70%);
}
.hero__silk {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
}
.hero__badge {
  border: 1px solid color-mix(in srgb, var(--color-eyebrow) 25%, transparent);
  background: color-mix(in srgb, #fff 70%, transparent);
  backdrop-filter: blur(6px);
}
.hero__badge-deco {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.hero__unmute {
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
.hero__unmute:hover {
  background: color-mix(in srgb, #000 80%, transparent);
}
/* ACTI overlay：对齐 base.svg 镂空区（viewBox 304/624.6≈48.7% 起，宽≈32%）。
   4x PNG 650×235 含 ACTI 字样 + 光晕留白，top/height 微调使字基线对齐 base 文字。 */
.hero__title-acti {
  position: absolute;
  left: 48.5%;
  top: -6%;
  width: 33%;
  height: 112%;
  object-fit: contain;
  pointer-events: none;
}
</style>
