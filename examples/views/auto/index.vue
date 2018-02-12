<template lang="pug">
.auto-demo
  .auto-demo-button
    hk-button(@click="click") 重新设置$auto参数
  component(
    v-for="(item, index) in components",
    :key="index",
    :is="item.name",
    v-bind="item.props",
    v-on="item.events"
  )
</template>

<script>
export default {
  name: 'auto-demo',
  data () {
    return {
      components: []
    }
  },
  created () {
    this.components = this.$auto.getComponents({})
    console.log(this.$auto)
  },
  methods: {
    click () {
      if (this.$auto.options.lang !== 'zh-CN') {
        this.$auto.set({
          lang: 'zh-CN' // 还可以传 ui, i18n, send, delay, filter, protocol
        })
      } else {
        this.$auto.set({
          lang: 'en-US'
        })
      }
      console.log(this.$auto)
      this.components = this.$auto.getComponents({})
    }
  }
}
</script>

<style lang="stylus">
.auto-demo
  background-color #f3f3f3
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  &-button
    text-align center
  > *
    margin 0.7rem auto
    background-color #fff
</style>
