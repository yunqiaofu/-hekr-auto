import getCmds from '@/auto/getCmds'
import protocol from '../mock/protocol'

describe('getCmds test', () => {
  test('cmds should has queryDev property', () => {
    const cmds = getCmds(protocol)
    expect(cmds).toHaveProperty('queryDev')
  })
})
