# Auto

> A auto layout library for Hekr html5 page

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# Auto class library unit test
npm run test
```

## 使用说明
1. ```npm install @hekr/auto --save```
2. ```npm install @hekr/hekr-components --save```
3. ```npm install @hekr/hekr-h5-sdk --save```
4. 引入组件并全局安装

  ```javascript
  import Vue from 'vue'
  import App from './App'
  import store from './store'
  import Auto from '@hekr/auto'
  import { Hekr, Matrix } from '@hekr/hekr-h5-sdk'
  import HekrComponents from '@hekr/hekr-components'

  if (process.env.NODE_ENV !== 'production') {
    const keys = require('../keys.json')

    window.Matrix = new Matrix(keys)
  }

  Vue.prototype.$hekr = window.$hekr = new Hekr({
    query: {
      auto: false
    }
  })

  // 等到sdk完成之后，初始化应用，保证语言和配置信息能够拿到
  /* eslint-disable no-new */
  $hekr.ready(() => {
    Vue.use(HekrComponents, {
      lang: $hekr.app.lang || 'en-US'
    }) // 确保被安装，否则Auto无法正常运行
    Vue.use(Auto) // 安装library中包含的组件
    /**
     * 1. 拉取ui配置信息 ui
     * 2. 获得语言包配置 locale
     * 3. 传入得所有参数都是可选的
     * 4. 但必须传入protocol,send，才能保证正确工作
     * 5. ui是控制显示样式与是否显示的配置
     * 6. locale是语言包
     */
    Vue.prototype.$auto = new Auto({
      protocol: $hekr.template.protocol,
      // 必须传入一个函数，不要直接写this.$hekr.send，这样会导致send函数内部this指向错误
      send: val => $hekr.send(val),
      delay: 500, // 命令发送时，节流延时时间，默认值为500
      /*
      * 要过滤掉的参数，即在模板中已经编写了的组件
      * 也可以在getComponents执行后调用filter去过滤
      */
      filter: ['sw', 'light'],
      ui, // 拉取到的ui配置信息
      locale, // 拉取到的语言包配置
      lang: $hekr.app.lang
    })
    new Vue({
      el: '#app',
      store,
      template: '<App/>',
      components: { App }
    })
  })
  ```
5. 初始化Auto(App.vue)

  ```html
  <template lang="pug">
  .app
    hk-header(
      title="测试设备",
      right-icon="iconfont icon-gengduo",
      @click-left="goback",
      border
    )
    .app-container
      //- 这里可以放其他的已经编写了在模板中的参数的组件
      component(
        v-for="(item, index) in components",
        v-if="item",
        :key="index",
        :is="item.name",
        v-bind="item.props",
        v-on="item.events"
      )
  </template>

  <script>
  export default {
    name: 'app',
    data () {
      return {
        components: [], // 存储渲染组件配置列表
        state: {} // 存储状态信息
      }
    },
    mounted () {
      this.$hekr.on('devSend', data => {
        const state = {...this.state}
        Object.keys(data).forEach(key => {
          state[key] = data[key]
        })
        this.state = state
      })
      // 这里可以根据key遍历过滤掉已经写在模板中的组件
      this.components = this.$auto.getComponents(this.state)
    },
    watch: {
      state: {
        deep: true,
        handler (val) {
          // state变化之后就去更新页面，保证上报的数据能够渲染到页面
          this.components = this.$auto.getComponents(val)
        }
      }
    }
  }
  </script>
  ```

## UI显示配置项目
```javascript
[
   {
    key: temp
    component: 组件名称，
    visible: true/false
  }
]
```

## 语言配置
```javascript
{
  temp: {
    zh_CN: {
      name: "开关",
      unit: '',
      keys:{
        0: 关,
        1: 开
      }
    },
    en_US: {
      name: "switch",
      unit: '',
      keys:{
        0: off,
        1: on
      }
    }
  }
}
```

## 开发说明
1. 开发新的组件都放在**src/components**文件夹下对应的type文件夹中，每一个组件对应一个文件夹
2. 组件命名方式采用**auto-[type]-[name]**的方式，其中type表示组件类型，name是具体的名称，如auto-bool-switch表示bool类型的switch组件
3. 每一个具体的组件文件夹下都有一个index.js文件，其中导出一个对象，大致内容如下

  ```javascript
  import Switch from './switch.vue'

  export default {
    name: Switch.name, // 组件名称
    title: '开关', // 组件的标题
    type: 'bool', // 组件类型
    // 获取组件的配置参数
    // options 配置信息
    // state 组件当前状态值，是在this.auto.getComponents(this.state)传入的参数
    get (options, state) {
      return {
        // 组件需要的props参数
        props: {
          title: options.name,
          value: value === undefined ? false : !!value, // 计算出组件的值
          disabled: !options.mode.w
        },
        // 组件要监听的事件
        events: {
          input (val) {
            if (options.mode.w) {
              // 返回命令，这里返回去之后会被Auto类初始化时传进来的send函数发送到云端
              // 下发命令一定要保证有cmdTag
              return {
                cmdTag: options.cmdTag,
                [option.key]: val ? 1 : 0
              }
            }
          }
        }
      }
    },
    install (Vue) { // Vue.use安装组件的方法
      Vue.component(Switch.name, Switch)
    }
  }
  ```
4. 组件vue文件编写和其他普通vue组件编写没有任何区别，只是要注意对其进行合理的封装，所需的参数和index.js文件互相对应即可
