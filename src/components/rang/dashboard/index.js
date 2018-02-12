import Dashboard from './dashboard.vue'

export default {
  name: Dashboard.name,
  title: '仪表盘',
  type: 'rang',
  get (options, value) {
    return {
      props: {
        value: value === undefined ? options.rang.min : value,
        title: options.name,
        min: options.rang.min,
        max: options.rang.max,
        unit: options.unit,
        step: options.step,
        disabled: !options.mode.w
      },
      events: {
        input (val) {
          if (options.mode.w) {
            return {
              cmdTag: options.cmdTag,
              [options.key]: val
            }
          }
        }
      }
    }
  },
  install (Vue) {
    Vue.component(Dashboard.name, Dashboard)
  }
}
