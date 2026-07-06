import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppHeader from '~/components/AppHeader.vue'

describe('AppHeader', () => {
  it('渲染 5 条 nav-slot tagline', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.findAll('.nav-slot-line')).toHaveLength(5)
  })

  it('tagline 文案逐字对齐原站', () => {
    const wrapper = mount(AppHeader)
    const text = wrapper.text()
    expect(text).toContain('Words in. Actions out.')
    expect(text).toContain('It doesn\'t predict your next word. It takes your next action.')
  })

  it('logo 与导航图标 src 带 baseURL 拼接', () => {
    const wrapper = mount(AppHeader)
    const srcs = wrapper.findAll('img').map(i => i.attributes('src') || '')
    expect(srcs.some(s => s.includes('logo-nav.png'))).toBe(true)
    expect(srcs.some(s => s.includes('icon-play.svg'))).toBe(true)
    expect(srcs.some(s => s.includes('icon-discord.svg'))).toBe(true)
  })

  it('每行注入 --w 与 --d 两个 CSS 变量驱动打字机', () => {
    const wrapper = mount(AppHeader)
    const line = wrapper.find('.nav-slot-line')
    const style = line.attributes('style') || ''
    expect(style).toContain('--w')
    expect(style).toContain('--d')
  })

  it('提供 Action / Community 入口', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.text()).toContain('Action')
    expect(wrapper.text()).toContain('Community')
  })
})
