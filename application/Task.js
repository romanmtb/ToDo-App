class Task {
  constructor(text) {
    this._id = new Date().getTime().toString();
    this.text = text;
  }

  get id() {
    return this._id
  }

  validate(newData) {
    let data = newData || this;
    return !(!data.text || typeof data.text !== "string" || data.text === "");
  }
}

export {Task}
