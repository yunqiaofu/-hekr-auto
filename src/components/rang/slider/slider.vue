<template lang="pug">
.auto-rang-slider
  hk-slider(
    v-model="val",
    :min="min",
    :max="max",
    :step="step",
    :minText="minText",
    :maxText="maxText",
    :title="title",
    :unit="unit",
    :disabled="disabled"
  )
</template>

<script>
export default {
  name: 'auto-rang-slider',
  props: [
    'value',
    'title',
    'min',
    'max',
    'step',
    'minText',
    'maxText',
    'disabled',
    'unit'
  ],
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
  }
}
</script>

<style lang="stylus">
.auto-rang-slider
  padding 0.3rem 1rem
</style>
