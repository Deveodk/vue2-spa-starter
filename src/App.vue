<template>
  <div id="app">
    <layout></layout>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
    'layout': require('@/components/layout/layout.vue')
  }
}
</script>
<style lang="scss">
  @import url('styles/index.scss');
</style>
