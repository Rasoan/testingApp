import React, {useEffect} from "react";
import PropTypes from "prop-types";
import style from "./ModalWindow.module.scss";
import { autorun } from 'mobx'



const ModalWindow = (props) => {
    const {closeModalWindow, name, surname} = props;
    const upHandler = ({key}) => {
      if(key !== "Escape") return;
      closeModalWindow();
    }

    React.useEffect(() => {
      autorun(() => {
        window.addEventListener("keyup", upHandler);
      });
    },[])

    return (
      <>
      <div onClick={closeModalWindow} className={style.modalWrapper}></div>
      <div className={style.modalContainer}>
        <div className={style.itemContainerButtonClose}>
          <button onClick={closeModalWindow} className={style.buttonClose}>X</button>
        </div>
        <h1 className={style.modalHeader}>Hello world!</h1>
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