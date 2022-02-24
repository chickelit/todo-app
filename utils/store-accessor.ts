/* eslint-disable import/no-mutable-exports */
import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import Register from "@/store/users/register";
import Todos from "~/store/todos";
import ForgotPassword from "~/store/users/forgotPassword";

let register: Register;
let todos: Todos;
let forgotPassword: ForgotPassword;

function initializeStores(store: Store<any>): void {
  register = getModule(Register, store);
  todos = getModule(Todos, store);
  forgotPassword = getModule(ForgotPassword, store);
}

export { initializeStores, register, todos, forgotPassword };
