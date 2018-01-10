const mockGet = jest.fn((option, value) => ({
  props: {},
  events: {}
}))

export default [
  {
    name: 'hk-bool-switch',
    title: '开关',
    type: 'bool',
    get: mockGet
  }
]
