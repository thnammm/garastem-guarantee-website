import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {BrowserRouter as Router} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom';

import { App } from 'components/admin-main/App';

export async function serverRenderer() {
  const initialData = {
    appName: 'Quản lý',
  };

  const pageData = {
    title: `GARASTEM :: ${initialData.appName}`,
  };

  return Promise.resolve({
    initialData,
    initialMarkup: ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={initialData.appName}>
        <App initialData={initialData} />
      </StaticRouter>
    ),
    pageData
  });
}
