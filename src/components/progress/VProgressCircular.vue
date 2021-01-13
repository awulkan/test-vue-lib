<template>
  <svg
    class="v-spinner"
    viewBox="0 0 50 50">
    <circle
      class="v-spinner__circle"
      :style="{stroke: color}"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke-width="5"/>
  </svg>
</template>

<script>
export default {
  name: 'VProgressCircular',
  props: {
    color: {
      type: String,
      required: false,
      default: '#7b7983',
    },
  },
}
</script>

<style scoped>
.v-spinner {
  animation: rotate 2s linear infinite;
  width: 100%;
  height: 100%;
}

.v-spinner__circle {
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

</style>
