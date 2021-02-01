`use strict`;
let fs = require(`fs`);

export class List {
  protected _name: string;
  protected _todoList: string[];

  constructor(listName: string) {
    this._name = listName;
    this._todoList = fs.readFileSync(`tasks.txt`, `utf-8`);
  }
  listTodos() {
    let fileContent = fs.readFileSync(`./tasks.txt`, `utf-8`).split(`\n`);
    if (fileContent.length > 1) {
      for (let i: number = 0; i < fileContent.length - 1; i++) {
        console.log(i + 1 + ` - ` + fileContent[i + 1]);
      }
    } else if (fileContent.length === 1) {
      console.log(`No todos for today!`);
    }
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

  lengthOfList(): number {
    let list: string[] = fs.readFileSync(`tasks.txt`, `utf-8`).split(`\n`);
    return list.length - 1;
  }

  doneTask(indexOfDoneTask: number) {
    let fileContent = fs.readFileSync(`./tasks.txt`, `utf-8`).split(`\n`);
    if (fileContent.length > 3) {
      for (let i: number = 0; i < fileContent.length - 1; i++) {
        if (i === indexOfDoneTask - 1) {
          console.log(i + 1 + ` - [x]` + fileContent[i + 1]);
        } else {
          console.log(i + 1 + ` - []` + fileContent[i + 1]);
        }
      }
    }
  }
}
