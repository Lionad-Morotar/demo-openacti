import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppFooter from '~/components/AppFooter.vue'

describe('AppFooter', () => {
  it('含 LEARN / COMPARE / GET ACTI 三栏', () => {
    const w = mount(AppFooter)
    const heads = w.findAll('.footer__head').map(h => h.text())
    expect(heads).toEqual(['LEARN', 'COMPARE', 'GET ACTI'])
  })

  it('顶部含 Media Coverage / Terms / Privacy 与版权', () => {
    const text = mount(AppFooter).text()
    expect(text).toContain('Media Coverage')
    expect(text).toContain('Terms of Service')
    expect(text).toContain('Privacy Policy')
    expect(text).toContain('OPENACTI©2026')
  })

  it('COMPARE 含 vs Gboard 与 vs Siri', () => {
    const text = mount(AppFooter).text()
    expect(text).toContain('vs Gboard')
    expect(text).toContain('vs Siri')
  })
})
