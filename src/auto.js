import getKeysFromProtocol from './getKeysFromProtocol'
import getComponentsWithState from './getComponentsWithState'

export default class Auto {
  // 定义版本号
  static version = process.env.VERSION
  /**
   * 传入协议初始化配置
   * @param {Object} protocol
   */
  constructor ({
    protocol = {},
    components = []
  }) {
    this.components = {
      bool: {},
      rang: {},
      enum: {}
    }
    this.protocol = protocol
    if (components) {
      this.use(components)
    }
  }

  get keys () {
    return this.getKeysFromProtocol(this.protocol)
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
      if (this.components[component.type][component.key]) {
        throw new Error(`Duplicate name '${component.key}' in type '${component.type}'`)
      }
      this.components[component.type][component.key] = component
    }
  }

  /**
   * 根据协议获取配置信息
   * @param {Object} protocol
   */
  getKeysFromProtocol (protocol) {
    return getKeysFromProtocol(protocol)
  }

  /**
   * 传入命令存储的状态值，让后计算出带有状态的组件配置
   * @param {Object} state
   */
  getComponentsWithState (state) {
    return getComponentsWithState({
      keys: this.keys,
      components: this.components,
      state
    })
  }
}
