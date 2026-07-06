import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import TracerLabel from '~/components/TracerLabel.vue'

const mainCss = readFileSync(resolve(__dirname, '../assets/css/main.css'), 'utf8')

describe('tracer bullet: S1 骨架与设计 Token', () => {
  it('挂载 Vue 组件验证前端测试链路', () => {
    const wrapper = mount(TracerLabel, { props: { text: 'ACTI' } })
    expect(wrapper.text()).toBe('ACTI')
  })

  it('main.css 注入了 9 个 keyframes（命名对齐原站）', () => {
    const names = [
      'ambient-halo-breathe',
      'ring-diffuse',
      'hero-ring-expand',
      'creator-cards-marquee',
      'connector-dash-flow',
      'pulse',
      'nav-slot-presence',
      'nav-slot-typed',
      'nav-slot-caret'
    ]
    for (const n of names) {
      expect(mainCss, `期望含 @keyframes ${n}`).toContain(`@keyframes ${n}`)
    }
  })

  it('main.css 注入了核心设计 token', () => {
    expect(mainCss).toContain('--color-bg-main: #eef2f7')
    expect(mainCss).toContain('--color-foreground: #111111')
    expect(mainCss).toContain('--font-sans: \'Outfit\'')
  })
})
