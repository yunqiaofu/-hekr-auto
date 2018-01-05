import use from '@/auto/use'
import components from '../mock/components'

describe('use method test', () => {
  test('test auto options', () => {
    const cpts = {
      bool: {},
      enum: {},
      rang: {}
    }
    use(cpts, components)
    expect(cpts).toMatchObject({
      bool: {
        'hk-bool-switch': {
          name: 'hk-bool-switch',
          title: '开关',
          type: 'bool',
          get: expect.any(Function)
        }
      },
      enum: {
        'hk-enum-select': {
          name: 'hk-enum-select',
          title: '选择',
          type: 'enum',
          get: expect.any(Function)
        }
      },
      rang: {
        'hk-rang-slider': {
          name: 'hk-rang-slider',
          title: '滑动条',
          type: 'rang',
          get: expect.any(Function)
        }
      }
    })
  })
})
