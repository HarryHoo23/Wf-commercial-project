import React from 'react';
import { Modal } from 'react-bootstrap';
import closeButton from '../../assests/img/icons/close.svg';
import { useGlobalContext } from '../../contexts/GlobalContext';

const GeneralModal = (props) => {
  const { isModalShow, handleModalClickClose } = useGlobalContext();
  return (
    <Modal
      show={isModalShow.showModal}
      onHide={handleModalClickClose}
      backdrop='static'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <div className='modal-content'>
        <button className='close' type='button' onClick={handleModalClickClose}>
          <img src={closeButton} alt='closeModalButton' />
        </button>
        <Modal.Body>{props.renderBodyComponent}</Modal.Body>
      </div>
    </Modal>
  );
};

export default GeneralModal;
