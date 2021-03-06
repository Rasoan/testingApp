import React from "react";
import Form from "./Form";
import FormStore from "../../store/Form";
import { observer } from "mobx-react-lite";

const FormCOntainer = observer(() => {

  const setDataForm = (data) => {
    FormStore.setState(data.name, data.surname);
    FormStore.toggleModal(true);
  }

  
  return <Form setDataForm={setDataForm} />;
});

export default FormCOntainer;