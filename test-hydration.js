import React from 'react';
import { renderToString } from 'react-dom/server';

function App({ isServer }) {
  return React.createElement('div', { id: 'root' },
    isServer ? null : React.createElement('title', null, 'Client Title'),
    React.createElement('h1', null, 'Hello')
  );
}

const html = renderToString(React.createElement(App, { isServer: true }));
console.log("Server HTML:", html);
