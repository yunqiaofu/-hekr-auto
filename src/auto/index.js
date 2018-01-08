import use from './use'
import components from '../components'
import getOptionsWithLang from './getOptionsWithLang'
import getComponentsWithState from './getComponentsWithState'

export default class Auto {
  // 定义版本号
  static version = process.env.VERSION
  /**
   * 传入协议和组件数组
   * @param {Object} params
   */
  constructor ({
    ui = [], // ui配置信息
    lang = 'zh-CN', // 语言
    delay = 500, // 命令发送节流
    locale = {}, // 语言包
    send = () => { }, // 发送命令的函数
    protocol = {} // 协议
  } = {}) {
    this.send = send
    this.delay = delay
    this.lang = lang
    this.locale = locale
    this.components = {
      bool: {},
      enum: {},
      rang: {}
    }
    // 安装library自带的组件
    Object.keys(components)
      .forEach(key => this.use(components[key]))

    this.options = this.getOptionsWithLang({
      ui,
      lang: this.getLang(),
      protocol
    })
  }

  getLang () {
    const lang = {}
    // 获得指定语言的语言包
    Object.keys(this.locale)
      .forEach(key => {
        lang[key] = (this.locale[key] || {})[this.lang]
      })
    return lang
  }

  /**
   * 安装组件
   * @param {Object|Array} component
   */
  use (component) {
    use(this.components, component)
  }

  /**
   * 根据协议获取配置信息
   * @param {Object} protocol
   */
  getOptionsWithLang (protocol) {
    return getOptionsWithLang(protocol)
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
      state: {
        ...defaultState,
        ...state
      },
      delay: this.delay,
      options: this.options.filter(item => item.visible),
      components: this.components
    })
  }
}
