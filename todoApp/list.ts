import { Todo } from './todo';

export class List {
  protected _name: string;
  protected _todos: Todo[];

  constructor() {}

  addTodo(taskToAdd: string) {}

  clearTodoList() {}

  removeTask() {}
}
