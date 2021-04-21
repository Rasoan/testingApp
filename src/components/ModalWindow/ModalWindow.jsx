import React from "react";
import PropTypes from "prop-types";
import style from "./ModalWindow.module.scss";



const ModalWindow = (props) => {
    const {closeModalWindow, name, surname} = props;
    return (
      <div>
        <h1>Здравствуй</h1>
        <p>{surname}</p>
        <p>{name}</p>
        <button onClick={closeModalWindow}>Закрыть окно</button>
      </div>
    )
}

export default ModalWindow;