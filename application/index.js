class Task {
  constructor(text) {
    this.id = (new Date).getTime();
    this.text = text;
    this.status = false;
    this.position = true;
  }

  taskTrue() {
    this.status = true;
  }

  taskFalse() {
    this.status = false;
  }
}



function renderTask(task, resultBlock) {
  let li = document.createElement('li');
  li.innerText = task.text;
  resultBlock.appendChild(li);
};


let b = new Task('this is new Task');
renderTask(a, todo_app);

let c = new Task('this is new Task');
renderTask(a, todo_app);
