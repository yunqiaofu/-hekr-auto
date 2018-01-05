import Auto from './auto'
import components from './components'
const install = Vue => {
  if (install.installed) {
    return
  }
  Object.keys(components)
    .forEach(key => Vue.use(components[key]))
}

export default {
  version: process.env.VERSION,
  install,
  components,
  Auto
}

export { Auto, components, install }