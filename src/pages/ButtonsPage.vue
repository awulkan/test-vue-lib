<template>
  <div class="column">
    <div class="title">Button</div>
    <VButton>Default</VButton>
    <div class="title">Disabled button</div>
    <VButton disabled>Disabled</VButton>
    <div class="title">Loading button</div>
    <VButton :spinner="true">Loading</VButton>
  </div>
</template>

<script>
import VButton from '../components/buttons/VButton.vue'

export default {
  name: 'ButtonsPage',
  components: {
    VButton,
  },
}
</script>

<style scoped>
.title {
  margin-top: 15px;
  margin-bottom: 5px;
}
</style>
