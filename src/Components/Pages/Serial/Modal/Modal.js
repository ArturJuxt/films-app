import React from "react";
import "./Modal.scss";
import RNModal from "react-modal";

RNModal.setAppElement("#root");
function Modal({ isOpen, onClose, onSave, children }) {
  return (
    <div className="">
      <RNModal
        className="modal"
        isOpen={isOpen}
        onRequestClose={() => onClose()}
      >
        <div className="modal-content">

          <div className="modal-body">
            { children }
          </div>
        </div>
      </RNModal>
    </div>
  );
}

export default Modal;
