<template lang="pug">
.auto-enum-dropmenu
  hk-list(
    type="text",
    :leftText="title",
    rightIcon="hk-icons-angel-right",
    @right-click="showPop"
  )
  hk-pop(v-model="show")
    hk-select(
      v-model="val",
      :items="items",
      :multiple="multiple"
    )
</template>

<script>
export default {
  name: 'auto-enum-dropmenu',
  props: {
    value: {
      type: [Number, Array],
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
    multiple: {
      type: Boolean,
      default: false
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
        this.$emit('input', val)
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

