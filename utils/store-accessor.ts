/* eslint-disable import/no-mutable-exports */
import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import Register from "@/store/users/register";
import Todos from "~/store/todos";
import ForgotPassword from "~/store/users/forgotPassword";
import Auth from "~/store/users/auth";

let register: Register;
let todos: Todos;
let forgotPassword: ForgotPassword;
let auth: Auth;

function initializeStores(store: Store<any>): void {
  register = getModule(Register, store);
  todos = getModule(Todos, store);
  forgotPassword = getModule(ForgotPassword, store);
  auth = getModule(Auth, store);
}

export { initializeStores, register, todos, forgotPassword, auth };
