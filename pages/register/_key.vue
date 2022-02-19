<template>
  <FinishRegisterTemplate />
</template>

<script lang="ts">
import Vue from "vue";
import { register } from "~/store";
export default Vue.extend({
  name: "RegisterPage",
  async asyncData({ params, redirect }) {
    try {
      const key = params.key as string;

      await register.show(key);
    } catch (error) {
      return redirect("/404");
    }
  },
});
</script>
