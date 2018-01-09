## auto

> 测试编写的所有组件

分别引入ui、locale、protocol文件，这三个文件分别用来模拟真实环境从服务器获取的数据内容
如有其他的组件则分别添加对应的协议ui配置和语言去测试即可

## ui配置格式
```javascript
export default [
  {
    key: 'sw', // 参数名称
    component: '', // 显示组件名称
    visible: true // 是否显示
  },
  {
    key: 'light',
    component: 'auto-rang-slider',
    visible: true
  },
  {
    key: 'mode',
    component: 'sss',
    visible: true
  }
]

```

## 语言包配置格式
```javascript
export default {
  sw: {
    'zh-CN': {
      name: '开关', // 参数对应的文字
      unit: '', // 单位
      keys: { // 参数对应的各个值的翻译
        0: '关',
        1: '开'
      }
    },
    'en-US': {
      name: 'switch',
      unit: '',
      keys: {
        0: 'off',
        1: 'on'
      }
    }
  },
  light: {
    'zh-CN': {
      name: '亮度',
      unit: ''
    },
    'en-US': {
      name: 'light',
      unit: ''
    }
  },
  mode: {
    'zh-CN': {
      name: '模式',
      unit: '',
      keys: {
        0: '普通模式',
        1: '调光模式',
        2: '流光模式'
      }
    },
    'en-US': {
      name: 'mode',
      unit: '',
      keys: {
        0: 'NORMAL'
      }
    }
  }
}
```
