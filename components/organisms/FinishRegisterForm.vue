<template>
  <div class="finish-register-form">
    <h1 class="title">Cadastrar</h1>
    <form
      autocomplete="off"
      @submit.prevent="$emit('passwordConfirmation', form)"
    >
      <FormField
        label="Email"
        type="email"
        :required="true"
        :disabled="true"
        value="example@gmail.com"
      />
      <FormField v-model="form.name" label="Nome" :required="true" />
      <FormField
        v-model="form.username"
        label="Nome de usuário"
        :required="true"
      />
      <FormButton text="Continuar" />
      <NuxtLink class="form-link forgot-password" to="/login">Entrar</NuxtLink>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      form: {
        name: "",
        username: "",
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.finish-register-form {
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