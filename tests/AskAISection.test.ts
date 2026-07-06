import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AskAISection from '~/components/AskAISection.vue'

describe('AskAISection', () => {
  it('含标题与提示', () => {
    const w = mount(AskAISection)
    expect(w.text()).toContain('Don’t take our word for it')
    expect(w.text()).toContain('Ask an AI you already trust')
  })

  it('渲染 5 个 AI 入口', () => {
    const w = mount(AskAISection)
    expect(w.findAll('.askai__btn')).toHaveLength(5)
    expect(w.text()).toContain('ChatGPT')
    expect(w.text()).toContain('Claude')
    expect(w.text()).toContain('Grok')
  })
})
