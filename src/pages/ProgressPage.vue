<template>
  <div>
    <div class="title">Circular indeterminate</div>
    <div class="spinner-container">
      <VProgressCircular/>
    </div>
  </div>
</template>

<script>
import VProgressCircular from '../components/VProgressCircular/VProgressCircular.vue'

export default {
  name: 'ProgressPage',
  components: {
    VProgressCircular,
  },
}
</script>

<style scoped>
.title {
  margin-top: 15px;
  margin-bottom: 5px;
}

.spinner-container {
  height: 50px;
  width: 50px;
}
</style>
