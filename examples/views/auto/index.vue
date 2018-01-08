<template lang="pug">
.auto-demo
  component(
    v-for="(item, index) in components",
    :key="index",
    :is="item.name",
    v-bind="item.props",
    v-on="item.events"
  )
</template>

<script>
import { Auto } from '@'
import protocol from '../../../test/mock/protocol'
import components from '@/components'
import ui from './ui'
import lang from './lang'

export default {
  name: 'auto-demo',
  data () {
    return {
      components: []
    }
  },
  created () {
    this.auto = new Auto({
      protocol,
      send () {
        console.log(arguments)
      },
      ui,
      locale: lang,
      lang: 'en-US'
    })
    Object.keys(components)
      .forEach(key => this.auto.use(components[key]))
    this.components = this.auto.getComponentsWithState({})
    console.log(this.auto)
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
  > *
    margin 0.7rem auto
    background-color #fff
</style>
