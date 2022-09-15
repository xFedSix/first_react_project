import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ButtonComponent from "../ButtonComponent";

const ModalConponent = (props) => {
  const { title, subtitle, image } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modal-dialog-centered d-flex justify-content-center">
      <ButtonComponent
        buttonClick={handleShow}
        buttonClass="button__large"
        label="READ MORE"
      />
      <div className="d-flex justify-content-center">
        <Modal show={show} onHide={handleClose}>
          <Modal.Title>
            <div className="col-12 d-flex justify-content-center pt-2">
              {title}
            </div>
          </Modal.Title>
          <Modal.Body>
            <div className="col-12 d-flex justify-content-center p-4">
              <img alt="aboutUs" src={image} />
            </div>
            <div className="col-12 d-flex justify-content-center p-2">
              {subtitle}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ModalConponent;
