import use from '@/auto/use'
import parameter from '../mock/parameter'
import components from '../mock/components'
import getComponents from '@/auto/getComponents'

describe('getComponents test', () => {
  const options = {
    send: jest.fn(() => { }),
    delay: 500,
    state: {},
    parameter,
    components: {
      bool: {},
      enum: {},
      rang: {}
    }
  }
  use(options.components, components)
  const _components = getComponents(options)

  test('_components get methods should be call', () => {
    expect(_components.length).toBe(1)
  })

  test('_components should is match', () => {
    expect(_components).toEqual([
      {
        key: expect.any(String),
        name: expect.any(String),
        props: expect.any(Object),
        events: expect.any(Object)
      }
    ])
  })
})
