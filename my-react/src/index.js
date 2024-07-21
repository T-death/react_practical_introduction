import React from 'react';
import ReactDOM from 'react-dom/client';
import PortalBasic from './chap5/PortalBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div id="dialog"></div>
    <PortalBasic />
  </>
);
