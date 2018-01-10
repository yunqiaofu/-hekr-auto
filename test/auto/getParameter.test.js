import ui from '../mock/ui'
import cmds from '../mock/cmds'
import locale from '../mock/locale'
import getParameter from '@/auto/getParameter'

describe('getParameter test', () => {
  const lang = {}
  Object.keys(locale)
    .forEach(key => {
      lang[key] = locale[key]['zh-CN']
    })
  const options = {
    ui,
    cmds,
    lang
  }
  const parameter = getParameter(options)
  test('parameter length should is 3', () => {
    expect(parameter.length).toBe(1)
  })

  test('parameter should is match', () => {
    expect(parameter).toEqual([
      {
        key: 'sw',
        name: expect.any(String),
        mode: {
          r: false,
          w: true
        },
        unit: expect.any(String),
        type: 'bool',
        bool: {
          0: expect.any(String),
          1: expect.any(String)
        },
        visible: true,
        cmdTag: 'setSw',
        component: undefined
      }
    ])
  })
})
