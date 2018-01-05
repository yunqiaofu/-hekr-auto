import Switch from './switch.vue'

export default {
  name: Switch.name,
  title: '开关',
  type: 'bool',
  get (option, state) {
    return {
      props: {
        title: option.name,
        value: !!state[option.key],
        disabled: !option.mode.w
      },
      events: {
        input () {

        }
      }
    }
  },
  install (Vue) {
    Vue.component(Switch.name, Switch)
  }
}
