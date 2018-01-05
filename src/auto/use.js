/**
 * 安装组件到auto类上
 */
export default (components, component) => {
  if (Array.isArray(component)) {
    component.forEach(cpt => install(components, cpt))
  } else {
    install(components, component)
  }
}

/**
 * 安装组件到compoents上
 * @param {Object} components
 * @param {Object} component
 */
const install = (components, component) => {
  if (typeof component !== 'object') {
    throw new TypeError('Component is not Object')
  }
  if (components[component.type]) {
    if (components[component.type][component.name]) {
      throw new Error(`Duplicate name '${component.name}' in type '${component.type}'`)
    }
    components[component.type][component.name] = component
  }
}
