import React from 'react'; // 리액트
import ReactDOM from 'react-dom'; // 리액트 DOM
import './index.css'; //CSS
import App from './App'; // APP 컴포넌트
import reportWebVitals from './reportWebVitals';

ReactDOM.render( // ReactDOM 내부의 컴포넌트들을 root 엘리먼트에 render
  <React.StrictMode>
    <App /> // APP 컴포넌트
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
