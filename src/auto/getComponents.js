import debounce from 'lodash/debounce'
/**
 * 传入组件，配置，状态数据，返回组件列表
 */
export default ({
  send = () => { },
  delay = 500,
  state = {},
  parameter = [],
  components = {}
} = {}) => {
  return parameter.map(item => {
    const name = getComponentName(item, components)
    if (components[item.type][name]) {
      const key = item.key
      // 获得组件的props和events
      const { props, events } = components[item.type][name].get(item, state[key])

      // 对事件回掉进行封装
      Object.keys(events)
        .forEach(key => {
          const fn = events[key]
          // 命令节流
          events[key] = debounce((...arg) => {
            const cmd = fn(...arg)
            if (typeof cmd === 'object' && cmd.cmdTag) {
              send(cmd)
            }
          }, delay)
        })
      return {
        key,
        name,
        props,
        events
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
