function Task(text) {

  this.id = new Date().getTime().toString();
  this.text = text;

}

Task.prototype.validate = function(newData) {
    var data = newData || this;
    if (!data.text || typeof data.text !== "string" || data.text === "") {
      return false;
    }
    return true;
};

Task.prototype.update = function (data) {
  if (!this.validate(data)) {
    return false;
  }
  Object.keys(data).forEach(function(key){
    this[key] = data[key];
  }.bind(this));
  return this;
};


function TaskCounterUI(container, list) {

  this.list = list;
  this.cacheElements(container);
  this.bindEvents();
  this.update();

}

TaskCounterUI.prototype.cacheElements = function (container) {
  this.container = document.querySelector(container);
};

TaskCounterUI.prototype.update = function (event) {
  this.container.textContent = this.list.model.count;
};

TaskCounterUI.prototype.bindEvents = function () {
  document.addEventListener(this.list.model.eventKeys.taskAdded, this.update.bind(this));
  document.addEventListener(this.list.model.eventKeys.taskRemoved, this.update.bind(this));
};

function TaskList(container) {

  this.id = container.replace('#', '');
  this.tasks = [];
  this.count = 0;

  this.eventKeys = {
    taskAdded: this.id + ':task:added',
    taskUpdated: this.id + ':task:updated',
    taskRemoved: this.id + ':task:removed'
  };

  this.events = {
    taskAdded: new Event(this.eventKeys.taskAdded),
    taskUpdated: new Event(this.eventKeys.taskUpdated),
    taskRemoved: new Event(this.eventKeys.taskRemoved)
  };

}

var list1 = new TaskListUI('#tasks');
var list1Counter = new TaskCounterUI('#tasks-counter', list1);
