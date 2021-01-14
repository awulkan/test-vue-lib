<template>
  <div class="column">
    <div class="title">Action button</div>
    <VButton type="action">Action</VButton>

    <div class="title">Primary button</div>
    <VButton type="primary">Primary</VButton>

    <div class="title">Secondary button</div>
    <VButton type="secondary">Secondary</VButton>

    <div class="title">Delete button</div>
    <VButton type="delete">Delete</VButton>

    <div class="title">Disabled button</div>
    <VButton disabled>Disabled</VButton>

    <div class="title">Loading button</div>
    <VButton
      type="primary"
      :spinner="true">Loading</VButton>
  </div>
</template>

<script>
import VButton from '../components/VButton/VButton.vue'

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
