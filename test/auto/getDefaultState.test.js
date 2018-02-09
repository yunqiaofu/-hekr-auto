import parameter from '../mock/parameter'
import getDefaultState from '@/auto/getDefaultState'

describe('getDefaultState test', () => {
  test('defaultState should is match', () => {
    const defaultState = getDefaultState(parameter)
    expect(defaultState).toMatchObject({
      sw: 0
    })
  })
})
