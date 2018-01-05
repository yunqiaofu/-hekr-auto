import Slider from './slider.vue'

export default {
  name: Slider.name,
  title: '滑动条',
  type: 'rang',
  get (option, state) {
    return {
      props: {
        value: state[option.key] === undefined ? option.rang.min : state[option.key],
        title: option.name,
        min: option.rang.min,
        max: option.rang.max,
        unit: option.unit,
        disabled: !option.mode.w
      },
      events: {
        input () {
          console.log(this, arguments)
        }
      }
    }
  },
  install (Vue) {
    Vue.component(Slider.name, Slider)
  }
}
