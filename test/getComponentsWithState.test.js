import options from './options'
import components from './components'
import getComponentsWithState from '@/getComponentsWithState'

describe('getComponentsWithState test', () => {
  const insatlledComponents = {
    bool: {},
    enum: {},
    rang: {}
  }

  components.forEach(item => {
    insatlledComponents[item.type][item.name] = item
  })

  const _components = getComponentsWithState({
    options,
    components: insatlledComponents,
    state: {}
  })

  test('components length should is 3', () => {
    expect(_components.length).toBe(3)
  })

  test('components[0] should is match', () => {
    expect(_components[0]).toMatchObject({
      name: expect.any(String),
      attributes: expect.any(Object)
    })
  })
})
