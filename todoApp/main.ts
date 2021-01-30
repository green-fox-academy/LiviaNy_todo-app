`use strict`;
const fs = require(`fs`);
import { List } from './list';
let newList = new List(`ListForToday`);

try {
  if (process.argv[2] !== `-l` || `-a` || `-r` || `-c`) {
    throw new Error(`Unsupported argument`);
  }
} catch (err) {
  console.log(`Unable to run:` + err.message);
}
if (process.argv.length === 2) {
  console.log(
    `Command Line Todo applivation \n============================\nCommand line arguments:\n    -l  List all tasks\n    -a  Adds a new task\n    -r  Remove a task\n    -c  Complete a task`
  );
} else {
  if (process.argv.indexOf(`-l`) !== -1) {
    newList.listTodos();
  }
  if (process.argv.indexOf(`-a`) !== -1) {
    try {
      if (process.argv.indexOf(`-a`) + 1 === 3) {
        newList.addTodo(process.argv[3]);
      }
    } catch (err) {
      console.log(`Unable to add: no task provided`);
    }
  }
  let indexOfCriteria: number = process.argv.indexOf(`-r`) + 1;
  if (process.argv.indexOf(`-r`) !== -1) {
    try {
      if (process.argv[indexOfCriteria] === `0`) {
        newList.clearTodoList();
      } else if (
        process.argv[indexOfCriteria] > `0` &&
        parseInt(process.argv[indexOfCriteria]) < newList.lengthOfList()
      ) {
        newList.removeTask(process.argv[indexOfCriteria]);
      } else if (process.argv[indexOfCriteria] === undefined) {
        throw new Error(`no index provided`);
      } else if (parseInt(process.argv[indexOfCriteria]) > newList.lengthOfList()) {
        throw new Error(`index is out of bond`);
      } else if (isNaN(parseInt(process.argv[indexOfCriteria]))) {
        throw new Error(`index is not a number`);
      }
    } catch (err) {
      {
        console.log(`Unable to remove:` + err.message);
      }
    }
  }
  if (process.argv.indexOf(`-c`) !== -1) {
    newList.doneTask(parseInt(process.argv[process.argv.indexOf(`-c`) + 1]));
  }
}
