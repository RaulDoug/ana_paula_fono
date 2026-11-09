import sharp from 'sharp';

const W = 1200, H = 630, PHOTO_W = 420, PHOTO_H = 525;
const photo = await sharp('public/images/foto_ana_paula.jpg')
  .resize(PHOTO_W, PHOTO_H, { fit: 'cover', position: 'top' })
  .toBuffer();

const text = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .t { font-family: Georgia, 'Times New Roman', serif; fill: #FFFFFF; font-weight: 700; }
    .s { font-family: Arial, Helvetica, sans-serif; fill: #E8F1EE; }
    .a { font-family: Arial, Helvetica, sans-serif; fill: #10B981; font-weight: 700; }
  </style>
  <text x="70" y="150" class="a" font-size="26">AZEVEDO FONOAUDIOLOGIA</text>
  <text x="70" y="240" class="t" font-size="60">Ana Paula Azevedo</text>
  <text x="70" y="300" class="s" font-size="34">Fonoaudióloga • CRFa 6-3588</text>
  <text x="70" y="390" class="s" font-size="30">Aparelhos auditivos • Home care para idosos</text>
  <text x="70" y="435" class="s" font-size="30">Fonoaudiologia clínica e infantil</text>
  <text x="70" y="530" class="a" font-size="32">Bom Despacho - MG</text>
</svg>`);

await sharp({ create: { width: W, height: H, channels: 3, background: '#0A3E39' } })
  .composite([
    { input: text, top: 0, left: 0 },
    { input: photo, top: Math.round((H - PHOTO_H) / 2), left: W - PHOTO_W - 60 },
  ])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile('public/og-image.jpg');
console.log('public/og-image.jpg gerado');
