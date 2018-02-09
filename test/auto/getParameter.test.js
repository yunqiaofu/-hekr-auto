import ui from '../mock/ui'
import cmds from '../mock/cmds'
import i18n from '../mock/i18n'
import getI18n from '@/auto/getI18n'
import getParameter from '@/auto/getParameter'

describe('getParameter test', () => {
  const lang = getI18n({
    lang: 'zh-CN',
    i18n
  })
  const options = {
    ui,
    cmds,
    lang
  }

  test('parameter should is match', () => {
    const parameter = getParameter(options)
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
