export default [
  {
    'key': 'sw',
    'name': '开关',
    'mode': {
      'r': true,
      'w': true
    },
    'unit': '',
    'type': 'bool',
    'cmdTag': 'setSw'
  },
  {
    'key': 'light',
    'name': '亮度',
    'mode': {
      'r': true,
      'w': true
    },
    'unit': '',
    'type': 'rang',
    'rang': {
      'min': 0,
      'max': 100,
      'step': 1,
      'scale': 1,
      'offset': 0
    },
    'cmdTag': 'setLight'
  },
  {
    'key': 'mode',
    'name': '模式',
    'mode': {
      'r': true,
      'w': true
    },
    'unit': '',
    'type': 'enum',
    'enum': [
      {
        'val': 0,
        'name': '普通模式'
      },
      {
        'val': 1,
        'name': '调光模式'
      },
      {
        'val': 2,
        'name': '流光模式'
      }
    ],
    'cmdTag': 'setMode'
  }
]
