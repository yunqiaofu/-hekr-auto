/**
* 计算出默认state
*/
export default (parameter = []) => {
  const state = {}
  // 获取默认状态值
  parameter.forEach(option => {
    switch (option.type) {
      case 'enum':
        state[option.key] = option.enum[0] ? option.enum[0].val : 0
        break
      case 'rang':
        state[option.key] = option.rang.min
        break
      case 'bool':
      default:
        state[option.key] = 0
        break
    }
  })
  return state
}
