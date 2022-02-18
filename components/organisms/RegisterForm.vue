<template>
  <div class="register-form">
    <h1 class="title">Criar conta</h1>
    <form autocomplete="off" @submit.prevent="onSubmit">
      <FormField
        v-model="email"
        :error="hasEmailError"
        label="Email"
        type="email"
        :required="true"
        :disabled="emailSent"
      />
      <FormButton :text="text" :disabled="emailSent" />
      <NuxtLink class="form-link forgot-password" to="/login">Entrar</NuxtLink>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { register } from "@/utils/store-accessor";

export default Vue.extend({
  data() {
    return {
      text: "Enviar email",
      emailSent: false,
      email: "",
      hasEmailError: false,
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.text = "Enviando...";

        const response = await register.create({
          email: this.email,
          redirectUrl: "http://127.0.0.1:3000",
        });

        if (response.message === "Email sent") {
          this.text = "Email enviado";
          this.emailSent = true;
        }
        
        if (response.error) {
          throw response.error;
        }
      } catch (error: any) {
        if (error.status === 422) {
          if (error.data.field === "email") {
            this.hasEmailError = true;

            setTimeout(() => {
              this.hasEmailError = false;
            }, 750);
          }
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.register-form {
  background: white;
  box-sizing: border-box;
  width: 24rem;
  padding: 0 2rem;
  font-family: "Poppins", sans-serif;
  border-radius: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  .title {
    margin: 0;
    padding: 1.5rem 2rem;
    width: 100%;
    border-bottom: 1px solid #808080;
    text-align: center;
  }
  form {
    width: 100%;
    padding: 2rem 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 1rem;
    .form-link {
      color: gray;
      text-decoration: none;
      width: max-content;
      &.forgot-password {
        justify-self: center;
      }
    }
  }
}
</style>