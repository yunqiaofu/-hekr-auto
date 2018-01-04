import Auto from '@/auto'
import keys from './keys'
import protocol from './protocol'
import components from './components'

describe('Auto class attributes test', () => {
  const auto = new Auto({
    protocol,
    components
  })

  test('test auto keys', () => {
    expect(auto.keys).toEqual(keys)
  })

  test('test auto components', () => {
    expect(auto.components).toMatchObject({
      bool: expect.any(Object),
      rang: expect.any(Object),
      enum: expect.any(Object)
    })
    expect(Object.keys(auto.components.bool)).toEqual(['hk-bool-switch'])
  })

  test('getComponentsWithState method test', () => {
    const _components = auto.getComponentsWithState({})
    expect(_components.length).toBe(3)
    const component = {
      name: expect.any(String),
      attributes: expect.any(Object),
      events: expect.any(Object)
    }
    expect(_components).toEqual([component, component, component])
  })
})

describe('Auto class components test', () => {
  const auto = new Auto({})
  test('test use method', () => {
    auto.use({
      key: 'hk-rang-dashboard',
      name: '仪表盘',
      type: 'rang',
      get: jest.fn((option, state) => ({
        attributes: {},
        events: {}
      }))
    })
    expect(auto.components.rang).toMatchObject({
      'hk-rang-dashboard': {
        key: 'hk-rang-dashboard',
        name: '仪表盘',
        type: 'rang',
        get: expect.any(Function)
      }
    })
  })
})
