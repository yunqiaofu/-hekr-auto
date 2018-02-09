<template lang="pug">
#app
  sidebar
  demo
  docs
</template>

<script>
import Sidebar from './Sidebar'
import Demo from './Demo'
import Docs from './Docs'

export default {
  name: 'app',
  components: {
    Sidebar,
    Demo,
    Docs
  },
  mounted () {
    console.log(this.$auto)
  }
}
</script>

<style lang="stylus">
@import "~normalize.css"
@import "~font-awesome/css/font-awesome.css"
@import "~@hekr/hekr-components/hekr-components.css"

html
  font-size 20px !important

body
  overflow-x hidden
  overflow-y auto

*
html
body
  user-select text !important
</style>
