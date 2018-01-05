<template lang="pug">
.auto-bool-switch-demo
  auto-bool-switch(
    v-model="sw",
    title="开关"
  )
</template>

<script>
export default {
  name: 'auto-bool-switch-demo',
  data () {
    return {
      sw: true
    }
  }
}
</script>
