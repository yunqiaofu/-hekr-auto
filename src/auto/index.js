import use from './use'
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
    delay = 500, // 命令发送节流
    send = () => { }, // 发送命令的函数
    protocol = {}, // 协议
    components = {} // 组件列表
  } = {}) {
    this.send = send
    this.delay = delay
    this.components = {
      bool: {},
      enum: {},
      rang: {}
    }
    this.options = this.getOptionsFromProtocol(protocol)
    Object.keys(components)
      .forEach(key => {
        this.use(components[key])
      })
  }

  /**
   * 安装组件
   * @param {Object} component
   */
  use (component) {
    use(this.components, component)
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
    const defaultState = {}
    this.options.forEach(option => {
      switch (option.type) {
        case 'enum':
          defaultState[option.key] = option.enum[0] ? option.enum[0].val : 0
          break
        case 'rang':
          defaultState[option.key] = option.rang.min
          break
        case 'bool':
        default:
          defaultState[option.key] = 0
          break
      }
    })
    const send = val => this.send({
      ...defaultState,
      ...state,
      ...val
    })
    return getComponentsWithState({
      send,
      state,
      delay: this.delay,
      options: this.options,
      components: this.components
    })
  }
}
