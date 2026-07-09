import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ActiBarSection from '~/components/ActiBarSection.vue'

describe('ActiBarSection', () => {
  it('渲染 3 步 pill（Type/Hold/Invoke）', () => {
    const w = mount(ActiBarSection)
    expect(w.findAll('.actibar__step')).toHaveLength(3)
    expect(w.text()).toContain('Type your intent')
    expect(w.text()).toContain('Hold the Acti Bar')
    expect(w.text()).toContain('Invoke magic')
  })

  it('含 Acti Bar > Space Bar 标题', () => {
    const text = mount(ActiBarSection).text()
    expect(text).toContain('Acti Bar')
    expect(text).toContain('Space Bar')
  })

  it('手机含 QWERTY 键盘', () => {
    const w = mount(ActiBarSection)
    expect(w.findAll('.actibar__key').length).toBeGreaterThanOrEqual(20)
    expect(w.text()).toContain('Q')
  })

  it('含 4 功能卡片（AI Trigger / Summon / Share / World Cup）', () => {
    const w = mount(ActiBarSection)
    expect(w.findAll('.actibar__card')).toHaveLength(4)
    expect(w.text()).toContain('AI Trigger')
    expect(w.text()).toContain("Summon SF's best Italian restaurants")
    expect(w.text()).toContain('Share your location link instantly')
    expect(w.text()).toContain('Drop World Cup schedules')
  })

  it('含手机搜索框 World Cup today', () => {
    expect(mount(ActiBarSection).text()).toContain('World Cup today')
  })

  it('含 Acti Bar 键取代空格键', () => {
    expect(mount(ActiBarSection).findAll('.actibar__actibar-key')).toHaveLength(1)
  })
})
