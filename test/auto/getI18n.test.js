import i18n from '../mock/i18n'
import getI18n from '@/auto/getI18n'

describe('getI18n test', () => {
  test('cmds should has queryDev property', () => {
    const lang = getI18n({
      lang: 'zh-CN',
      i18n
    })
    expect(lang).toHaveProperty('sw')
  })
})
