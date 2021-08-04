import React from 'react';
import { Modal } from 'react-bootstrap';
import closeButton from '../../assests/img/icons/close.svg';
import { useGlobalContext } from '../../contexts/GlobalContext';

const SundayModal = (props) => {
  const { modalShow, handleModalClickClose } = useGlobalContext();
  return (
    <Modal
      show={modalShow}
      onHide={handleModalClickClose}
      backdrop='static'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <div className='modal-content'>
        <button className='close' type='button' onClick={handleModalClickClose}>
          <img src={closeButton} alt='closeModalButton' />
        </button>
        <Modal.Body>
          {props.children}
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default SundayModal;
