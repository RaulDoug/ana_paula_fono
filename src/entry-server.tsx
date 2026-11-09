import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { getRouteSEO } from './data/seoData';
import { renderHeadString } from './lib/seo';

export const PRERENDER_ROUTES = [
  { url: '/', file: 'index.html' },
  { url: '/servicos', file: 'servicos.html' },
  { url: '/sobre', file: 'sobre.html' },
  { url: '/404', file: '404.html' },
];

export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, head: renderHeadString(getRouteSEO(url)) };
}
