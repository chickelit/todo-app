import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

interface CreatePayload {
  task: string;
}

@Module({ name: "todos", stateFactory: true, namespaced: true })
export default class TodosStore extends VuexModule {
  private todos = [] as any[];

  private id = 6 as number;

  public get $all() {
    return this.todos;
  }

  @Mutation
  private SET_TODOS(todos: any[]) {
    this.todos = todos;
  }

  @Mutation
  private ADD_TODO(todo: any) {
    this.todos.unshift(todo);
  }

  @Mutation
  private INCREMENT_ID() {
    this.id += 1;
  }

  @Action
  public index() {
    const payload = [
      { id: 1, task: "Lorem ipsum dolor sit, amet  adipisicing elit." },
      { id: 2, task: "Lorem  dolor sit,  consectetur adipisicing elit." },
      { id: 3, task: "Lorem ipsum, dolor sit amet consectetur adipisicing." },
      { id: 4, task: "Lorem, ipsum dolor." },
      {
        id: 5,
        task: "Lorem ipsum amet consectetur adipisicing elit. A, commodi repellat! Accusamus.",
      },
    ];

    this.context.commit("SET_TODOS", payload);
  }

  @Action
  public create(payload: CreatePayload) {
    this.context.commit("ADD_TODO", payload);

    this.context.commit("INCREMENT_ID");
  }
}
