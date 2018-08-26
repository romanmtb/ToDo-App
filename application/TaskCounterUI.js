class TaskCounterUI {
  constructor(container, list) {
    this.list = list;
    this.cacheElements(container);
    this.bindEvents();
    this.update();
  }

  cacheElements(container) {
    this.container = document.querySelector(container);
  }

  bindEvents() {
    document.addEventListener(this.list.model.eventKeys.taskAdded,this.update.bind(this));
    document.addEventListener(this.list.model.eventKeys.taskRemoved,this.update.bind(this));
  }

  update() {
    this.container.textContent = this.list.model.count;
  }
}

export {TaskCounterUI}
