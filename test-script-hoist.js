import { renderToString } from 'react-dom/server';
import React from 'react';
const el = React.createElement('div', { id: 'app' },
  React.createElement('script', { type: 'application/ld+json' }, '{"test":1}'),
  React.createElement('div', null, 'Hello')
);
console.log(renderToString(el));
