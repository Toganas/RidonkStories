

import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';


function ModalExample(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
          </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
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
