import Slider from './slider.vue'

export default {
  name: Slider.name,
  title: '滑动条',
  type: 'rang',
  get (options, value) {
    return {
      props: {
        value: value === undefined ? options.rang.min : value,
        title: options.name,
        min: options.rang.min,
        max: options.rang.max,
        unit: options.unit,
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
    Vue.component(Slider.name, Slider)
  }
}
