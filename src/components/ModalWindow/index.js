import React from "react";
import ModalWindow from "./ModalWindow";
import FormStore from "../../store/Form";
import { observer } from "mobx-react-lite";

const ModalWindowContainer = observer((props) => {
    const closeModalWindow = () => {
      FormStore.toggleModal(false);
    }

    if (!FormStore.modalVisibility) return null;

    return <ModalWindow closeModalWindow={closeModalWindow}
                        name={FormStore.state.name}
                        surname={FormStore.state.surname}
                        modalVisibility={FormStore.modalVisibility} />
});

export default ModalWindowContainer;