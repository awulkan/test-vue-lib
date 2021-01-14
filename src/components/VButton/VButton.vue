<template>
  <button
    class="v-button"
    :class="`v-button--${type}`"
    :disabled="disabled">
    <div
      v-if="spinner"
      class="v-button__spinner">
      <VProgressCircular
        :max-height="'22px'"
        :max-width="'22px'"
        color="white" />
    </div>
    <div
      class="v-button__slot"
      :class="{'v-button__slot--hidden': spinner}">
      <slot />
    </div>
  </button>
</template>

<script>
import VProgressCircular from '../VProgressCircular/VProgressCircular.vue'

export default {
  name: 'VButton',
  components: {
    VProgressCircular,
  },
  props: {
    disabled: Boolean,
    spinner: Boolean,
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'action', 'delete'].includes(value),
    },
  },
}
</script>

<style scoped>
.v-button {
  position: relative;
  height: 30px;
  border: none;
  padding: 0;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  user-select: none;
  white-space: nowrap;
  transition-property: background-color;
  transition-duration: 100ms;
  transition-timing-function: ease-in-out;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.85);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.85);
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.85);
}

.v-button--primary {
  color: var(--primary-button-text-color);
  background-color: var(--primary-button-color);
}

.v-button--primary:hover {
  background-color: var(--primary-button-hover-color);
}

.v-button--secondary {
  color: var(--secondary-button-text-color);
  background-color: var(--secondary-button-color);
}

.v-button--secondary:hover {
  background-color: var(--secondary-button-hover-color);
}

.v-button--action {
  color: var(--action-button-text-color);
  background-color: var(--action-button-color);
}

.v-button--action:hover {
  background-color: var(--action-button-hover-color);
}

.v-button--delete {
  color: var(--delete-button-text-color);
  background-color: var(--delete-button-color);
}

.v-button--delete:hover {
  background-color: var(--delete-button-hover-color);
}

.v-button:disabled,
.v-button:disabled:focus {
  cursor: default;
  color: var(--disabled-button-text-color);
  background-color: var(--disabled-button-color);
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
