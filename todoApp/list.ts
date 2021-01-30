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

  clearTodoList(): void {
    fs.writeFileSync(`tasks.txt`, `Tasks for today:`);
  }

  removeTask(indexOfTaskToRemove: any): void {
    let todos = fs.readFileSync(`tasks.txt`, `utf-8`).split(`\n`);
    todos.splice(indexOfTaskToRemove, 1);
    fs.writeFileSync(`tasks.txt`, todos.join(`\n`));
  }
}

// let newList = new List(`Todaystodo`);
// newList.removeTask(2);
