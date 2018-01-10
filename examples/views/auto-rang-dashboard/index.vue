<template lang="pug">
.auto-rang-dashboard-demo
  auto-rang-dashboard(
    v-model="value",
    title="温度",
    :min="0",
    :max="100",
    unit="°C",
    :disabled="true"
  )
</template>

<script>
export default {
  name: 'auto-rang-dashboard-demo',
  data () {
    return {
      value: 0
    }
  }
}
</script>
