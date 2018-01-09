import Dropmenu from './dropmenu.vue'

export default {
  name: Dropmenu.name,
  title: '下拉菜单',
  type: 'enum',
  get (options, value) {
    return {
      props: {
        title: options.name,
        value: value === undefined ? 0 : value,
        items: options.enum,
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
    Vue.component(Dropmenu.name, Dropmenu)
  }
}
