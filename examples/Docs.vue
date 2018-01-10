<template lang="pug">
.docs
  .markdown-body(v-html="doc")
  .docs-source(v-if="source")
    .docs-source-title 示例源码
    .docs-source-code
      pre
        code.language-html(ref="source") {{ source }}
</template>

<script>
import axios from 'axios'
import hljs from 'highlight.js'
import { routes } from './router'
import readme from '../README.md'

export default {
  name: 'docs',
  data () {
    return {
      docs: {},
      source: ''
    }
  },
  computed: {
    route () {
      return this.$route.name
    },
    doc () {
      return this.docs[this.route] || this.docs['readme']
    }
  },
  mounted () {
    this.docs = { readme }
    routes.forEach(async route => {
      const doc = await import(`./views/${route.name}/README.md`)
      this.$set(this.docs, route.name, doc)
    })
    this.setView()
  },
  watch: {
    route () {
      this.setView()
    }
  },
  methods: {
    setView () {
      if (this.$http) {
        this.$http.cancel()
      }
      this.source = ''
      if (this.$route.name) {
        this.fetchSource()
      }
    },
    fetchSource () {
      this.$http = axios.CancelToken.source()
      // 拉取源代码
      axios.get(`/views/${this.$route.name}/index.vue`, {
        cancelToken: this.$http.token
      }).then(({ data }) => {
        // 高亮显示源代码
        this.source = data
        this.$nextTick(() => {
          if (this.$refs.source) {
            hljs.highlightBlock(this.$refs.source)
          }
        })
      }).catch(e => {
        if (!e.__CANCEL__) {
          this.$notify('获取源码文件失败')
        }
      }).finally(() => {
        this.$http = null
      })
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
