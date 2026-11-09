import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const distSsr = path.join(root, 'dist-ssr');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

for (const ph of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(ph)) throw new Error(`Placeholder ${ph} ausente em dist/index.html`);
}

function findEntryServer(dir) {
  const direct = path.join(dir, 'entry-server.js');
  if (fs.existsSync(direct)) return direct;

  function scan(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        const found = scan(full);
        if (found) return found;
      } else if (/entry-server.*\.js$/.test(entry.name)) {
        return full;
      }
    }
    return null;
  }

  const found = scan(dir);
  if (!found) {
    throw new Error(`Não foi possível encontrar o arquivo compilado de entry-server em ${dir}`);
  }
  return found;
}

const serverEntryFile = findEntryServer(distSsr);
const { render, PRERENDER_ROUTES } = await import(
  pathToFileURL(serverEntryFile).href
);

for (const { url, file } of PRERENDER_ROUTES) {
  const { html, head } = render(url);
  const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
  fs.writeFileSync(path.join(dist, file), page, 'utf-8');
  console.log(`prerender ${url} -> dist/${file}`);
}

fs.rmSync(distSsr, { recursive: true, force: true });
