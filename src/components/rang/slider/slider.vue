<template lang="pug">
.auto-rang-slider
  hk-slider(
    v-model="val",
    :min="min",
    :max="max",
    :step="step",
    :title="title",
    :unit="unit",
    :disabled="disabled",
    @input="update"
  )
</template>

<script>
export default {
  name: 'auto-rang-slider',
  props: {
    value: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    unit: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      val: this.value
    }
  },
  watch: {
    value () {
      this.val = this.value
    }
  },
  methods: {
    update (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="stylus">
.auto-rang-slider
  padding 0.3rem 1rem
</style>
