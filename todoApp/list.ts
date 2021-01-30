`use strict`;
let fs = require(`fs`);
import { Todo } from './todo';

export class List {
  protected _name: string;
  //   public _todos: Todo[];
  protected _todoList: string[];

  constructor(listName: string) {
    this._name = listName;
    // this._todos = [];
    this._todoList = fs.readFileSync(`tasks.txt`, `utf-8`);
  }

  addTodo(taskToAdd: string) {
    fs.writeFileSync(`tasks.txt`, `\n` + taskToAdd.toString(), { flag: `a+` });
  }

  clearTodoList() {}

  removeTask() {}
}
