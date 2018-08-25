class TaskList {
  constructor(container) {
    this.id = container.replace("#", "");
    this.tasks = [];
    this.count = 0;

    this.eventKeys = {
      taskAdded: this.id + ":task:added",
      taskRemoved: this.id + ":task:removed"
    };

    this.events = {
      taskAdded: new Event(this.eventKeys.taskAdded),
      taskRemoved: new Event(this.eventKeys.taskRemoved)
    };
  }

  addTask(task) {
    if (!task.validate()) {
      return;
    }
    this.tasks.push(task);
    this.count++;
    this.events.taskAdded.task = task;
    this.events.taskAdded.count = this.count;
    document.dispatchEvent(this.events.taskAdded);
    return task;
  }

  removeTask(task) {
    let idx = this.tasks.indexOf(task);
    this.tasks.splice(idx, 1);
    this.count--;
    this.events.taskRemoved.count = this.count;
    document.dispatchEvent(this.events.taskRemoved);
  }

  getTasks() {
    return this.tasks;
  }

  getTask(id) {
    return this.tasks.find(function(task) {
      return task.id === id;
    });
  }
}

export {TaskList}
