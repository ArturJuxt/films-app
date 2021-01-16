import React, { useState, useCallback } from "react";
import Modal from "../Modal/Modal";
import SerialCard from "../SerialCard/SerialCard";
import { useSelector } from "react-redux";
import { getSerials } from "../../../../Store/Selectors/";
import SerialFrom from "../SerialForm/SerialForm";

import "./SerialList.scss";

function SerialList() {
  const serials = useSelector(getSerials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSerial, setSelectedSerial] = useState(false);

  const onAdd = useCallback(() => {
    setSelectedSerial(undefined);
    setIsModalOpen(true);
  }, [setIsModalOpen, setSelectedSerial]);

  const onEdit = useCallback(
    (serial) => {
      setSelectedSerial(serial);
      setIsModalOpen(true);
    },
    [setIsModalOpen, setSelectedSerial]
  );

  const onSave = useCallback(
    (serial) => {
      setSelectedSerial(serial);
      setIsModalOpen(true);
    },
    [setIsModalOpen, setSelectedSerial]
  );

  return (
    <div>
      <button className="add-serial" onClick={onAdd}>
        Add New Serial
      </button>
      <div className="serialList">
        {serials.map((serial) => {
          return <SerialCard key={serial.id} serial={serial} onEdit={onEdit} />;
        })}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={onSave}
      >
        <h2 className="h2-modal-name">Serial form</h2>
        <div className="modal-input">
          <SerialFrom
            serial={selectedSerial}
            onSave={() => setIsModalOpen(false)}
          />
        </div>
      </Modal>
    </div>
  );
}

export default SerialList;
