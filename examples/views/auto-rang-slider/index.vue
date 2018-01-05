<template lang="pug">
.auto-rang-slider-demo
  auto-rang-slider(
    v-model="value",
    title="温度",
    :min="0",
    :max="100",
    unit="°C",
    :disabled="false"
  )
</template>

<script>
export default {
  name: 'auto-rang-slider-demo',
  data () {
    return {
      value: 0
    }
  }
}
</script>
