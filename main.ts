`use strict`;
const fs = require(`fs`);

let tasks: string[] = [];
// console.log(process.argv);
if (process.argv.length === 2) {
  console.log(
    `Command Line Todo applivation \n============================\nCommand line arguments:\n    -l  List all tasks\n    -a  Adds a new task\n    -r  Remove a task\n    -c  Complete a task`
  );
} else {
  if (process.argv[2] === `-l`) {
    let fileContent = fs.readFileSync(`./tasks.txt`, `utf-8`).split(`\n`);
    for (let i: number = 0; i < fileContent.length; i++) {
      console.log(i + ` - ` + fileContent[i]);
    }
    // console.log(fileContent);
  } else if (process.argv[2] === `-a`) {
    //add new task
  } else if (process.argv[2] === `-r`) {
    //removes a task
  } else if (process.argv[2] === `-c`) {
    //complete a task
  } else {
    console.log(`No such command`);
  }
}
