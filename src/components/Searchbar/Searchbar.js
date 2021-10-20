import React from 'react';
import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleSearchInput = event => {
    this.setState({
      inputValue: event.currentTarget.value.trim().toLocaleLowerCase(),
    });
    // console.log(event.currentTarget.value);
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.inputValue.trim() === '') {
      toast.error('Введите название картинки');
      return;
    }

    this.props.searchPictures(this.state.inputValue);
    toast.success('Приятного просмотра');

    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={style.Searchbar} onSubmit={this.handleSubmit}>
        <form className={style.SearchForm}>
          <button type="submit" className={style.SearchForm_button}>
            <span className={style.SearchForm_button_label}>
              <ImSearch />
              Search
            </span>
          </button>

          <input
            className={style.SearchForm_input}
            name="inputValue"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleSearchInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  searchPictures: PropTypes.func,
};
