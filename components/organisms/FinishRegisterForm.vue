<template>
  <div class="finish-register-form">
    <h1 class="title">Cadastrar</h1>
    <form autocomplete="off" @submit.prevent="onSubmit">
      <FormField
        label="Email"
        type="email"
        :disabled="true"
        :value="$keyInstance.email"
      />
      <FormField v-model="form.name" label="Nome" :required="true" />
      <FormField
        v-model="form.username"
        label="Nome de usuário"
        :required="true"
      />
      <FormField
        v-model="form.password"
        label="Senha"
        type="password"
        :required="true"
      />
      <FormField
        v-model="form.passwordConfirmation"
        label="Confirmação de senha"
        type="password"
        :required="true"
      />
      <div
        :class="['sign', { confirmed: $confirmed, unconfirmed: $unconfirmed }]"
      >
        {{ $text }}
      </div>
      <FormButton text="Enviar" :disabled="$unconfirmed" />
      <NuxtLink class="form-link forgot-password" to="/login">Entrar</NuxtLink>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { register } from "~/store";
export default Vue.extend({
  data() {
    return {
      hasUsernameError: false,
      form: {
        name: "",
        username: "",
        password: "",
        passwordConfirmation: "",
      },
    };
  },
  computed: {
    $keyInstance() {
      return register.$key;
    },
    $isEmpty(): boolean {
      return (
        this.form.password.length === 0 ||
        this.form.passwordConfirmation.length === 0
      );
    },
    $confirmed(): boolean {
      if (this.$isEmpty) return false;
      return this.form.password === this.form.passwordConfirmation;
    },
    $unconfirmed(): boolean {
      if (this.$isEmpty) return false;
      return this.form.password !== this.form.passwordConfirmation;
    },
    $text(): string {
      if (this.$isEmpty) {
        return "Confirme sua senha...";
      } else if (this.$confirmed) {
        return "Senha confirmada.";
      } else {
        return "As senhas não batem...";
      }
    },
  },
  methods: {
    async onSubmit() {
      if (this.$unconfirmed) return;
      
      try {
        const response = await register.update({
          ...this.form,
          key: this.$keyInstance.key,
        });

        if (response.error) {
          throw response.error;
        }

        this.$router.push("/login");
      } catch (error: any) {
        if (error.status === 422) {
          if (error.data.details[0].context.key === "username") {
            this.hasUsernameError = true;

            setTimeout(() => {
              this.hasUsernameError = false;
            }, 750);
          }
        }
      }
    },
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
    .sign {
      &.confirmed {
        color: green;
      }
      &.unconfirmed {
        color: red;
      }
    }
  }
}
</style>