class Task {

  constructor(text) {
    this.id = new Date().getTime().toString();
    this.text = text;
  }

  validate(newData) {
      var data = newData || this;
      if (!data.text || typeof data.text !== "string" || data.text === "") {
        return false;
      }
      return true;
  };

}





  class TaskList {

    constructor(container) {
      this.id = container.replace('#', '');
      this.tasks = [];
      this.count = 0;

      this.eventKeys = {
        taskAdded: this.id + ':task:added',
        taskRemoved: this.id + ':task:removed'
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
    };



    removeTask(task) {
      var idx = this.tasks.indexOf(task);
      this.tasks.splice(idx, 1);
      this.count--;
      this.events.taskRemoved.count = this.count;
      document.dispatchEvent(this.events.taskRemoved);
    };

    getTasks() {
      return this.tasks;
    };

    getTask(id) {
      return this.tasks.find(function(task){
        return task.id === id;
      });
    };

  }



  class TaskListUI {

    constructor(container) {
      this.model = new TaskList(container);

      this.cacheElements(container);
      this.bindEvents();
      this.renderList();
    }

    cacheElements(container) {
      this.container = document.querySelector(container);
      this.form = this.container.querySelector(container + '-form');
      this.form.taskText = this.form.querySelector('input');
      this.list = this.container.querySelector(container + '-list');
    };

    bindEvents() {
      this.form.addEventListener('submit', this.addTask.bind(this));
      document.addEventListener(this.model.eventKeys.taskAdded, this.renderList.bind(this));
      document.addEventListener(this.model.eventKeys.taskAdded, this.formClearer.bind(this));
      document.addEventListener(this.model.eventKeys.taskRemoved, this.renderList.bind(this));
    };

    formClearer(event) {
      this.form.taskText.value = '';
    };

    addTask(event) {
      event.preventDefault();
      var text = this.form.querySelector('input').value;
      var task = new Task(text);
      this.model.addTask(task);
    };



    updateTask(event) {
      var li = event.target.closest('li');
      var result = this.model.updateTask(li.dataset.id, {
        text: event.target.value
      });
      if(result) {
        li.classList.remove('edit-mode');
        var span = li.querySelector('span');
        span.textContent = result.text;
      }
    };

    updateTaskOnKeyPress(event) {
      if ( event.which === 13 ) {
        this.updateTask.call(this, event);
      }
    };

    removeTask(event) {
      if (!event.target.dataset.id) {
        alert('The task ID is required');
        return;
      }
      var task = this.model.getTask(event.target.dataset.id);
      var sure = confirm('Delete task "' + task.text  + '"?');
      if (sure) {
        this.model.removeTask(task);
      }
    };

    renderList() {

      this.list.innerHTML = '';

      var tasks = this.model.getTasks();

      if (tasks.length < 1) {

        var li = document.createElement('li');
        li.classList.add('collection-item', 'grey', 'lighten-3');

        var span = document.createElement('span');
        span.textContent = 'There is no tasks! Take a break...';

        li.appendChild(span);

        this.list.appendChild(li);

        return;

      }

      tasks.forEach(function (task) {
        this.renderTask(task);
      }.bind(this));

    };

    renderTask(task) {

      var li = document.createElement('li');
      li.classList.add('collection-item');
      li.dataset.id = task.id;

      var div = document.createElement('div');
      div.classList.add('clear');

      var span = document.createElement('span');
      span.textContent = task.text;
      div.appendChild(span);

      var input = document.createElement('input');
      input.classList.add('left');
      input.setAttribute('type', 'text');
      input.value = task.text;
      div.appendChild(input);

      var btnRemove = this.renderButton('removeTask', task.id , 'delete');
      btnRemove.classList.add('secondary-content');
      div.appendChild(btnRemove);

      li.appendChild(div);

      this.list.appendChild(li);

      div.addEventListener('click', this.editTask);
      input.addEventListener('blur', this.updateTask.bind(this));
      input.addEventListener('keypress', this.updateTaskOnKeyPress.bind(this));
      btnRemove.addEventListener('click', this.removeTask.bind(this));

    };

    renderButton(action, id, text) {

      var btn = document.createElement('a');
      btn.setAttribute('href', '#');
      btn.classList.add('grey-text', 'right');
      btn.dataset.action = action;
      btn.dataset.id = id;

      var icon = document.createElement('i');
      icon.classList.add('material-icons');
      icon.textContent = text;
      icon.dataset.action = action;
      icon.dataset.id = id;

      btn.appendChild(icon);

      return btn;
    };

  }



  class TaskCounterUI {

    constructor(container, list) {
      this.list = list;
      this.cacheElements(container);
      this.bindEvents();
      this.update();
    }

    cacheElements(container) {
      this.container = document.querySelector(container);
    };

    bindEvents() {
      document.addEventListener(this.list.model.eventKeys.taskAdded, this.update.bind(this));
      document.addEventListener(this.list.model.eventKeys.taskRemoved, this.update.bind(this));
    };

    update(event) {
      this.container.textContent = this.list.model.count;
    };

  }





var list1 = new TaskListUI('#tasks');
var list1Counter = new TaskCounterUI('#tasks-counter', list1);
console.log( '---', list1 );
