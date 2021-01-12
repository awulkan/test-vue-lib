<template>
  <button
    class="v-button"
    :class="type"
    :disabled="disabled">
    <div
      v-if="spinner"
      class="v-button__spinner">
      <VProgressCircular />
    </div>
    <div
      class="v-button__slot"
      :class="{'v-button__slot--hidden': spinner}">
      <slot />
    </div>
  </button>
</template>

<script>
// import { computed } from 'vue'
import VProgressCircular from '../progress/VProgressCircular.vue'

export default {
  name: 'VButton',
  components: {
    VProgressCircular,
  },
  props: {
    disabled: Boolean,
    spinner: Boolean,
    type: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    // const buttonType = computed(() => {
    //   return {
    //     action: props.type === 'action',
    //     primary: props.type === 'primary',
    //     secondary: props.type === 'secondary',
    //   }
    // })

    return {}
  },
}
</script>

<style scoped>
.v-button {
  position: relative;
  height: 30px;
  border: none;
  padding: 0;
  background-color: gainsboro;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  user-select: none;
  white-space: nowrap;
  transition-property: background-color, border;
  transition-duration: 100ms;
  transition-timing-function: ease-in-out;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.85);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.85);
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.85);
}

.v-button:hover {
}

.v-button:disabled {
  background-color: #d1d1d1;
  cursor: default;
}

.v-button__slot--hidden {
  opacity: 0;
}

.v-button__slot {
  padding: 8px 16px;
  letter-spacing: 0.4px;
  text-decoration: none;
}

.v-button__spinner {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}
</style>
