import React from 'react';
import ReactDOMServer from 'react-dom/server';

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
      <App initialData={initialData} />
    ),
    pageData,
  });
}
