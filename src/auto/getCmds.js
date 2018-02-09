/**
 * 获取命令对象集合
 */
export default (protocol = {}) => {
  const cmds = {}
  Object.keys(protocol)
    .forEach(key => {
      const cmd = protocol[key]
      cmds[cmd.cmdTag] = {
        frameType: cmd.frameType,
        fields: cmd.fields
      }
    })
  return cmds
}
