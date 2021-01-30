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
    let fileContent = fs.readFileSync(`./tasks.txt`, `utf-8`).split(`\n`);
    if (fileContent.length !== 1) {
      for (let i: number = 0; i < fileContent.length - 1; i++) {
        console.log(i + 1 + ` - ` + fileContent[i + 1]);
      }
    } else if (fileContent.length === 1) {
      console.log(`No todos for today!`);
    }

    // console.log(fileContent);
  } else if (process.argv.indexOf(`-a`) !== -1) {
    if (process.argv.indexOf(`-a`) + 1 === 3) {
      newList.addTodo(process.argv[3]);
    } else {
      console.log(`Unable to add: no task provided`);
    }
    //add new task
  } else if (process.argv.indexOf(`-r`) !== -1) {
    if (process.argv.indexOf(`-r`) !== -1) {
      newList.clearTodoList();
    }
    //removes a task
  } else if (process.argv.indexOf(`-c`) !== -1) {
    if (process.argv.indexOf(`-c`) + 1 === -1) {
      console.log(`Please type index of task to delete.`);
    } else {
      newList.removeTask(process.argv[3]);
    }
    //complete a task
  } else {
    console.log(`No such command`);
  }
}
