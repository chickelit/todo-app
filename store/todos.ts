import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { $axios } from "~/utils/nuxt-instance";

interface CreatePayload {
  description: string;
}

interface UpdatePayload {
  id: number;
}

interface DestroyPayload {
  id: number;
}

@Module({ name: "todos", stateFactory: true, namespaced: true })
export default class TodosStore extends VuexModule {
  private todos = [] as any[];

  public get $all() {
    return this.todos;
  }

  @Mutation
  private SET_TODOS(todos: any[]) {
    this.todos = todos;
  }

  @Mutation
  private UPDATE_TODO(todo: any) {
    const mappedTodos = this.todos.map((todoIteration) => {
      if (todoIteration.id === todo.id && todoIteration.done !== todo.done) {
        todoIteration.done = todo.done;

        return todoIteration;
      }

      return todoIteration;
    });

    this.todos = mappedTodos;
  }

  @Mutation
  private DESTROY_TODO(id: number) {
    const filteredTodos = this.todos.filter((todo) => todo.id !== id);

    this.todos = filteredTodos;
  }

  @Mutation
  private ADD_TODO(todo: any) {
    this.todos.unshift(todo);
  }

  @Action({ rawError: true })
  public async index() {
    const todos = await $axios.$get("/todos");

    this.context.commit("SET_TODOS", todos);
  }

  @Action({ rawError: true })
  public async create(payload: CreatePayload) {
    const todo = await $axios.$post("/todos", payload);

    this.context.commit("ADD_TODO", todo);
  }

  @Action({ rawError: true })
  public async update(payload: UpdatePayload) {
    const todo = await $axios.$put(`/todos/${payload.id}`);

    this.context.commit("UPDATE_TODO", todo);
  }

  @Action({ rawError: true })
  public async destroy(payload: DestroyPayload) {
    await $axios.delete(`/todos/${payload.id}`);

    this.context.commit("DESTROY_TODO", payload.id);
  }
}
