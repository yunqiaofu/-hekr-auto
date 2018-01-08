import ui from '../mock/ui'
import locale from '../mock/locale'
import protocol from '../mock/protocol'
import getOptionsWithLang from '@/auto/getOptionsWithLang'

describe('getOptionsWithLang test', () => {
  const lang = {}
  Object.keys(locale)
    .forEach(key => {
      lang[key] = (locale[key] || {})['zh-CN']
    })
  const options = getOptionsWithLang({
    ui,
    lang,
    protocol
  })
  test('options length should is 3', () => {
    expect(options.length).toBe(3)
  })

  test('options[2] should is match', () => {
    expect(options[2]).toMatchObject({
      key: 'mode',
      name: '模式',
      mode: {
        r: expect.any(Boolean),
        w: expect.any(Boolean)
      },
      unit: expect.any(String),
      type: 'enum',
      visible: expect.any(Boolean)
    })
  })
})
