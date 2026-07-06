import { describe, it, expect } from 'vitest'
import { joinBasePath } from '~/utils/publicPath'

describe('joinBasePath', () => {
  it('base 带尾斜杠、path 不带头斜杠 → 正确拼接', () => {
    expect(joinBasePath('/demo-openacti/', 'raw/img/logo.png')).toBe('/demo-openacti/raw/img/logo.png')
  })

  it('base 带尾斜杠、path 带头斜杠 → 不重复斜杠', () => {
    expect(joinBasePath('/demo-openacti/', '/raw/img/logo.png')).toBe('/demo-openacti/raw/img/logo.png')
  })

  it('base 不带尾斜杠 → 自动补斜杠', () => {
    expect(joinBasePath('/demo-openacti', 'raw/img/logo.png')).toBe('/demo-openacti/raw/img/logo.png')
  })

  it('base 为空 → 回退为根路径', () => {
    expect(joinBasePath('', 'raw/x.mp4')).toBe('/raw/x.mp4')
  })

  it('多层子路径保留', () => {
    expect(joinBasePath('/demo-openacti/', 'raw/videos/silk.mp4')).toBe('/demo-openacti/raw/videos/silk.mp4')
  })
})
