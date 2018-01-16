<template lang="pug">
.auto-enum-dropmenu
  hk-list(
    type="text",
    :leftText="title",
    :rightText="getText",
    :rightIcon="rightIcon",
    @right-click="showPop"
  )
  hk-pop(v-model="show")
    hk-select(
      v-model="val",
      :items="items"
    )
</template>

<script>
export default {
  name: 'auto-enum-dropmenu',
  props: {
    value: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    val: {
      get () {
        return this.value
      },
      set (val) {
        this.show = false
        this.$emit('input', val)
      }
    },
    getText () {
      return (this.items[this.val] || {}).name
    },
    rightIcon () {
      if (!this.disabled) {
        return 'hk-icons-angel-right'
      }
    }
  },
  methods: {
    showPop () {
      if (!this.disabled) {
        this.show = true
      }
    }
  }
}
</script>

