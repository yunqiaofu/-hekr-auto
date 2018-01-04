/**
 * 传入组件，配置，状态数据，返回组件列表
 */
export default ({
  options,
  components,
  state
}) => {
  return options.map(option => {
    const name = getComponentName(option, components)
    if (components[option.type][name]) {
      const attributes = components[option.type][name].get(option, state)
      return {
        name,
        attributes
      }
    }
  }).filter(component => component)
}

/**
 * 传入UI配置获取到正确的组件名称
 * @param {Object} param0
 * @param {Object} components
 */
const getComponentName = ({ type, component }, components) => {
  if (!components[type][component]) {
    return Object.keys(components[type])[0]
  }
  return component
}
