<template>
  <div :class="['form-field', { active, 'not-empty': content, error }]">
    <label for="field" class="label">{{ label }}</label>
    <input
      v-model="content"
      name="field"
      class="input"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      @focus="active = true"
      @blur="active = false"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String || Number,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: Number,
      default: 256,
    },
  },
  data() {
    return {
      content: this.value,
      active: false,
      empty: true,
    };
  },
});
</script>

<style lang="scss" scoped>
.form-field {
  height: 2rem;
  position: relative;
  .input {
    border-radius: 0.5rem;
    border: 2px solid lightsteelblue;
    height: 100%;
    width: 100%;
    outline: none;
    background: none;
    padding: 0 0.75rem;
    box-sizing: border-box;
    transition: all 0.2s linear;
    &:focus {
      border-color: lightskyblue;
    }
  }
  .label {
    font-size: 1rem;
    position: absolute;
    top: 0.5rem;
    left: 0.75rem;
    transition: all 0.2s linear;
    background: white;
    padding: 0 0.25rem;
    cursor: text;
    pointer-events: none;
  }
  &.active,
  &.not-empty {
    .label {
      font-size: 0.8rem;
      top: -0.6rem;
      left: 0.5rem;
    }
  }
  &.error {
    animation-name: bounce;
    animation-duration: 0.5s;
    .input {
      border-color: red;
    }
  }
}
</style>