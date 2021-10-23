// import React, { Component } from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ cards }) {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const onOpenModal = event => {
    setShowModal(true);
    setModalImage(event.target.dataset.source);
    setModalAlt(event.target.attributes.alt.textContent);
  };

  const onCloseModal = event => {
    if (event.target.nodeName !== 'IMG') {
      setShowModal(false);
      setModalImage('');
      setModalAlt('');
    }
  };

  return (
    <>
      {cards.map(card => {
        return (
          <li className={style.ImageGalleryItem} key={card.id}>
            <div>
              <img
                onClick={onOpenModal}
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
          onCloseModal={onCloseModal}
          modalImage={modalImage}
          modalAlt={modalAlt}
        />
      )}
    </>
  );
}

ImageGalleryItem.protoType = {
  cards: PropTypes.array,
};

// export default class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//     modalImage: '',
//     modalAlt: '',
//   };

//   onOpenModal = event => {
//     this.setState({
//       modalImage: event.target.dataset.source,
//       showModal: true,
//       modalAlt: event.target.attributes.alt.textContent,
//     });
//     //  console.log(event.target.dataset.source);
//     //  console.log(event.target.attributes.alt.textContent);
//   };

//   onCloseModal = event => {
//     if (event.target.nodeName !== 'IMG') {
//       this.setState({ showModal: false, modalIagemg: '', modalAlt: '' });
//     }
//   };

//   render() {
//     const { showModal } = this.state;

//     return (
//       <>
//         {this.props.cards.map(card => {
//           return (
//             <li className={style.ImageGalleryItem} key={card.id}>
//               <div>
//                 <img
//                   onClick={this.onOpenModal}
//                   src={card.webformatURL}
//                   className={style.ImageGalleryItemImage}
//                   alt={card.id}
//                   data-source={card.largeImageURL}
//                 />
//               </div>
//             </li>
//           );
//         })}

//         {showModal && (
//           <Modal
//             onCloseModal={this.onCloseModal}
//             modalImage={this.state.modalImage}
//             modalAlt={this.state.modalAlt}
//           />
//         )}
//       </>
//     );
//   }
// }

// ImageGalleryItem.protoType = {
//   cards: PropTypes.array,
// };
