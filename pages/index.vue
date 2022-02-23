<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from "vue";
import { todos } from "~/store";

export default Vue.extend({
  name: "IndexPage",
  asyncData() {
    todos.index();
  },
});
</script>