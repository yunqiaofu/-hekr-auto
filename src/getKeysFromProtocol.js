/**
 * 根据协议中的字段获取UI配置信息
 */
export default protocol => {
  const keys = {}
  Object.keys(protocol)
    .forEach(key => {
      const cmd = protocol[key]
      const frameType = cmd.frameType
      cmd.fields.forEach(item => {
        if (!keys[item.name]) {
          const type = getType(item)
          const typeData = getTypeData(type, item)
          keys[item.name] = {
            key: item.name,
            name: item.desc,
            mode: {
              r: false,
              w: false
            },
            unit: '',
            type
          }
          if (typeData) {
            keys[item.name][type] = typeData
          }
        }
        if (frameType === 2) {
          keys[item.name].mode.w = true
          keys[item.name].cmdTag = cmd.cmdTag
        } else {
          keys[item.name].mode.r = true
        }
      })
    })
  return Object.keys(keys)
    .map(key => keys[key])
}

/**
 * 获取keys的type
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
  enumeration
}) => {
  switch (type) {
    case 'rang':
      return {
        min: minValue,
        max: maxValue,
        step: 1,
        scale: 1,
        offset: 0
      }
    case 'enum':
      return enumeration.map(item => ({
        val: item.value,
        name: item.desc
      }))
    case 'bool':
    default:
      break
  }
}