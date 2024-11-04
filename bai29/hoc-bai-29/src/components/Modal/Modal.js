import React, { useState } from "react";
import "./Modal.scss";
const Modal = () => {
  const [showModal, setShowModal] = useState(true);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button onClick={handleShowModal}>Click</button>
      {showModal && (
        <div className="modal">
          <div className="modal__body">
            <button onClick={handleCloseModal} className="modal__close">
              X
            </button>
            <div className="modal__content">Nội dung....</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
