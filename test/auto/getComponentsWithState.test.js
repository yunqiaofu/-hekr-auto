import options from '../mock/options'
import components from '../mock/components'
import getComponentsWithState from '@/auto/getComponentsWithState'

describe('getComponentsWithState test', () => {
  const cpts = {
    bool: {},
    enum: {},
    rang: {}
  }

  components.forEach(item => {
    cpts[item.type][item.name] = item
  })

  const _components = getComponentsWithState({
    send: jest.fn(() => { }),
    delay: 100,
    options,
    components: cpts,
    state: {}
  })

  test('components length should is 3', () => {
    expect(_components.length).toBe(3)
  })

  test('components[0] should is match', () => {
    expect(_components[0]).toMatchObject({
      name: expect.any(String),
      props: expect.any(Object),
      events: expect.any(Object)
    })
  })
})
