import Switch from './switch.vue'

export default {
  name: Switch.name,
  title: '开关',
  type: 'bool',
  get (options, value) {
    return {
      props: {
        title: options.name,
        value: value === undefined ? false : !!value,
        disabled: !options.mode.w
      },
      events: {
        input (val) {
          if (options.mode.w) {
            return {
              cmdTag: options.cmdTag,
              [options.key]: val ? 1 : 0
            }
          }
        }
      }
    }
  },
  install (Vue) {
    Vue.component(Switch.name, Switch)
  }
}
