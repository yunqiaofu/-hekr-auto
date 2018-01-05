<template lang="pug">
.demo(:class="getClass")
  .demo-toggle(@click="toggle")
      i.fa(:class="getIcon",aria-hidden="true")
  .demo-container
    router-view
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      isToggle: true
    }
  },
  computed: {
    getClass () {
      return {
        'demo-active': this.isToggle
      }
    },
    getIcon () {
      return this.isToggle ? 'fa-angle-right' : 'fa-angle-left'
    }
  },
  methods: {
    toggle () {
      this.isToggle = !this.isToggle
    }
  }
}
</script>

<style lang="stylus">
.demo
  width 420px
  height 720px
  max-width 100%
  max-height 100%
  padding 20px
  box-shadow 0 0 20px #ccc
  border 1px solid #ccc
  border-radius 3px
  position fixed
  top 50%
  right 0
  transform translate(100%, -50%)
  transition transform 0.2s ease-in-out
  background-color #fff
  z-index 10
  user-select none !important
  *
    user-select none !important
  @media (max-height: 720px)
    transform translate(0, -50%)
  @media (max-width: 420px)
    padding 0

  &-active
    transform translate(0, -50%)
  &-toggle
    width 0.8rem
    height 1.5rem
    line-height 1.22rem
    text-align right
    padding 0 0.15rem
    color #fff
    position absolute
    top  0.7rem
    right 100%
    background-color #08f
    border-radius 0.7rem 0 0 0.7rem
    font-size 1.22rem
    cursor pointer

  &-container
    position absolute
    top 20px
    right 20px
    bottom 20px
    left 20px
    max-width 100%
    border 1px solid #ccc
    border-radius 3px
    overflow-x hidden
    overflow-y auto
    transform translate3d(0, 0, 0)
    @media (max-width: 420px)
      top 0
      right 0
      bottom 0
      left 0
</style>
