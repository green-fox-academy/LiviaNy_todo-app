`use strict`;
const fs = require(`fs`);
import { List } from './list';
let newList = new List(`ListForToday`);

if (process.argv.length === 2) {
  console.log(
    `Command Line Todo applivation \n============================\nCommand line arguments:\n    -l  List all tasks\n    -a  Adds a new task\n    -r  Remove a task\n    -c  Complete a task`
  );
} else {
  if (process.argv.indexOf(`-l`) !== -1) {
    newList.listTodos();
  }
  try {
    if (process.argv.indexOf(`-a`) !== -1 && process.argv.indexOf(`-a`) + 1 === 3) {
      newList.addTodo(process.argv[3]);
    }
  } catch (err) {
    console.log(`Unable to add: no task provided`, err);
  }

  let indexOfCriteria: number = process.argv.indexOf(`-r`) + 1;
  if (process.argv.indexOf(`-r`) !== -1) {
    try {
      if (process.argv[indexOfCriteria] === `0`) {
        newList.clearTodoList();
      } else if (process.argv[indexOfCriteria] > `0`) {
        newList.removeTask(process.argv[indexOfCriteria]);
      } else if (process.argv[indexOfCriteria] === undefined) {
        throw new Error(`no index provided`);
      }
    } catch (err) {
      {
        console.log(`Unable to remove:` + err.message);
      }
    }
  }
}

// console.log(process.argv[process.argv.indexOf(`-r`) + 1]);
// console.log(process.argv[process.argv.indexOf(`-r`) + 1]);
