import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import Register from "@/store/users/register";

// eslint-disable-next-line import/no-mutable-exports
let register: Register;

function initializeStores(store: Store<any>): void {
  register = getModule(Register, store);
}

export { initializeStores, register };