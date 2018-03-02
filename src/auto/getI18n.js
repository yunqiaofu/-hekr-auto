/**
 * 根基语言配置从语言包中提取出指定语言包配置
 */
export default ({
  lang = 'en-US',
  i18n = {}
} = {}) => {
  const _i18n = {}
  const _lang = lang.toLocaleLowerCase().replace(/_/g, '-')
  Object.keys(i18n)
    .forEach(key => {
      Object.keys(i18n[key])
        .forEach(l => {
          const lan = l.toLocaleLowerCase().replace(/_/g, '-')
          if (_lang === lan) {
            _i18n[key] = i18n[key][l]
          }
        })
    })
  return _i18n
}
