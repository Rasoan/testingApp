import {makeAutoObservable, makeObserver} from "mobx";
class FormStore {
  state = {
    name: "null",
    surname: "null",
  }

  constructor() {
    makeAutoObservable(this);
  }

  setState(name, surname) {
    this.state.name = name;
    this.state.surname = surname;
  }
}

export default new FormStore();