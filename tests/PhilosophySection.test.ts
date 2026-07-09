import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PhilosophySection from '~/components/PhilosophySection.vue'

describe('PhilosophySection', () => {
  it('含 eyebrow 与 4 理念', () => {
    const w = mount(PhilosophySection)
    expect(w.text()).toContain('The Philosophy')
    for (const word of ['Amplify', 'Command', 'Transcend', 'Intuit']) {
      expect(w.text()).toContain(word)
    }
  })

  it('渲染卡片 A/C/T/I 字母水印装饰', () => {
    const w = mount(PhilosophySection)
    expect(w.findAll('.philosophy__card-letter')).toHaveLength(4)
  })
})
