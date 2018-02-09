import use from '@/auto/use'
import parameter from '../mock/parameter'
import components from '../mock/components'
import getComponents from '@/auto/getComponents'

describe('getComponents test', () => {
  const options = {
    send: jest.fn(() => { }),
    state: {},
    delay: 500,
    parameter,
    components: {
      bool: {},
      enum: {},
      rang: {}
    }
  }
  use(options.components, components)

  test('getComponents result should is match', () => {
    const cmpts = getComponents(options)
    expect(cmpts).toEqual([
      {
        key: expect.any(String),
        name: expect.any(String),
        props: expect.any(Object),
        events: expect.any(Object)
      }
    ])
  })
})
