import use from './use'
import components from '../components'
import getParameter from './getParameter'
import getComponents from './getComponents'

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
    filter = [], // 筛选数组，去掉模板中已经编写的
    protocol = {} // 协议
  } = {}) {
    this.options = {
      ui,
      lang,
      send,
      delay,
      state: {},
      locale,
      filter,
      protocol,
      components: {
        bool: {},
        enum: {},
        rang: {}
      }
    }

    // 安装library自带的组件
    Object.keys(components)
      .forEach(key => this.use(components[key]))

    // 获取默认状态值
    this.parameter.forEach(option => {
      switch (option.type) {
        case 'enum':
          this.options.state[option.key] = option.enum[0] ? option.enum[0].val : 0
          break
        case 'rang':
          this.options.state[option.key] = option.rang.min
          break
        case 'bool':
        default:
          this.options.state[option.key] = 0
          break
      }
    })
  }

  /**
   * 命令对象集合
   */
  get cmds () {
    const cmds = {}
    Object.keys(this.options.protocol)
      .forEach(key => {
        const cmd = this.options.protocol[key]
        cmds[cmd.cmdTag] = {
          frameType: cmd.frameType,
          fields: cmd.fields
        }
      })
    return cmds
  }

  /**
   * 根据协议命令获取配置信息
   */
  get parameter () {
    const lang = {}
    // 获得指定语言的语言包
    Object.keys(this.options.locale)
      .forEach(key => {
        lang[key] = (this.options.locale[key] || {})[this.options.lang]
      })
    return getParameter({
      ui: this.options.ui,
      lang: lang,
      cmds: this.cmds
    })
  }

  /**
   * 获取指定参数的配置
   * @param {String} key
   */
  get (key) {
    return this.parameter.find(item => item.key === key)
  }

  /**
   * 判断是否有这个参数在协议中
   * @param {String} key
   */
  has (key) {
    return !!this.get(key)
  }

  /**
   * 安装组件
   * @param {Object|Array} component
   */
  use (component) {
    use(this.options.components, component)
  }

  /**
   * 封装send函数
   * @param {Object} cmd
   */
  send (cmd = {}) {
    const key = Object.keys(this.cmds)
      .find(key => key === cmd.cmdTag)
    const opts = {}
    // 过滤掉不需要的参数
    if (key) {
      opts.cmdTag = cmd.cmdTag
      this.cmds[key].fields
        .forEach(item => {
          opts[item.name] = cmd[item.name]
        })
      cmd = opts
    }
    this.options.send(cmd)
  }

  /**
   * 传入命令存储的状态值，让后计算出带有状态的组件配置
   * @param {Object} state
   */
  getComponents (state = {}) {
    const send = cmd => this.send({
      ...this.options.state,
      ...state,
      ...cmd
    })
    return getComponents({
      send,
      state: {
        ...this.options.state,
        ...state
      },
      delay: this.delay,
      parameter: this.parameter
        .filter(item => item.visible && this.options.filter.indexOf(item.key) === -1),
      components: this.options.components
    })
  }
}
