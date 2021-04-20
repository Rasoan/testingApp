import React from "react";
import Form from "./Form";

const FormCOntainer = (props) => {
  const {store} = props;
  
  const setDataForm = (data) => {
    console.log("hello")
    console.log(data);
  }

  return <Form setDataForm={setDataForm}
               store={store} />;
}

export default FormCOntainer;