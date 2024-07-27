import React from 'react';
import ReactDOM from 'react-dom/client';
import MyThemeProvider from './chap7/MyThemeProvider';
import HookThemeButton from './chap7/HookThemeButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyThemeProvider>
    <HookThemeButton />
  </MyThemeProvider>
);
