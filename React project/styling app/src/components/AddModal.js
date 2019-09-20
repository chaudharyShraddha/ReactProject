import React from "react";
import Modal from "react-modal";

const AddModal = (props) => (
    
    <Modal 
    isOpen = {!!props.selectedOption} 
    onRequestClose = {props.removeSelectedOption}
    contentLabel = "selection"
    closeTimeoutMS = {300}
    className="modal"
    >
        <h3 className="modal--title">Selected option!</h3>
        {props.selectedOption && <p className="modal--body">{props.selectedOption}</p>}
        <button onClick={props.removeSelectedOption} className="button">OKAY</button>
    </Modal>
     
);

export default AddModal;