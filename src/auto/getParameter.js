/**
 * 根据协议命令中的字段获取UI配置信息
 */
export default ({
  ui = [],
  i18n = {},
  cmds = {}
} = {}) => {
  const options = {}
  Object.keys(cmds)
    .forEach(key => {
      const cmd = cmds[key]
      const frameType = cmd.frameType
      cmd.fields.forEach(item => {
        if (!options[item.name]) {
          const type = getType(item)
          const keyLang = i18n[item.name] || {}
          // 获取对应的类型的数据
          const typeData = getTypeData(type, item, keyLang.keys)

          // 获取component和visible
          const uiConfig = ui.find(it => it.key === item.name)

          options[item.name] = {
            key: item.name,
            name: keyLang.name || item.name,
            mode: {
              r: false,
              w: false
            },
            unit: keyLang.unit || '',
            type,
            visible: true
          }
          if (typeData) {
            options[item.name][type] = typeData
          }
          // 控制组件的显示与隐藏
          // 控制显示组件样式
          if (uiConfig) {
            options[item.name].component = uiConfig.component
            options[item.name].visible = uiConfig.visible
          }
        }

        // 支持48透传协议
        if (frameType === 2 || frameType === 7) {
          options[item.name].mode.w = true
          options[item.name].cmdTag = key
        } else {
          options[item.name].mode.r = true
        }
      })
    })
  return Object.keys(options)
    .map(key => options[key])
}

/**
 * 获取option的type
 * @param {Object} param0
 */
const getType = ({
  enumeration
}) => {
  if (enumeration && enumeration.length) {
    if (enumeration.length === 2 &&
      enumeration[0].value === 0 &&
      enumeration[1].value === 1
    ) {
      return 'bool'
    }
    return 'enum'
  }
  return 'rang'
}

/**
 * 根据type获取所需的配置参数
 * @param {String} type
 * @param {Object} param1
 */
const getTypeData = (type, {
  minValue,
  maxValue,
  enumeration = []
} = {}, lang = {}) => {
  switch (type) {
    case 'enum':
      return enumeration.map(item => ({
        val: item.value,
        name: lang[item.value] || item.value
      }))
    case 'rang':
      return {
        min: minValue,
        max: maxValue,
        step: 1,
        scale: 1,
        offset: 0
      }
    case 'bool':
      return {
        0: lang[0] || 'off',
        1: lang[1] || 'on'
      }
    default:
      break
  }
}
