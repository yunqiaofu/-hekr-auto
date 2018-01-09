import Auto from './auto'
import components from './components'
const install = (Vue, opts) => {
  if (install.installed) {
    return
  }
  Object.keys(components)
    .forEach(key => Vue.use(components[key]))
  if (opts) {
    Vue.prototype.$auto = new Auto(opts)
  }
}

export default {
  version: process.env.VERSION,
  install,
  components,
  Auto
}

export { Auto, components }
