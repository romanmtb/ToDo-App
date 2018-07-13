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
