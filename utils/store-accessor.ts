/* eslint-disable import/no-mutable-exports */
import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import Register from "@/store/users/register";
import Todos from "~/store/todos";

let register: Register;
let todos: Todos;

function initializeStores(store: Store<any>): void {
  register = getModule(Register, store);
  todos = getModule(Todos, store);
}

export { initializeStores, register, todos };
