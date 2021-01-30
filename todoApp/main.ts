`use strict`;
const fs = require(`fs`);
import { Todo } from './todo';
import { List } from './list';
let tasks: string[] = [];
let newList = new List(`ListForToday`);
// console.log(process.argv);
if (process.argv.length === 2) {
  console.log(
    `Command Line Todo applivation \n============================\nCommand line arguments:\n    -l  List all tasks\n    -a  Adds a new task\n    -r  Remove a task\n    -c  Complete a task`
  );
} else {
  if (process.argv.indexOf(`-l`) !== -1) {
    newList.listTodos();
  } else if (process.argv.indexOf(`-a`) !== -1) {
    if (process.argv.indexOf(`-a`) + 1 === 3) {
      newList.addTodo(process.argv[3]);
    } else {
      console.log(`Unable to add: no task provided`);
    }
  } else if (process.argv.indexOf(`-r`) !== -1) {
    let indexOfCriteria: number = process.argv.indexOf(`-r`) + 1;
    if (process.argv[indexOfCriteria] === `0`) {
      newList.clearTodoList();
    } else if (process.argv[indexOfCriteria] !== `0`) {
      newList.removeTask(process.argv[indexOfCriteria]);
    }
  } else {
    console.log(`No such command`);
  }
}

// console.log(process.argv[process.argv.indexOf(`-r`) + 1]);
// console.log(process.argv[process.argv.indexOf(`-r`) + 1]);
