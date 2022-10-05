import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        this.props.onClose();
        console.log('close');
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', event => {
      if (event.code === 'Escape') {
        this.props.onClose();
        console.log('close');
      }
    });
  }

  // handleKeyDown(event) {
  //   if (event.code === 'Escape') {
  //     this.props.onClose();
  //     console.log('close');
  //   }
  // }

  render() {
    return createPortal(
      <ModalBackdrop>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
