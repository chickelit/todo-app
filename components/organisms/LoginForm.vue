<template>
  <div class="login-form">
    <h1 class="title">Login</h1>
    <form autocomplete="off" @submit.prevent="">
      <FormField label="Email" type="email" :required="true" />
      <FormField label="Senha" type="password" :required="true" />
      <NuxtLink class="form-link forgot-password" to="/forgot-password"
        >Esqueceu a senha?</NuxtLink
      >
      <FormButton text="Login" />
      <NuxtLink class="form-link register" to="/register"
        >Não tem uma conta?</NuxtLink
      >
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login-form {
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
      &.register {
        justify-self: center;
      }
    }
  }
}
</style>