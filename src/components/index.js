import * as Bool from './bool'
import * as Enum from './enum'
import * as Rang from './rang'

const components = {}

Object.keys(Bool)
  .forEach(key => {
    components[Bool[key].name] = Bool[key]
  })

Object.keys(Enum)
  .forEach(key => {
    components[Enum[key].name] = Enum[key]
  })

Object.keys(Rang)
  .forEach(key => {
    components[Rang[key].name] = Rang[key]
  })

export default components
