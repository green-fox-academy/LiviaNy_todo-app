export class Todo {
  protected _task: string;
  protected _index: number;

  constructor(task) {
    this._task = task;
  }

  protected emptyList() {}

  protected addNewTask(task) {}
}
