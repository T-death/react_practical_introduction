import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyHello from './chap3/MyHello';
import EventBasic from './chap3/EventBasic';
import StateBasic from './chap3/StateBasic';
import books from './chap3/books';
import ForList from './chap3/ForList';
import ForFilter from './chap3/ForFliter';
import ForSort from './chap3/ForSort';
import ForNest from './chap3/ForNest';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myProps = {myName: "T", favFood: "りんご", favNumber: 17};

// root.render(
//   // <MyHello myName='T' favFood='りんご' favNumber={17} />
//   <MyHello {...myProps} />
// );

// root.render(
//   <EventBasic type />
// );

// root.render(
//   <StateBasic />
// );

root.render(
  <ForNest src={books} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
