<template lang="pug">
.sidebar(:class="getClass", v-click-out="hide")
  .sidebar-toggle(@click="toggle")
    i.fa(:class="getIcon",aria-hidden="true")
  ul.sidebar-nav
    router-link.sidebar-nav-item(
      v-for="(item, index) in routes",
      :key="index",
      :to="item.path",
      tag="li"
    ) {{ item.name | upperFirst }}
</template>

<script>
import { routes } from './router'

export default {
  name: 'sidebar',
  data () {
    return {
      isToggle: false
    }
  },
  computed: {
    getClass () {
      return this.isToggle && 'sidebar-active'
    },
    getIcon () {
      return this.isToggle ? 'fa-times' : 'fa-bars'
    },
    routes () {
      return routes.sort((a, b) => a.name.localeCompare(b.name))
    }
  },
  filters: {
    upperFirst (val) {
      return `${val[0].toUpperCase()}${val.slice(1)}`
    }
  },
  methods: {
    toggle () {
      this.isToggle = !this.isToggle
    },
    hide () {
      this.isToggle = false
    }
  }
}
</script>

<style lang="stylus">
.sidebar
  width 12.8rem
  position fixed
  top 0
  bottom 0
  left 0
  z-index 3000
  background-color #fff
  border-right 0.05rem solid #eee
  transform translateX(-100%)
  transition transform 0.3s ease-in-out
  &-active
    transform translateX(0)
  &-toggle
    width 1.5rem
    height 1.5rem
    line-height 1.45rem
    text-align center
    color #fff
    position absolute
    top  1rem
    left 100%
    background-color #08f
  &-nav
    margin 0
    padding 0
    list-style none
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    overflow auto
    &-item
      padding 0.3rem 0.6rem 0.3rem 1rem
      border-bottom 0.05rem solid #cccccc
      cursor pointer
      &:last-child
        border-bottom none
      &-active
        color #333
        background-color #f8f8f8
        border-left 0.3rem solid #08f
        padding-left 0.7rem
        border-radius 0.2rem 0 0 0.2rem
</style>
