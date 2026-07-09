<template>
  <!-- Hero：badge + hero-title SVG + 副标题 + 下载按钮 + showcase video + silk 虹彩背景。
       原站 hero 内无动画元素（光环在 ActiBar），故 hero 视觉以静态排版 + 视频为主。 -->
  <section class="hero relative flex flex-col items-center overflow-hidden pt-[102px] md:pt-[138px] pb-[200px] md:pb-[500px] px-5">
    <!-- 光环背景：3 层 hero-ring-expand 同心圆扩散（对齐原站 #hero-video-wrapper .hero-ring-expand + ring.svg + keyframes） -->
    <div
      class="hero__halo"
      aria-hidden="true"
    >
      <div
        v-for="(d, i) in [0, -1.6, -3.2, 0, -1.6, -3.2]"
        :key="i"
        class="hero-ring-expand"
        :style="{ animationDelay: `${d}s` }"
      >
        <img
          :src="asset('raw/img/halo-ring.svg')"
          alt=""
          class="block h-full w-full"
        >
      </div>
    </div>

    <div class="hero__badge relative z-10 mt-0 flex items-center gap-2 overflow-hidden rounded-full px-5 py-2">
      <img
        class="hero__badge-deco"
        :src="asset('raw/img/badge-decoration.svg')"
        alt=""
        aria-hidden="true"
      >
      <img
        class="hero__badge-logo relative z-[1] h-full"
        :src="asset('raw/img/icon-google.svg')"
        alt=""
      >
      <span class="hero__badge-text relative z-[1] text-sm font-medium text-foreground">Selected for Google AI Startups</span>
    </div>

    <h1 class="hero__title relative z-10 mt-[80px] w-full max-w-[900px] text-center text-[clamp(2.75rem,8vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-foreground md:mt-[176px]">
      Think&nbsp;it.&nbsp;<span class="hero__title-acti">ACTI</span>on.
    </h1>

    <p
      class="hero__sub relative z-10 mt-6 text-center text-[18px] md:text-[24px] font-semibold"
      style="color:#999"
    >
      The World’s First Agentic Keyboard
    </p>

    <div class="hero__ctas relative z-10 mt-[120px] flex flex-wrap items-center justify-center gap-[10px] md:mt-[223px]">
      <a
        href="https://apps.apple.com/us/app/id6745523677"
        target="_blank"
        rel="noopener"
      >
        <img
          class="h-[48px] w-auto"
          :src="asset('raw/img/appstore-badge.svg')"
          alt="Download on the App Store"
        >
      </a>
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener"
      >
        <img
          class="h-[48px] w-auto"
          :src="asset('raw/img/googleplay-badge.svg')"
          alt="Get it on Google Play"
        >
      </a>
    </div>

    <!-- ProductHunt top-post-badge（原站 widget，post_id=1177976） -->
    <div class="hero__ph relative z-10 mt-6 flex justify-center">
      <a
        href="https://www.producthunt.com/posts/acti"
        target="_blank"
        rel="noopener"
      >
        <img
          class="h-[44px] w-auto"
          :src="asset('raw/img/producthunt-badge.svg')"
          alt="Acti - Agentic keyboard for mobile commands and search | Product Hunt"
        >
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { joinBasePath } from '~/utils/publicPath'
import { SITE_BASE } from '~/utils/site'

const asset = (p: string) => joinBasePath(SITE_BASE, p)
</script>

<style scoped>
/* hero 背景径向渐变：模拟原站 silk 虹彩视频的 subtle 光晕。
   dev 环境 video autoplay 受限不加载首帧时，CSS 渐变保证视觉层次；
   silk video 播放时（opacity-30）作为动态增强叠加其上。 */
.hero {
  background: var(--color-bg-main);
}
.hero__halo {
  position: absolute;
  left: 0;
  top: 380px;
  z-index: 0;
  pointer-events: none;
}
@media (min-width: 768px) {
  .hero__halo { left: 50%; top: 0; }
}
.hero-ring-expand {
  position: absolute;
  top: 0;
  left: 0;
  width: 960px;
  height: 960px;
  pointer-events: none;
  will-change: transform, opacity;
  animation: hero-ring-expand 4.8s linear infinite;
}
.hero-ring-expand img {
  filter: drop-shadow(0 0 14px rgba(255, 255, 255, 0.85));
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
/* ACTI 玻璃渐变：浅蓝银灰半透明，background-clip text 实现文字玻璃质感（对齐原站品牌锚点） */
.hero__title-acti {
  background: linear-gradient(120deg, #7ba8c8 0%, #a8c4d9 45%, #c5d5e5 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>
