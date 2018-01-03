/**
 * 传入组件，配置，状态数据，返回组件列表
 */
export default ({
  keys,
  components,
  state
}) => {
  return keys.map(key => {
    const name = getComponentName(key, components)
    if (components[key.type][name]) {
      const component = components[key.type][name].get(key, state)
      component.name = name
      return component
    }
  }).filter(component => component)
}

/**
 * 传入UI配置获取到正确的组件名称
 * @param {Object} param0
 * @param {Object} components
 */
const getComponentName = ({ type, component }, components) => {
  if (!components[type][type]) {
    return Object.keys(components[type])[0]
  }
  return component
}
