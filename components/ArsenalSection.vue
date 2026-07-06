<template>
  <!-- Choose Your Arsenal.：技能卡跑马灯（MarqueeScroll 无缝双组 + creator-cards-marquee） -->
  <section class="arsenal page-main-surface pt-[160px] pb-[100px] px-5 md:pb-[200px]">
    <div class="mx-auto max-w-[1280px]">
      <h2 class="text-center text-3xl font-bold tracking-tight text-foreground md:text-6xl">
        Choose Your Arsenal.
      </h2>
      <p
        class="mx-auto mt-4 max-w-[640px] text-center text-sm md:mt-5 md:text-lg"
        style="color:var(--color-eyebrow)"
      >
        Built for the obsessed. Equip the exact skill set tailored to your subculture, and execute at the speed of thought.
      </p>
    </div>

    <div class="mt-14 md:mt-20">
      <MarqueeScroll :duration="50">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="arsenal__card"
        >
          <div class="arsenal__card-icon">
            {{ skill.emoji }}
          </div>
          <div class="arsenal__card-name">
            {{ skill.name }}
          </div>
          <div class="arsenal__card-desc">
            {{ skill.desc }}
          </div>
        </div>
      </MarqueeScroll>
    </div>
  </section>
</template>

<script setup lang="ts">
import MarqueeScroll from '~/components/MarqueeScroll.vue'

const skills = [
  { name: 'Vibe Sync', desc: 'Break the ice with a message tailored to their interests.', emoji: '✨' },
  { name: 'Weather Rizz', desc: 'Send a thoughtful message based on the weather.', emoji: '☀️' },
  { name: 'Twitter Guy', desc: 'Draft posts in your own tone, instantly.', emoji: '🐦' },
  { name: 'Productivity Ninja', desc: 'Turn raw text into calendar events and tasks.', emoji: '🥷' },
  { name: 'Super Writer', desc: 'Polish any draft into publish-ready prose.', emoji: '✍️' },
  { name: 'GenZ Rizzer', desc: 'Generate openers that actually land.', emoji: '🔥' },
  { name: 'Crypto Degen', desc: 'Track wallets and fire off transactions fast.', emoji: '₿' },
  { name: 'Super Fans', desc: 'Keep your people close, across every app.', emoji: '💜' }
]
</script>

<style scoped>
.arsenal__card {
  flex: 0 0 280px;
  margin-right: 1rem;
  padding: 1.5rem;
  border-radius: var(--radius-3xl);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(4px);
}
.arsenal__card-icon {
  font-size: 2rem;
}
.arsenal__card-name {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-foreground);
}
.arsenal__card-desc {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--color-eyebrow);
}
</style>
