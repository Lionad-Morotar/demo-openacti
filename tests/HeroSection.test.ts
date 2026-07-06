import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '~/components/HeroSection.vue'

describe('HeroSection', () => {
  it('渲染 hero title（alt 文案对齐原站）与副标题', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('.hero__title-base').attributes('alt')).toBe('Think it. ACTI on.')
    expect(wrapper.text()).toContain('The World’s First Agentic Keyboard')
  })

  it('渲染 App Store 与 Google Play 下载入口', () => {
    const wrapper = mount(HeroSection)
    const hrefs = wrapper.findAll('a').map(a => a.attributes('href') || '')
    expect(hrefs.some(h => h.includes('apple'))).toBe(true)
    expect(hrefs.some(h => h.includes('play.google'))).toBe(true)
  })

  it('showcase video 的 src 与 poster 指向 baseURL 拼接路径', () => {
    const wrapper = mount(HeroSection)
    const video = wrapper.find('.hero__showcase video')
    expect((video.attributes('src') || '').includes('Acti_showcase_desktop.mp4')).toBe(true)
    expect((video.attributes('poster') || '').includes('poster-desktop.png')).toBe(true)
  })

  it('silk 虹彩背景视频存在', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.findAll('.hero__silk')).toHaveLength(1)
  })

  it('渲染 Google AI Startups 徽章', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Selected for Google AI Startups')
  })
})
