<template lang="pug">
.docs
  component.markdown-body(:is="view")
  .docs-source(v-if="source")
    .docs-source-title 示例源码
    .docs-source-code
      pre
        code.language-html {{ source }}
</template>

<script>
import axios from 'axios'
import hljs from 'highlight.js'
import { routes } from './router'
const components = {
  readme: () => import('../README.md')
}
routes.forEach(route => {
  components[`${route.name}-doc`] = () => import(`./views/${route.name}/README.md`)
})

export default {
  name: 'docs',
  components,
  data () {
    return {
      view: '',
      source: ''
    }
  },
  mounted () {
    this.setView()
  },
  watch: {
    $route () {
      this.setView()
    }
  },
  methods: {
    async setView () {
      if (this.$http) {
        this.$http.cancel()
      }
      if (this.$route.name) {
        this.view = this.$route.name + '-doc'
        this.source = ''
        this.$http = axios.CancelToken.source()
        await axios.get(`/views/${this.$route.name}/index.vue`, {
          cancelToken: this.$http.token
        }).then(({ data }) => {
          this.source = data
        }).catch(() => {
          this.$nitify('获取源码文件失败')
        })
        this.setHljs()
      } else {
        this.source = ''
        this.view = 'readme'
        this.setHljs()
      }
    },
    setHljs () {
      setTimeout(() => {
        this.$el.querySelectorAll('pre code').forEach(item => {
          hljs.highlightBlock(item)
        })
      }, 50)
    }
  }
}
</script>

<style lang="stylus">
@import '~highlight.js/styles/monokai.css'
@import "~github-markdown-css/github-markdown.css"

.docs
  padding 1rem
  text-align left
  margin-right 480px
  margin-left 40px
  @media (max-width: 960px)
    margin 0 auto
  pre
    background #272822
    border-radius 3px
    code
      display block
      overflow-x auto
      padding 0.5em
      background #272822
      color #ddd
      border-radius 3px

  &-source
    max-width 960px
    margin 0 auto
    padding 1rem 0
    &-title
      padding 0.5rem 0
      font-size 1rem
      font-weight 600
    &-code
      font-size 85%
      line-height 1.45
      border-radius 3px
      word-wrap normal

.markdown-body
  max-width 960px
  margin 0 auto
</style>
