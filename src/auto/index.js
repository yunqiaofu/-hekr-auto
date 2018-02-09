import use from './use'
import getI18n from './getI18n'
import getCmds from './getCmds'
import components from '../components'
import getParameter from './getParameter'
import getComponents from './getComponents'
import getDefaultState from './getDefaultState'

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
    i18n = {}, // 语言包
    send = () => { }, // 发送命令的函数
    delay = 500, // 命令发送节流
    filter = [], // 筛选数组，去掉模板中已经编写的
    protocol = {} // 协议
  } = {}) {
    this.options = {
      ui,
      lang,
      i18n,
      send,
      delay,
      filter,
      protocol,
      components: {
        bool: {},
        enum: {},
        rang: {}
      }
    }

    this.i18n = this.getI18n()
    this.cmds = this.getCmds()
    this.parameter = this.getParameter()
    this.defaultState = this.getDefaultState()

    // 安装library自带的组件
    Object.keys(components)
      .forEach(key => this.use(components[key]))
  }

  /**
   * 根基语言配置从语言包中提取出指定语言包配置
   */
  getI18n () {
    return getI18n({
      lang: this.options.lang,
      i18n: this.options.i18n
    })
  }

  /**
   * 获取命令对象集合
   */
  getCmds () {
    return getCmds(this.options.protocol)
  }

  /**
   * 根据协议命令获取配置信息
   */
  getParameter () {
    return getParameter({
      ui: this.options.ui,
      i18n: this.i18n,
      cmds: this.cmds
    })
  }

  /**
   * 计算出默认state
   */
  getDefaultState () {
    return getDefaultState(this.parameter)
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
   * 返回参数是否显示
   * @param {String} key
   */
  visible (key) {
    const parameter = this.get(key)
    return parameter ? parameter.visible : false
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
    this.options.send({
      ...this.defaultState,
      cmd
    })
  }

  /**
   * 传入命令存储的状态值，让后计算出带有状态的组件配置
   * @param {Object} state
   */
  getComponents (state = {}) {
    return getComponents({
      send: cmd => this.send({ ...state, ...cmd }),
      state: {
        ...this.defaultState,
        ...state
      },
      delay: this.delay,
      parameter: this.parameter
        .filter(item => item.visible && this.options.filter.indexOf(item.key) === -1),
      components: this.options.components
    })
  }
}
