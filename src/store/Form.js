import {makeAutoObservable, makeObserver} from "mobx";
class FormStore {
  modalVisibility = false;
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

  toggleModal(flag) {
    this.modalVisibility = flag;
  }
}

export default new FormStore();