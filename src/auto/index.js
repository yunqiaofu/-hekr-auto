import getOptionsFromProtocol from './getOptionsFromProtocol'
import getComponentsWithState from './getComponentsWithState'

export default class Auto {
  // 定义版本号
  static version = process.env.VERSION
  /**
   * 传入协议和组件数组
   * @param {Object} params
   */
  constructor ({
    protocol = {},
    components = []
  } = {}) {
    this.components = {
      bool: {},
      enum: {},
      rang: {}
    }
    this.protocol = protocol
    if (Array.isArray(components)) {
      this.use(components)
    }
  }

  get options () {
    return this.getOptionsFromProtocol(this.protocol)
  }

  /**
   * 安装组件
   * @param {Object} component
   */
  use (component) {
    if (Array.isArray(component)) {
      component.forEach(cpt => this.install(cpt))
    } else {
      this.install(component)
    }
  }

  /**
   * 安装组件到对象上
   * @param {Object} component
   */
  install (component) {
    if (typeof component !== 'object') {
      throw new TypeError('Component is not Object')
    }
    if (this.components[component.type]) {
      if (this.components[component.type][component.name]) {
        throw new Error(`Duplicate name '${component.name}' in type '${component.type}'`)
      }
      this.components[component.type][component.name] = component
    }
  }

  /**
   * 根据协议获取配置信息
   * @param {Object} protocol
   */
  getOptionsFromProtocol (protocol) {
    return getOptionsFromProtocol(protocol)
  }

  /**
   * 传入命令存储的状态值，让后计算出带有状态的组件配置
   * @param {Object} state
   */
  getComponentsWithState (state) {
    return getComponentsWithState({
      options: this.options,
      components: this.components,
      state
    })
  }
}
