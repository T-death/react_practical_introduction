import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import RecoilCounter from './chap7/RecoilCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <RecoilCounter />
  </RecoilRoot>
);
