import React from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// Well, we can't test client-side easily without a browser, but the fact that `helmetContext` is empty in SSR proves that `react-helmet-async` is completely bypassed by React 19 for hoisted tags.
