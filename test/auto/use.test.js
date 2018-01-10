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
      enum: {},
      rang: {}
    })
  })
})
