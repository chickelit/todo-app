<template>
  <div class="change-password-form">
    <h1 class="title">Atualizar senha</h1>
    <form
      name="change-password-form"
      autocomplete="off"
      @submit.prevent="onSubmit"
    >
      <FormField label="Email" :disabled="true" :value="$key.email" />
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
      <FormButton
        text="Enviar"
        :error="hasUnknownError"
        :disabled="$unconfirmed"
      />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { forgotPassword } from "~/store";
export default Vue.extend({
  data() {
    return {
      form: {
        password: "",
        passwordConfirmation: "",
      },
      hasUnknownError: false,
    };
  },
  computed: {
    $key() {
      return forgotPassword.$key;
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
      try {
        await forgotPassword.update({
          key: this.$key.key,
          ...this.form,
        });

        this.$router.push("/login");
      } catch (error) {
        this.hasUnknownError = true;

        this.form = {
          password: "",
          passwordConfirmation: "",
        };

        document.forms.namedItem("change-password-form")?.reset();
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.change-password-form {
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