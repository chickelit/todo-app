<template>
  <div class="todo-creation">
    <form autocomplete="off" @submit.prevent="onSubmit">
      <FormField v-model="text" label="Tarefa" />
      <FormButton text="Criar" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { todos } from "~/store";
export default Vue.extend({
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onSubmit() {
      todos.create({ task: this.text });
    },
  },
});
</script>

<style lang="scss" scoped>
.todo-creation {
  form {
    display: grid;
    grid-template-columns: 1fr 5rem;
    gap: 1rem;
  }
}
</style>