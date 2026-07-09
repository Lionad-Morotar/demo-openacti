import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ArsenalSection from '~/components/ArsenalSection.vue'

describe('ArsenalSection', () => {
  it('含 Choose Your Arsenal 标题与副标题', () => {
    const w = mount(ArsenalSection)
    expect(w.text()).toContain('Choose Your Arsenal')
    expect(w.text()).toContain('Built for the obsessed')
  })

  it('渲染单卡片切换器（中心 1 张当前技能卡片）', () => {
    const w = mount(ArsenalSection)
    expect(w.findAll('.arsenal__card')).toHaveLength(1)
    expect(w.text()).toContain('Vibe Sync')
  })

  it('含技能 tab 列表（≥5）', () => {
    const w = mount(ArsenalSection)
    expect(w.findAll('.arsenal__tab').length).toBeGreaterThanOrEqual(5)
  })

  it('含虚拟键盘与高亮触发键', () => {
    const w = mount(ArsenalSection)
    expect(w.findAll('.arsenal__key').length).toBeGreaterThan(20)
    expect(w.findAll('.arsenal__key--hot')).toHaveLength(1)
  })

  it('点击 tab 切换当前技能', async () => {
    const w = mount(ArsenalSection)
    const tabs = w.findAll('.arsenal__tab')
    const target = tabs[2]
    expect(target).toBeTruthy()
    await target!.trigger('click')
    expect(w.text()).toContain('Twitter Guy')
    expect(target!.classes()).toContain('arsenal__tab--active')
  })
})
