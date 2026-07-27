import { renderToString } from 'react-dom/server';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const el = React.createElement(HelmetProvider, null, 
  React.createElement('div', { id: "my-div" }, 
    React.createElement(Helmet, null, 
      React.createElement('title', null, 'My Title'),
      React.createElement('meta', { name: 'description', content: 'test' })
    )
  )
);
console.log(renderToString(el));
