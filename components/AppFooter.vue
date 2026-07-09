<template>
  <!-- Footer：顶部法务条 + LEARN / COMPARE / GET ACTI 三栏 + 底部版权与社交图标（品牌 SVG 取自原站） -->
  <footer class="footer page-main-surface border-t border-black/10">
    <div class="mx-auto max-w-[1280px] px-5 py-12 md:py-16">
      <div
        class="footer__top flex flex-wrap items-center gap-6 border-b border-black/10 pb-8 text-sm"
        style="color:var(--color-eyebrow)"
      >
        <a href="#">Media Coverage</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div class="mt-8 grid gap-8 md:grid-cols-3">
        <div>
          <div class="footer__head">LEARN</div>
          <a
            v-for="l in learn"
            :key="l"
            href="#"
            class="footer__link"
          >{{ l }}</a>
        </div>
        <div>
          <div class="footer__head">COMPARE</div>
          <a
            v-for="c in compare"
            :key="c"
            href="#"
            class="footer__link"
          >{{ c }}</a>
        </div>
        <div>
          <div class="footer__head">GET ACTI</div>
          <a
            v-for="g in getacti"
            :key="g"
            href="#"
            class="footer__link"
          >{{ g }}</a>
        </div>
      </div>

      <!-- 底部：版权左 + 社交品牌图标右（SVG 取自原站 /assets/icons/） -->
      <div class="footer__bottom mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-8">
        <div
          class="text-sm font-semibold"
          style="color:var(--color-eyebrow)"
        >
          OPENACTI©2026
        </div>
        <div class="flex items-center gap-2">
          <a
            v-for="s in socials"
            :key="s.label"
            href="#"
            class="footer__social"
            :aria-label="s.label"
          >
            <img
              class="footer__social-icon"
              :src="asset(`raw/img/${s.icon}.svg`)"
              :alt="s.label"
            >
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { joinBasePath } from '~/utils/publicPath'
import { SITE_BASE } from '~/utils/site'
const asset = (p: string) => joinBasePath(SITE_BASE, p)

const learn = [
  'What is an Agentic Keyboard?',
  'What is the Acti Bar?',
  'What is Skill Builder?',
  'What is the Skill Hub?',
  'What is an AI keyboard?',
  'Browse Skills'
]
const compare = [
  'Agentic Keyboard vs Gboard',
  'Agentic Keyboard vs Grammarly',
  'Agentic Keyboard vs Wispr Flow',
  'Agentic Keyboard vs ChatGPT',
  'Agentic Keyboard vs Siri'
]
const getacti = ['Free Agentic Keyboard', 'For iPhone', 'For Android']

// 5 个社交品牌图标（顺序与 svg 来源对齐原站 footer）
const socials = [
  { label: 'Reddit', icon: 'reddit' },
  { label: 'X', icon: 'twitter-footer' },
  { label: 'Discord', icon: 'discord' },
  { label: 'App Store', icon: 'apple' },
  { label: 'Google Play', icon: 'android' }
]
</script>

<style scoped>
.footer__head {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-foreground);
  margin-bottom: 1rem;
}
.footer__link {
  display: block;
  font-size: 0.875rem;
  color: var(--color-eyebrow);
  text-decoration: none;
  margin-bottom: 0.6rem;
}
.footer__link:hover {
  color: var(--color-foreground);
}
.footer__social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  color: var(--color-eyebrow);
  transition: color 0.2s var(--ease-out);
}
.footer__social:hover {
  color: var(--color-foreground);
}
.footer__social-icon {
  width: 22px;
  height: 22px;
}
</style>
