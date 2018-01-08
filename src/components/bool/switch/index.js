import Switch from './switch.vue'

export default {
  name: Switch.name,
  title: '开关',
  type: 'bool',
  get ({
    state,
    option
  }) {
    return {
      props: {
        title: option.name,
        value: !!state[option.key],
        disabled: !option.mode.w
      },
      events: {
        input (val) {
          if (option.mode.w) {
            return {
              cmdTag: option.cmdTag,
              [option.key]: val ? 1 : 0
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
