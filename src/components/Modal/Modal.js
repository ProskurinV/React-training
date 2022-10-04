import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        this.props.onClose();
        console.log('close');
      }
    });
  }

  componentWillUnmount() {}

  render() {
    return createPortal(
      <ModalBackdrop>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
