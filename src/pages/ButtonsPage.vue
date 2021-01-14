<template>
  <div class="column">
    <div class="title">Action button</div>
    <div class="row">
      <VButton type="action">Action</VButton>
      <VButton
        type="action"
        circular>⚡️</VButton>
    </div>

    <div class="title">Primary button</div>
    <div class="row">
      <VButton type="primary">Primary</VButton>
      <VButton
        type="primary"
        circular>⚡️</VButton>
    </div>

    <div class="title">Secondary button</div>
    <div class="row">
      <VButton type="secondary">Secondary</VButton>
      <VButton
        type="secondary"
        circular>⚡️</VButton>
    </div>

    <div class="title">Delete button</div>
    <div class="row">
      <VButton type="delete">Delete</VButton>
      <VButton
        type="delete"
        circular>⚡️</VButton>
    </div>

    <div class="title">Disabled button</div>
    <div class="row">
      <VButton disabled>Disabled</VButton>
      <VButton
        circular
        disabled>⚡️</VButton>
    </div>

    <div class="title">Loading button</div>
    <div class="row">
      <VButton
        type="primary"
        spinner>Loading</VButton>
      <VButton
        type="primary"
        circular
        spinner/>
    </div>
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
  font-size: 18px;
}

.row {
  display: flex;
}

.row > * {
  margin-right: 15px;
}
</style>
