import fs from 'node:fs';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const svg = fs.readFileSync('public/favicon.svg', 'utf-8');
const squareSvg = Buffer.from(svg.replace('rx="8"', 'rx="0"'));
const roundSvg = Buffer.from(svg);

const png = (input, size) => sharp(input, { density: 512 }).resize(size, size).png().toBuffer();

fs.writeFileSync('public/favicon-96x96.png', await png(roundSvg, 96));
fs.writeFileSync('public/apple-touch-icon.png', await png(squareSvg, 180));
fs.writeFileSync('public/web-app-manifest-192x192.png', await png(squareSvg, 192));
fs.writeFileSync('public/web-app-manifest-512x512.png', await png(squareSvg, 512));
fs.writeFileSync(
  'public/favicon.ico',
  await pngToIco([await png(roundSvg, 16), await png(roundSvg, 32), await png(roundSvg, 48)]),
);
console.log('Ícones gerados em public/');
