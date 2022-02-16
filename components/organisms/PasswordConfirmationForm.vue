<template>
  <div class="password-confirmation-form">
    <h1 class="title">Confirmar senha</h1>
    <form autocomplete="off" @submit.prevent="onSubmit">
      <FormField
        v-model="password"
        label="Senha"
        type="password"
        :required="true"
      />
      <FormField
        v-model="passwordConfirmation"
        label="Confirmação de senha"
        type="password"
        :required="true"
      />
      <div
        :class="[
          'sign',
          { confirmed: $match && !$isEmpty, unconfirmed: !$match && !$isEmpty },
        ]"
      >
        {{ $text }}
      </div>
      <FormButton text="Confirmar" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      password: "",
      passwordConfirmation: "",
    };
  },
  computed: {
    $isEmpty(): boolean {
      const isEmpty = [this.password, this.passwordConfirmation].some(
        (string) => string.length === 0
      );

      return isEmpty;
    },
    $match(): boolean {
      const password = this.password;
      const passwordConfirmation = this.passwordConfirmation;

      return password === passwordConfirmation;
    },
    $text(): string {
      if (this.$isEmpty) {
        return "Confirme sua senha...";
      }

      const text = this.$match
        ? "Senha confirmada..."
        : "As senhas não batem...";

      return text;
    },
  },
  methods: {
    onSubmit() {
      if (this.password === this.passwordConfirmation) {
        this.$emit("confirmed", {
          password: this.password,
          passwordConfirmation: this.passwordConfirmation,
        });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.password-confirmation-form {
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
  .sign {
    &.confirmed {
      color: green;
    }
    &.unconfirmed {
      color: red;
    }
  }
}
</style>