import Auto from './auto'
import components from './components'
const install = (Vue, opts) => {
  if (install.installed) {
    return
  }
  Object.keys(components)
    .forEach(key => Vue.use(components[key]))
  const $auto = new Auto(opts)
  $auto.vm = null
  $auto.vm = new Vue({ data: $auto })
  Vue.prototype.$auto = $auto
}

export default {
  version: process.env.VERSION,
  install,
  components,
  Auto
}

export { Auto, components }
