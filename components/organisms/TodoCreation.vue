<template>
  <div class="todo-creation">
    <form name="create-todo-form" autocomplete="off" @submit.prevent="onSubmit">
      <FormField
        v-model="task"
        :clean="clean"
        :error="hasError"
        label="Tarefa"
      />
      <FormButton :text="text" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { todos } from "~/store";
export default Vue.extend({
  data() {
    return {
      text: "Criar",
      task: "",
      clean: false,
      hasError: false,
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.text = "Criando...";
        await todos.create({ description: this.task });

        this.task = "";
        this.clean = true;

        setTimeout(() => {
          this.clean = false;
        }, 750);

        this.text = "Criar";
      } catch (error) {
        this.hasError = true;
        this.clean = true;
        this.task = "";
        this.text = "Criar";

        setTimeout(() => {
          this.hasError = false;
          this.clean = false;
        }, 750);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.todo-creation {
  form {
    display: grid;
    grid-template-columns: 1fr 7rem;
    gap: 1rem;
  }
}
</style>