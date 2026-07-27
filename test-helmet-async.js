import { renderToString } from 'react-dom/server';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const helmetContext = {};
const el = React.createElement(HelmetProvider, { context: helmetContext }, 
  React.createElement('div', { id: "my-div" }, 
    React.createElement(Helmet, null, 
      React.createElement('title', null, 'My Title'),
      React.createElement('meta', { name: 'description', content: 'test' })
    )
  )
);
const html = renderToString(el);
console.log("HTML:", html);
console.log("HELMET:", helmetContext.helmet?.title?.toString());
