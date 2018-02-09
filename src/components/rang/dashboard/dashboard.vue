<template lang="pug">
.auto-rang-dashboard
  hk-dashboard(
    v-model="val",
    :max="max",
    :min="min",
    :step="step",
    :type="type",
    :disabled="disabled"
  )
</template>

<script>
export default {
  name: 'auto-rang-dashboard',
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
    },
    type () {
      return this.disabled ? 'none' : 'touch'
    }
  }
}
</script>

<style lang="stylus" scoped>
.auto-rang-dashboard
  padding 0.5rem 0
</style>
