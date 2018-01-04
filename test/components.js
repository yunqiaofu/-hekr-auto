const mockGet = jest.fn((option, state) => ({}))

export default [
  {
    name: 'hk-bool-switch',
    title: '开关',
    type: 'bool',
    get: mockGet
  },
  {
    name: 'hk-rang-slider',
    title: '滑动条',
    type: 'rang',
    get: mockGet
  },
  {
    name: 'hk-enum-select',
    title: '选择',
    type: 'enum',
    get: mockGet
  }
]
