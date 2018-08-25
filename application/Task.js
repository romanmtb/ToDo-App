class Task {
  constructor(text) {
    this.id = new Date().getTime().toString();
    this.text = text;
  }

  validate(newData) {
    //Instead creating if else statement, you can return logical statement in this case
    console.log('nd:', newData, 'this:', this);
    let data = newData || this;
    return !(!data.text || typeof data.text !== "string" || data.text === "");
  }
}

export {Task}
