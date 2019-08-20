

import React from 'react';
// import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';
import("./StoryModal.css");

function ModalExample(props) {
  return (
    <Modal className="modal" show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="content">{props.content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
          </Button>

      </Modal.Footer>
    </Modal>
  );
}

export default ModalExample;



// ReactDOM.render(
//   <ModalExample />,
//   document.getElementById('root')
// );
