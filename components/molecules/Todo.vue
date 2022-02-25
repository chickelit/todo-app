<template>
  <div :class="['todo', { done: todo.done }]">
    <div class="task">
      {{ todo.description }}
    </div>
    <div class="buttons">
      <div class="complete" @click="complete(todo.id)"></div>
      <div class="delete" @click="destroy(todo.id)"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { todos } from "~/store";
export default Vue.extend({
  name: "TodoCard",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async complete(id: number) {
      try {
        await todos.update({ id });
      } catch (error) {}
    },
    async destroy(id: number) {
      try {
        await todos.destroy({ id });
      } catch (error) {}
    },
  },
});
</script>

<style lang="scss" scoped>
.delete {
  background-color: #d53e6b;
  width: 24px;
  height: 24px;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s linear;
  position: relative;
  &:before,
  &:after {
    content: "";
    width: 3px;
    height: 13px;
    background-color: #ececf6;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(130deg);
  }
  &:hover {
    background-color: #984848;
  }
}
.complete {
  background-color: #11bb44;
  width: 24px;
  height: 24px;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s linear;
  position: relative;
  &:before,
  &:after {
    content: "";
    width: 3px;
    height: 13px;
    background-color: #ececf6;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  &:before {
    transform: translate(-50%, -50%) rotate(30deg);
    left: calc(50% + 2px);
  }
  &:after {
    height: 8px;
    transform: translate(-50%, -50%) rotate(125deg);
    top: calc(50% + 3px);
    left: calc(50% - 2px);
  }
  &:hover {
    background-color: #0f8d35;
  }
}
.todo {
  background: #4a4dfa;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 3rem;
  .buttons {
    display: grid;
    grid-template-columns: max-content max-content;
    gap: 0.75rem;
  }
  &.done {
    text-decoration: line-through;
  }
}
</style>