import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WireIdeasSection from '~/components/WireIdeasSection.vue'

describe('WireIdeasSection', () => {
  it('含标题与副标题', () => {
    const w = mount(WireIdeasSection)
    expect(w.text()).toContain('Wire Your Ideas')
    expect(w.text()).toContain('Mash up APIs and applications')
  })

  it('渲染 4 个 App 节点与 4 个 API 节点', () => {
    const w = mount(WireIdeasSection)
    const tags = w.findAll('.wire__node-tag').map(t => t.text())
    expect(tags.filter(t => t === 'App')).toHaveLength(4)
    expect(tags.filter(t => t === 'API')).toHaveLength(4)
  })

  it('含 connector 流动 path', () => {
    const w = mount(WireIdeasSection)
    expect(w.findAll('.wire__path').length).toBeGreaterThan(0)
  })

  it('含 ACTIER COMMUNITY 创作者卡 marquee', () => {
    const w = mount(WireIdeasSection)
    expect(w.text()).toContain('ACTIER COMMUNITY')
    expect(w.findAll('.wire__creator').length).toBeGreaterThanOrEqual(6)
  })
})
