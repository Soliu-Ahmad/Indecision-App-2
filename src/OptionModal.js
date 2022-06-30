import React from "react"

import Modal from 'react-modal';

const OptionModal = (props) => {

    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel='option modal'
        >
            {props.selectedOption && <h2>{props.selectedOption}</h2>}
            <button onClick={props.closeModal}>Close</button>
        </Modal>)

}
export default OptionModal;