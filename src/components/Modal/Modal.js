import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    modalImage: PropTypes.string.isRequired,
    modalAlt: PropTypes.string.isRequired,
  };

  componentDidMount() {
    // console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    console.log(event.code);

    if (event.key === 'Escape') {
      // console.log('Нажали ESC, нужно закрыть модалку');
      this.props.onCloseModal(event);
    }
  };

  handleBackdropClick = event => {
    // console.log('Кликнули в бекдроп');
    // console.log('currentTarget: ', event.currentTarget);
    // console.log('target: ', event.target);

    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    return createPortal(
      <div className={style.Overlay} onClick={this.props.onCloseModal}>
        <div className={style.Modal}>
          {this.props.children}
          <img src={this.props.modalImage} alt={this.props.modalAlt} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onKeyDown: PropTypes.func,
  onCloseModal: PropTypes.func,
};
