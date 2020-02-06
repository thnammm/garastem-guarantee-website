import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'components/admin-main/App';

import '../styles/index.scss';

ReactDOM.hydrate(
  <App initialData={window.__R_DATA.initialData} />,
  document.getElementById('root')
);
