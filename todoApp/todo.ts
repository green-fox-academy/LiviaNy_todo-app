export class Todo {
  protected _task: string;
  protected _idDone: boolean;

  constructor(task: string) {
    this._task = task;
  }

  protected emptyList() {}

  public completeTask(completedTask: string) {}
}
