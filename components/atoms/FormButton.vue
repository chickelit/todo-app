<template>
  <div class="form-button">
    <button :type="type" :disabled="disabled" @click="$emit('click')">
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "submit",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.form-button {
  button {
    width: 100%;
    height: 2rem;
    border: none;
    background: #3e48d3;
    color: white;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      background: #565ed6;
    }
  }
}
</style>