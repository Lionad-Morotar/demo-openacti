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

  it('键盘含 ACTI 四键高亮', () => {
    const w = mount(ActiBarSection)
    expect(w.findAll('.actibar__key--acti')).toHaveLength(4)
  })

  it('命令示例轮播含初始命令', () => {
    expect(mount(ActiBarSection).text()).toContain('Summon')
  })

  it('含 Acti Bar 键取代空格键', () => {
    expect(mount(ActiBarSection).findAll('.actibar__actibar-key')).toHaveLength(1)
  })
})
