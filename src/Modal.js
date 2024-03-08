import React from 'react';
import './Modal.css'; // Create and import your modal CSS

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button className="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
