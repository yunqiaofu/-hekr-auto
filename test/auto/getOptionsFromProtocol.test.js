import protocol from '../mock/protocol'
import getOptionsFromProtocol from '@/auto/getOptionsFromProtocol'

describe('getOptionsFromProtocol test', () => {
  const options = getOptionsFromProtocol(protocol)
  test('options length should is 3', () => {
    expect(options.length).toBe(3)
  })

  test('options[2] should is match', () => {
    expect(options[2]).toMatchObject({
      key: expect.any(String),
      name: expect.any(String),
      mode: {
        r: expect.any(Boolean),
        w: expect.any(Boolean)
      },
      unit: expect.any(String),
      type: expect.stringMatching(/bool|rang|enum/)
    })
  })
})
