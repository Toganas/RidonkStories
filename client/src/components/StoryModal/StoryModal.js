// /* eslint react/no-multi-comp: 0, react/prop-types: 0 */

// import React from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// class ModalExample extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modal: false
//         };

//         this.toggle = this.toggle.bind(this);
//     }

//     toggle() {
//         this.setState(prevState => ({
//             modal: !prevState.modal
//         }));
//     }

//     render() {
//         return (
//             <div>
//                 <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
//                 <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//                     <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//                     <ModalBody>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//           </ModalBody>
//                     <ModalFooter>
//                         <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
//                         <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//                     </ModalFooter>
//                 </Modal>
//             </div>
//         );
//     }
// }

// export default ModalExample;

// --------------------
import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './StoryModal.css';





function ModalExample(id) {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Container style={{ paddingTop: '2rem' }}>
      {showButton && (
        <Button
          onClick={() => setShowMessage(true)}
          size="lg"
        >
          Show Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>
            Animated alert message
          </Alert.Heading>
          <p>
            This alert message is being transitioned in and
            out of the DOM.
          </p>
          <Button onClick={() => setShowMessage(false)}>
            Close
          </Button>
        </Alert>
      </CSSTransition>
    </Container>
  );
}

export default ModalExample;

// ReactDOM.render(
//   <ModalExample />,
//   document.getElementById('root')
// );
