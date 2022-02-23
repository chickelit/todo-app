<template>
  <header class="header">
    <h1 class="title">ToDo's</h1>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HeaderOrganism",
});
</script>

<style lang="scss" scoped>
.header {
  font-family: "Poppins", sans-serif;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  h1 {
    padding: 0;
    margin: 0;
  }
}
</style>