import PropTypes from 'prop-types';
import style from './SerchError.module.css';

export default function SerchError({ message }) {
  return (
    <span className={style.Message}> Search images "{message}" not found </span>
  );
}

SerchError.protoType = {
  message: PropTypes.string,
};
