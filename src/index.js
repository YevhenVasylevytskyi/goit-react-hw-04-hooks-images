import './index.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import style from './App.module.css';

ReactDom.render(
  <React.StrictMode>
    <App className={style.App} />
  </React.StrictMode>,
  document.querySelector('#root'),
);
