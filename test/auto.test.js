import Auto from '@/auto'
import options from './options'
import protocol from './protocol'
import components from './components'

describe('Auto class attributes test', () => {
  const auto = new Auto({
    protocol,
    components
  })

  test('test auto options', () => {
    expect(auto.options).toEqual(options)
  })

  test('test auto components', () => {
    expect(auto.components).toMatchObject({
      bool: expect.any(Object),
      enum: expect.any(Object),
      rang: expect.any(Object)
    })
    expect(Object.keys(auto.components.bool)).toEqual(['hk-bool-switch'])
  })

  test('getComponentsWithState method test', () => {
    const _components = auto.getComponentsWithState({})
    const component = {
      name: expect.any(String),
      attributes: expect.any(Object)
    }

    expect(_components.length).toBe(3)
    expect(_components).toEqual([component, component, component])
  })
})

describe('Auto class components test', () => {
  const auto = new Auto()
  test('test use method', () => {
    auto.use({
      name: 'hk-rang-dashboard',
      title: '仪表盘',
      type: 'rang',
      get: jest.fn((option, state) => ({}))
    })
    expect(auto.components.rang).toMatchObject({
      'hk-rang-dashboard': {
        name: 'hk-rang-dashboard',
        title: '仪表盘',
        type: 'rang',
        get: expect.any(Function)
      }
    })
  })
})
