<template lang="pug">
.auto-bool-switch
  hk-list(
    v-model="val",
    type="switch",
    :leftText="title",
    :switchProps="getSwitchProps"
  )
</template>

<script>
export default {
  name: 'auto-bool-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: [String, Number],
      default: ''
    },
    switchProps: {
      type: Object,
      default: () => {}
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
    getSwitchProps () {
      return {
        ...this.switchProps,
        disabled: this.disabled
      }
    }
  }
}
</script>
