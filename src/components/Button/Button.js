import style from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ loadMore }) {
  return (
    <button type="submit" onClick={() => loadMore()} className={style.Button}>
      Load more
    </button>
  );
}

Button.propTypes = {
  LoadMore: PropTypes.func,
};
