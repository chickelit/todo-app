<template>
  <div class="change-password-template">
    <PasswordConfirmationForm @confirmed="changePassword">
      <FormField
        label="Email"
        type="email"
        :disabled="true"
        value="example@gmail.com"
      />
    </PasswordConfirmationForm>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      form: {
        password: "",
        passwordConfirmation: "",
      },
    };
  },
  methods: {
    changePassword(event: any) {
      this.form = {
        password: event.password,
        passwordConfirmation: event.passwordConfirmation,
      };

      this.$router.push("/login");
    },
  },
});
</script>

<style lang="scss" scoped>
.change-password-template {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom left, #1d038f, #80e0ec);
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>