<template>
  <!-- ActiBar 功能卡片线条图标：acti/restaurant/location/trophy。黑色线条，对齐原站简约风格。 -->
  <svg
    width="36"
    height="36"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <template v-if="name === 'acti'">
      <!-- AI Trigger：4 小圆带 A/C/T/I 字母 -->
      <circle
        cx="7"
        cy="9"
        r="3"
        stroke="#111"
        stroke-width="1.4"
      />
      <circle
        cx="18"
        cy="9"
        r="3"
        stroke="#111"
        stroke-width="1.4"
      />
      <circle
        cx="7"
        cy="19"
        r="3"
        stroke="#111"
        stroke-width="1.4"
      />
      <circle
        cx="18"
        cy="19"
        r="3"
        stroke="#111"
        stroke-width="1.4"
      />
      <text
        x="7"
        y="10.8"
        text-anchor="middle"
        font-size="4.5"
        font-weight="800"
        fill="#111"
      >A</text>
      <text
        x="18"
        y="10.8"
        text-anchor="middle"
        font-size="4.5"
        font-weight="800"
        fill="#111"
      >C</text>
      <text
        x="7"
        y="20.8"
        text-anchor="middle"
        font-size="4.5"
        font-weight="800"
        fill="#111"
      >T</text>
      <text
        x="18"
        y="20.8"
        text-anchor="middle"
        font-size="4.5"
        font-weight="800"
        fill="#111"
      >I</text>
    </template>

    <template v-else-if="name === 'restaurant'">
      <!-- 餐具：叉子 + 刀 -->
      <path
        d="M9 5v7M7 5v3a2 2 0 0 0 4 0V5M9 12v11"
        stroke="#111"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 5c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9"
        stroke="#111"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </template>

    <template v-else-if="name === 'location'">
      <!-- 定位针 -->
      <path
        d="M14 4a6 6 0 0 0-6 6c0 4.5 6 12 6 12s6-7.5 6-12a6 6 0 0 0-6-6z"
        stroke="#111"
        stroke-width="1.4"
        stroke-linejoin="round"
      />
      <circle
        cx="14"
        cy="10"
        r="2.2"
        stroke="#111"
        stroke-width="1.4"
      />
    </template>

    <template v-else-if="name === 'trophy'">
      <!-- 奖杯 -->
      <path
        d="M9 5h10v3a5 5 0 0 1-10 0V5z"
        stroke="#111"
        stroke-width="1.4"
        stroke-linejoin="round"
      />
      <path
        d="M9 6H6v2a3 3 0 0 0 3 3M19 6h3v2a3 3 0 0 1-3 3M14 13v4M10 21h8M11 17h6"
        stroke="#111"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </template>
  </svg>
</template>

<script setup lang="ts">
defineProps<{ name: 'acti' | 'restaurant' | 'location' | 'trophy' }>()
</script>
