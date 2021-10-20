import { Component } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    modalImage: '',
    modalAlt: '',
  };

  onOpenModal = event => {
    this.setState({
      modalImage: event.target.dataset.source,
      showModal: true,
      modalAlt: event.target.attributes.alt.textContent,
    });
    //  console.log(event.target.dataset.source);
    //  console.log(event.target.attributes.alt.textContent);
  };

  onCloseModal = event => {
    if (event.target.nodeName !== 'IMG') {
      this.setState({ showModal: false, modalIagemg: '', modalAlt: '' });
    }
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        {this.props.cards.map(card => {
          return (
            <li className={style.ImageGalleryItem} key={card.id}>
              <div>
                <img
                  onClick={this.onOpenModal}
                  src={card.webformatURL}
                  className={style.ImageGalleryItemImage}
                  alt={card.id}
                  data-source={card.largeImageURL}
                />
              </div>
            </li>
          );
        })}

        {showModal && (
          <Modal
            onCloseModal={this.onCloseModal}
            modalImage={this.state.modalImage}
            modalAlt={this.state.modalAlt}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.protoType = {
  cards: PropTypes.array,
};
