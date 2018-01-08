import Dropmenu from './dropmenu.vue'

export default {
  name: Dropmenu.name,
  title: '下拉菜单',
  type: 'enum',
  get ({
    state,
    option
  }) {
    return {
      props: {
        title: option.name,
        value: state[option.key],
        items: option.enum,
        disabled: !option.mode.w
      },
      events: {
        input (val) {
          if (option.mode.w) {
            return {
              cmdTag: option.cmdTag,
              [option.key]: val
            }
          }
        }
      }
    }
  },
  install (Vue) {
    Vue.component(Dropmenu.name, Dropmenu)
  }
}
