<template>
  <ChangePasswordTemplate />
</template>

<script lang="ts">
import Vue from "vue";
import { forgotPassword } from "~/store";
export default Vue.extend({
  name: "ChangePasswordPage",
  async asyncData({ params, redirect }) {
    try {
      const key = params.key as string;

      await forgotPassword.show(key);
    } catch (error) {
      redirect("/404");
    }
  },
});
</script>
