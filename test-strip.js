import { renderToString } from 'react-dom/server';
import React from 'react';

const el = React.createElement('div', { id: 'app' },
  React.createElement('title', null, 'My Title'),
  React.createElement('meta', { name: 'description', content: 'test' }),
  React.createElement('div', { className: 'inner' }, 'Hello')
);
const html = renderToString(el);
console.log("Original HTML:");
console.log(html);

// Remove hoisted tags (anything before the first actual app element... wait, the first app element is <div id="app">, which is AT THE START if not for hoisted elements!)
// In React 19, hoisted elements are prepended BEFORE <div id="app">!
const rootIndex = html.indexOf('<div id="app"');
console.log("\nClean HTML:");
console.log(html.substring(rootIndex));
