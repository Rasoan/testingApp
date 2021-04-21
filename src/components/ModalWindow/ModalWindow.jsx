import React, {useEffect} from "react";
import PropTypes from "prop-types";
import style from "./ModalWindow.module.scss";
import { autorun } from 'mobx'



const ModalWindow = (props) => {
    const {closeModalWindow, name, surname, modalVisibility} = props;
    const upHandler = ({key}) => {
      if(key === "Escape" || key === "Enter") closeModalWindow();
    }

    React.useEffect(() => {
      autorun(() => {
        window.addEventListener("keydown", upHandler);
      });
    },[])

    return (
      <>
      <div onClick={closeModalWindow} className={style.modalWrapper}></div>
      <div className={style.modalContainer}>
        <div className={style.itemContainerButtonClose}>
          <button onClick={closeModalWindow} className={style.buttonClose}>X</button>
        </div>
        <h1 className={style.modalHeader}>Привет!</h1>
        <div className={style.itemContainer}>
          <p className={style.item}>{surname}</p>
        </div>
        <div className={style.itemContainer}>
          <p className={style.item}>{name}</p>
        </div>
          <button onClick={closeModalWindow} className={style.okModalWindow}>Ok</button>
      </div>
      </>
    )
}

export default ModalWindow;