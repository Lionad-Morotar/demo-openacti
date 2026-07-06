import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ArsenalSection from '~/components/ArsenalSection.vue'

describe('ArsenalSection', () => {
  it('含 Choose Your Arsenal 标题与副标题', () => {
    const w = mount(ArsenalSection)
    expect(w.text()).toContain('Choose Your Arsenal')
    expect(w.text()).toContain('Built for the obsessed')
  })

  it('渲染技能卡片（MarqueeScroll 双组使数量翻倍）', () => {
    const w = mount(ArsenalSection)
    expect(w.findAll('.arsenal__card').length).toBeGreaterThanOrEqual(8)
  })

  it('含 marquee 跑马灯轨道', () => {
    expect(mount(ArsenalSection).find('.marquee__track').exists()).toBe(true)
  })
})
