<template>
  <div class="finish-register-template">
    <FinishRegisterForm
      v-if="!passwordConfirmationActive"
      @passwordConfirmation="passwordConfirmation($event)"
    />
    <PasswordConfirmationForm v-else @confirmed="finishRegister" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      passwordConfirmationActive: false,
      form: {
        name: "",
        username: "",
        password: "",
        passwordConfirmation: "",
      },
    };
  },
  methods: {
    passwordConfirmation(event: any) {
      this.passwordConfirmationActive = true;
      this.form = {
        ...this.form,
        name: event.name,
        username: event.username,
      };
    },
    finishRegister(event: any) {
      this.form = {
        ...this.form,
        password: event.password,
        passwordConfirmation: event.passwordConfirmation,
      };

      this.$router.push("/login");
    },
  },
});
</script>

<style lang="scss" scoped>
.finish-register-template {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom right, #af0606, #e7ff0f);
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>