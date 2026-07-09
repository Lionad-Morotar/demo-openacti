<template>
  <!-- 写实 iPhone mockup：金属渐变外壳 + 灵动岛刘海 + 圆角屏幕 + 键盘槽。
       screen / keyboard 两个 slot 供调用方填业务内容（搜索框、Acti Bar 键等）。 -->
  <div class="phone">
    <div class="phone__frame">
      <div
        class="phone__notch"
        aria-hidden="true"
      />
      <div class="phone__screen">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 纯展示组件，状态由调用方通过 slot 注入
</script>

<style scoped>
.phone {
  display: inline-block;
  width: 280px;
  padding: 9px;
  border-radius: 2.8rem;
  background: linear-gradient(150deg, #e4e6e9 0%, #f8f9fb 45%, #c5c8cc 100%);
  box-shadow:
    0 32px 64px -28px rgba(0, 0, 0, 0.4),
    0 0 90px rgba(180, 200, 255, 0.32),
    inset 0 1px 1px rgba(255, 255, 255, 0.7),
    inset 0 0 0 1.5px rgba(0, 0, 0, 0.5);
}
.phone__frame {
  position: relative;
  border-radius: 2.3rem;
  background: #050507;
  padding: 6px;
  overflow: hidden;
}
/* 灵动岛刘海 */
.phone__notch {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 88px;
  height: 24px;
  background: #000;
  border-radius: 999px;
  z-index: 5;
}
.phone__screen {
  position: relative;
  border-radius: 1.9rem;
  background: #ffffff;
  overflow: hidden;
  min-height: 140px;
}
</style>
