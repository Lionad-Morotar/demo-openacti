import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeadlinesSection from '~/components/HeadlinesSection.vue'

describe('HeadlinesSection', () => {
  it('渲染 3 家媒体卡', () => {
    const wrapper = mount(HeadlinesSection)
    expect(wrapper.findAll('.headlines__card')).toHaveLength(3)
  })

  it('含三家媒体名与媒体报道入口', () => {
    const wrapper = mount(HeadlinesSection)
    const text = wrapper.text()
    expect(text).toContain('TechCrunch')
    expect(text).toContain('Digital Trends')
    expect(text).toContain('Superhuman')
    expect(text).toContain('View media coverage')
  })

  it('标题为 Acti is making headlines', () => {
    const wrapper = mount(HeadlinesSection)
    expect(wrapper.find('.headlines__title').text()).toBe('Acti is making headlines')
  })
})
