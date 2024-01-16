import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className='overlay' onClick={onClose} />
      <div className='modal'>
        <button className='close-button' onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
