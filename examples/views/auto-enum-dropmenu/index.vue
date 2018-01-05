<template lang="pug">
.auto-enum-dropmenu-demo
  auto-enum-dropmenu(
    v-model="value",
    title="模式",
    :items="items"
  )
</template>

<script>
export default {
  name: 'auto-enum-dropmenu-demo',
  data () {
    return {
      value: 0,
      items: [
        {
          value: 0,
          name: '模式0'
        },
        {
          value: 1,
          name: '模式1'
        },
        {
          value: 2,
          name: '模式2'
        }
      ]
    }
  }
}
</script>
