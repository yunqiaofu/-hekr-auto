import protocol from './protocol'
import getKeysFromProtocol from '@/getKeysFromProtocol'

describe('getKeysFromProtocol test', () => {
  const _keys = getKeysFromProtocol(protocol)
  test('keys length should is 3', () => {
    expect(_keys.length).toBe(3)
  })

  test('keys[2] should is match', () => {
    expect(_keys[2]).toMatchObject({
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
