`use strict`;
let tasks: string[] = [];
console.log(process.argv);

if (process.argv[2] === `-l`) {
  console.log(tasks);
}
