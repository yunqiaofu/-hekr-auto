import Dropmenu from './dropmenu.vue'

const findIndex = (items, val) => {
  for (let i = 0, length = items.length; i < length; i++) {
    if (items[i].val === val) return i
  }
  return -1
}

export default {
  name: Dropmenu.name,
  title: '下拉菜单',
  type: 'enum',
  get (options, value) {
    return {
      props: {
        title: options.name,
        value: value === undefined ? 0 : findIndex(options.enum, value),
        items: options.enum,
        disabled: !options.mode.w
      },
      events: {
        input (val) {
          if (options.mode.w) {
            return {
              cmdTag: options.cmdTag,
              [options.key]: options.enum[val].val
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
