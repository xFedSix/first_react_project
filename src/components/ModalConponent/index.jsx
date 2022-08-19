import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ButtonComponent from "../ButtonComponent";

const ModalConponent = (props) => {
  const { title, subtitle, image } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <ButtonComponent buttonClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Title>
          <div>{title}</div>
        </Modal.Title>
        <Modal.Body>
          <div className="">
            <img alt="aboutUs" src={image} />
          </div>
          <div className="">{subtitle}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalConponent;
