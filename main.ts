`use strict`;
let tasks: string[] = [];
console.log(process.argv);

if (process.argv[2] === `-l`) {
  console.log(tasks);
} else if (process.argv[2] === `-a`) {
  //add new task
} else if (process.argv[2] === `-r`) {
  //removes a task
} else if (process.argv[2] === `-c`) {
  //complete a task
} else {
  console.log(`No such command`);
}
