import Dropmenu from './dropmenu.vue'

export default {
  name: Dropmenu.name,
  title: '下拉菜单',
  type: 'enum',
  get (option, state) {
    return {
      props: {
        title: option.name,
        value: state[option.key],
        items: option.enum,
        disabled: !option.mode.w
      },
      events: {
        input () {

        }
      }
    }
  },
  install (Vue) {
    Vue.component(Dropmenu.name, Dropmenu)
  }
}
