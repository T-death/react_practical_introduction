import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const content = `<h3>WINGSのプロジェクト</h3>
  <img src="https://wings.msn.to/image.wings.jpg" />`
const dest = 'https://ja.react.dev';
root.render(
  // <>
  //   <p>Tom &amp; Jerry</p>
  //   <p>{'Tom &amp; Jerry'}</p>
  // </>
  // <ul>
  //   <li>{String(true)}</li>
  //   <li>{false}</li>
  //   <li>{undefined}</li>
  //   <li>{null}</li>
  //   <li>{0}</li>
  // </ul>
  <a href={dest}>React本家サイト</a>
)
// root.render(
//   <>
//     <p>こんにちは、世界！</p>
//     <p>はじめまして、React!!</p>
//   </>
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
// );

// setInterval(() => {
//   root.render(
//     <p>現在時刻：{(new Date()).toLocaleString()}</p>
//   );
// }, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
