import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '~/components/HeroSection.vue'

describe('HeroSection', () => {
  it('渲染 hero title 文案与副标题', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('.hero__title').text()).toContain('Think')
    expect(wrapper.find('.hero__title-acti').text()).toBe('ACTI')
    expect(wrapper.text()).toContain('The World’s First Agentic Keyboard')
  })

  it('渲染 App Store 与 Google Play 下载入口', () => {
    const wrapper = mount(HeroSection)
    const hrefs = wrapper.findAll('a').map(a => a.attributes('href') || '')
    expect(hrefs.some(h => h.includes('apple'))).toBe(true)
    expect(hrefs.some(h => h.includes('play.google'))).toBe(true)
  })

  it('光环背景（3 hero-ring-expand + halo-ring.svg）存在', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.findAll('.hero-ring-expand')).toHaveLength(6)
    expect(wrapper.find('.hero-ring-expand img').attributes('src') || '').toContain('halo-ring.svg')
  })

  it('渲染 Google AI Startups 徽章', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Selected for Google AI Startups')
  })
})
