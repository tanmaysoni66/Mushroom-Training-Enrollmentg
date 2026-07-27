import { renderToString } from 'react-dom/server';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const helmetContext = {};
const el = React.createElement(HelmetProvider, { context: helmetContext }, 
  React.createElement('div', { id: "my-div" }, 
    React.createElement(Helmet, null, 
      React.createElement('script', { type: 'application/ld+json' }, '{"test":1}')
    )
  )
);
const html = renderToString(el);
console.log("HTML:", html);
console.log("HELMET:", helmetContext.helmet?.script?.toString());
