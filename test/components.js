const mockGet = jest.fn((option, state) => ({
  attributes: {},
  events: {}
}))

export default [
  {
    key: 'hk-bool-switch',
    name: '开关',
    type: 'bool',
    get: mockGet
  },
  {
    key: 'hk-rang-slider',
    name: '滑动条',
    type: 'rang',
    get: mockGet
  },
  {
    key: 'hk-enum-select',
    name: '选择',
    type: 'enum',
    get: mockGet
  }
]
