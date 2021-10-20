import React from 'react';
import Loader from 'react-loader-spinner';

import style from './Loader.module.css';

export default function LoaderOn() {
  return (
    <div className={style.Loader}>
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
    </div>
  );
}
