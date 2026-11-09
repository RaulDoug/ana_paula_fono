import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

for (const ph of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(ph)) throw new Error(`Placeholder ${ph} ausente em dist/index.html`);
}

const { render, PRERENDER_ROUTES } = await import(
  pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
);

for (const { url, file } of PRERENDER_ROUTES) {
  const { html, head } = render(url);
  const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
  fs.writeFileSync(path.join(dist, file), page, 'utf-8');
  console.log(`prerender ${url} -> dist/${file}`);
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
