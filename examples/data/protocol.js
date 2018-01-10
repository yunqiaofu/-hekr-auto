export default {
  '0': {
    'opTimestamp': 0,
    'fromDC': null,
    'dc': null,
    'cmdId': 0,
    'cmdTag': 'queryDev',
    'desc': '状态上报',
    'frameType': 1,
    'tags': [],
    'fields': [
      {
        'dataType': 'NUMBER',
        'name': 'sw',
        'desc': '开关',
        'dataLength': 1,
        'available': true,
        'usedForIFTTT': false,
        'order': 0,
        'enumeration': [
          {
            'value': 0,
            'desc': '关'
          },
          {
            'value': 1,
            'desc': '开'
          }
        ]
      },
      {
        'dataType': 'NUMBER',
        'name': 'light',
        'desc': '亮度',
        'dataLength': 1,
        'available': true,
        'usedForIFTTT': false,
        'order': 1,
        'maxValue': 100,
        'minValue': 0,
        'maxValueMean': '100',
        'minValueMean': '0',
        'enumeration': []
      },
      {
        'dataType': 'NUMBER',
        'name': 'mode',
        'desc': '模式',
        'dataLength': 1,
        'available': true,
        'usedForIFTTT': false,
        'order': 2,
        'enumeration': [
          {
            'value': 0,
            'desc': '普通模式'
          },
          {
            'value': 1,
            'desc': '调光模式'
          },
          {
            'value': 2,
            'desc': '流光模式'
          }
        ]
      },
      {
        'dataType': 'NUMBER',
        'name': 'light2',
        'desc': '亮度2',
        'dataLength': 1,
        'available': true,
        'usedForIFTTT': false,
        'order': 1,
        'maxValue': 100,
        'minValue': 0,
        'maxValueMean': '100',
        'minValueMean': '0',
        'enumeration': []
      }
    ],
    'usedForIFTTT': false
  },
  '1': {
    'opTimestamp': 0,
    'fromDC': null,
    'dc': null,
    'cmdId': 1,
    'cmdTag': 'setSw',
    'desc': '打开关闭',
    'frameType': 2,
    'tags': [],
    'fields': [
      {
        'dataType': 'NUMBER',
        'name': 'sw',
        'desc': '开关',
        'dataLength': 1,
        'available': true,
        'usedForIFTTT': false,
        'order': 0,
        'enumeration': [
          {
            'value': 0,
            'desc': '关'
          },
          {
            'value': 1,
            'desc': '开'
          }
        ]
      }
    ],
    'usedForIFTTT': false
  },
  '2': {
    'opTimestamp': 0,
    'fromDC': null,
    'dc': null,
    'cmdId': 2,
    'cmdTag': 'setLight',
    'desc': '设置亮度',
    'frameType': 2,
    'tags': [],
    'fields': [
      {
        'dataType': 'NUMBER',
        'name': 'light',
        'desc': '亮度',
        'dataLength': 1,
        'available': true,
        'usedForIFTTT': false,
        'order': 1,
        'maxValue': 100,
        'minValue': 0,
        'maxValueMean': '100',
        'minValueMean': '0',
        'enumeration': []
      }
    ],
    'usedForIFTTT': false
  },
  '4': {
    'opTimestamp': 0,
    'fromDC': null,
    'dc': null,
    'cmdId': 4,
    'cmdTag': 'setMode',
    'desc': '设置模式',
    'frameType': 2,
    'tags': [],
    'fields': [
      {
        'dataType': 'NUMBER',
        'name': 'mode',
        'desc': '模式',
        'dataLength': 1,
        'available': true,
        'usedForIFTTT': false,
        'order': 2,
        'enumeration': [
          {
            'value': 0,
            'desc': '普通模式'
          },
          {
            'value': 1,
            'desc': '调光模式'
          },
          {
            'value': 2,
            'desc': '流光模式'
          }
        ]
      }
    ],
    'usedForIFTTT': false
  },
  '5': {
    'opTimestamp': 0,
    'fromDC': null,
    'dc': null,
    'cmdId': 5,
    'cmdTag': 'setLight2',
    'desc': '设置light2',
    'frameType': 2,
    'tags': [],
    'fields': [
      {
        'dataType': 'NUMBER',
        'name': 'light2',
        'desc': '亮度2',
        'dataLength': 1,
        'available': true,
        'usedForIFTTT': false,
        'order': 1,
        'maxValue': 100,
        'minValue': 0,
        'maxValueMean': '100',
        'minValueMean': '0',
        'enumeration': []
      }
    ],
    'usedForIFTTT': false
  }
}
