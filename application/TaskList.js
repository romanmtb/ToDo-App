class TaskList {
	constructor(container) {
		this.id = container.replace('#', '');
		this.count = 0;
		this._tasks = [];

		this.eventKeys = {
			taskAdded: this.id + ':task:added',
			taskRemoved: this.id + ':task:removed',
		};

		this.events = {
			taskAdded: new Event(this.eventKeys.taskAdded),
			taskRemoved: new Event(this.eventKeys.taskRemoved),
		};
	}

	addTask(task) {
		if (!task.validate()) return;
		this._tasks.push(task);
		this.events.taskAdded.task = task;
		this.events.taskAdded.count = ++this.count;
		document.dispatchEvent(this.events.taskAdded);
		return task;
	}

	removeTask(task) {
		if (!task.validate()) return;
		let idx = this._tasks.indexOf(task);
		this._tasks.splice(idx, 1);
		this.events.taskRemoved.count = --this.count;
		document.dispatchEvent(this.events.taskRemoved);
	}

	get tasks() {
		return this._tasks;
	}

	getTask(id) {
		return this._tasks.find(task => task.id === id);
	}
}

export { TaskList };
