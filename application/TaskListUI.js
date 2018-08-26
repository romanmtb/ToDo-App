import {TaskList} from "./TaskList";
import {Task} from "./Task";

class TaskListUI {
  constructor(container) {
    this.model = new TaskList(container);

    this.cacheElements(container);
    this.bindEvents();
    this.renderList();
  }

  cacheElements(container) {
    this.container = document.querySelector(container);
    this.form = this.container.querySelector(container + "-form");
    this.form.taskText = this.form.querySelector("input");
    this.list = this.container.querySelector(container + "-list");
  }

  bindEvents() {
    this.form.addEventListener("submit", this.addTask.bind(this));
    document.addEventListener(this.model.eventKeys.taskAdded, this.renderList.bind(this));
    document.addEventListener(this.model.eventKeys.taskAdded, this.formClearer.bind(this));
    document.addEventListener(this.model.eventKeys.taskRemoved, this.renderList.bind(this));
  }

  formClearer() {
    this.form.taskText.value = "";
  }

  addTask(event) {
    event.preventDefault();
    let inputText = this.form.querySelector("input").value;
    if (inputText === '') return;

    let task = new Task(inputText);
    this.model.addTask(task);
    this.form.querySelector("input").focus();
  }

  updateTaskOnKeyPress(event) {
    if (event.which === 13) {
      this.addTask.call(this, event);
    }
  }

  removeTask(event) {
    if (!event.target.dataset.id) {
      console.warn('Task ID is required');
      return;
    }
    let task = this.model.getTask(event.target.dataset.id);
    let sure = confirm('Delete task "' + task.text + '"?');
    if (sure) this.model.removeTask(task);
  }

  renderList() {
    this.list.innerHTML = "";

    let tasks = this.model.tasks;

    if (tasks.length < 1) {
      let li = document.createElement("li");
      li.classList.add("collection-item", "grey", "lighten-3");
      let span = document.createElement("span");
      span.textContent = "There is no tasks! Take a break ☕️";
      li.appendChild(span);
      this.list.appendChild(li);
    }

    tasks.forEach(
      function(task) {
        this.renderTask(task);
      }.bind(this)
    );

  }

  renderTask(task) {
    let li = document.createElement("li");
    li.classList.add("collection-item");
    li.dataset.id = task.id;

    let div = document.createElement("div");
    div.classList.add("clear");

    let span = document.createElement("span");
    span.textContent = task.text;
    div.appendChild(span);

    let input = document.createElement("input");
    input.classList.add("left");
    input.setAttribute("type", "text");
    input.value = task.text;
    div.appendChild(input);

    let btnRemove = this.renderButton("removeTask", task.id, "delete");
    btnRemove.classList.add("secondary-content");
    div.appendChild(btnRemove);

    li.appendChild(div);

    this.list.appendChild(li);

    input.addEventListener("keypress", this.updateTaskOnKeyPress.bind(this));
    btnRemove.addEventListener("click", this.removeTask.bind(this));
  }

  renderButton(action, id, text) {
    let btn = document.createElement("a");
    btn.setAttribute("href", "#");
    btn.classList.add("grey-text", "right");
    btn.dataset.action = action;
    btn.dataset.id = id;

    let icon = document.createElement("i");
    icon.classList.add("material-icons");
    icon.textContent = text;
    icon.dataset.action = action;
    icon.dataset.id = id;

    btn.appendChild(icon);

    return btn;
  }
}

export  {TaskListUI}
