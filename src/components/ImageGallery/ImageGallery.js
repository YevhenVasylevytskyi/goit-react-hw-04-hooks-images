import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import ApiService from '../../services/ApiService';
import Loader from '../Loader/Loader';
import SerchError from '../SearchError/SearchError';
import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    cards: [],
    status: Status.IDLE,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.searchQuery;
    const nextSearch = this.props.searchQuery;

    if (prevSearch !== nextSearch) {
      this.setState({ status: Status.PENDING });
      //   console.log('prevProps.searchQuery:', prevProps.searchQuery);
      //   console.log('this.props.searchQuery:', this.props.searchQuery);
      //   console.log('Изменился запрос');

      ApiService(nextSearch, 1).then(result => {
        if (result.hits.length !== 0) {
          return this.setState({
            cards: result.hits,
            status: 'resolved',
            page: 1,
          });
        }

        return this.setState({ cards: result.hits, status: 'rejected' });
      });
    }
    //   console.log(this.state.cards);
  }

  loadMore = () => {
    const nextSearch = this.props.searchQuery;
    const { page } = this.state;
    this.setState({ status: 'pending' });

    ApiService(nextSearch, page + 1)
      .then(result => {
        return this.setState(prevState => {
          return {
            cards: [...prevState.cards, ...result.hits],
            status: 'resolved',
            page: prevState.page + 1,
          };
        });
      })
      .finally(() => {
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }, 100);
      });
    // console.log("this.state.page", this.state.page);
  };

  render() {
    const { cards, status } = this.state;

    const { searchQuery } = this.props;

    if (status === 'idle') {
      return <div className={style.Idle}>Введите запрос поиска.</div>; //Добавить стиль
    }

    if (status === 'pending') {
      return (
        <>
          <ul className={style.ImageGallery}>
            <ImageGalleryItem cards={cards} />
          </ul>
          <Loader />
        </>
      );
    }

    if (status === 'rejected') {
      return <SerchError message={searchQuery} />;
    }

    if (status === 'resolved') {
      return (
        <div>
          {cards && (
            <>
              <ul className={style.ImageGallery}>
                <ImageGalleryItem cards={cards} />
              </ul>

              <Button loadMore={this.loadMore} />
            </>
          )}
        </div>
      );
    }
  }
}

ImageGallery.protoType = {
  searchQuery: PropTypes.string,
};
