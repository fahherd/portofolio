import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const imagesDir = path.join(publicDir, 'images');

await mkdir(imagesDir, { recursive: true });

/* ---------------------------------
   Film grain texture
--------------------------------- */

const noiseSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="4" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
    <feComponentTransfer>
      <feFuncA type="linear" slope="0.55"/>
    </feComponentTransfer>
  </filter>
  <rect width="180" height="180" filter="url(#grain)"/>
</svg>`;

await sharp(Buffer.from(noiseSvg))
  .webp({ quality: 72, alphaQuality: 70 })
  .toFile(path.join(imagesDir, 'noise.webp'));

/* ---------------------------------
   Favicon
--------------------------------- */

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#101010"/>
  <path d="M0 0h64v1H0z" fill="#E8AD32"/>
  <text x="29" y="44" text-anchor="middle" font-family="Georgia, FreeSerif, serif" font-size="34" letter-spacing="-2" fill="#F3F1EC">FH</text>
  <circle cx="50" cy="41" r="3.5" fill="#E8AD32"/>
</svg>`;

await writeFile(path.join(publicDir, 'favicon.svg'), faviconSvg, 'utf8');

const touchIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="#101010"/>
  <rect x="0" y="0" width="180" height="4" fill="#E8AD32"/>
  <text x="82" y="122" text-anchor="middle" font-family="Georgia, FreeSerif, serif" font-size="92" letter-spacing="-5" fill="#F3F1EC">FH</text>
  <circle cx="139" cy="114" r="9" fill="#E8AD32"/>
</svg>`;

await sharp(Buffer.from(touchIconSvg))
  .png()
  .toFile(path.join(publicDir, 'apple-touch-icon.png'));

/* ---------------------------------
   Default social image
--------------------------------- */

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="0.9" cy="0.05" r="0.75">
      <stop offset="0" stop-color="#E8AD32" stop-opacity="0.20"/>
      <stop offset="0.55" stop-color="#E8AD32" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="base" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1B1B1A"/>
      <stop offset="0.6" stop-color="#101010"/>
      <stop offset="1" stop-color="#0C0C0B"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#base)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <g stroke="#F3F1EC" stroke-opacity="0.07" stroke-width="1">
    <path d="M300 0v630"/>
    <path d="M900 0v630"/>
    <path d="M0 470h1200"/>
  </g>

  <circle cx="600" cy="60" r="4" fill="#E8AD32"/>

  <g font-family="FreeMono, monospace" font-size="17" letter-spacing="3" fill="#AAA9A4">
    <text x="64" y="72">FULL STACK WEB DEVELOPER</text>
    <text x="1136" y="72" text-anchor="end">PORTFOLIO / 2026</text>
  </g>

  <g font-family="FreeSerif, Georgia, serif" fill="#F3F1EC">
    <text x="58" y="290" font-size="142" letter-spacing="-6">Fajar</text>
    <text x="58" y="420" font-size="142" letter-spacing="-6">Herdiansyah<tspan fill="#E8AD32">.</tspan></text>
  </g>

  <g font-family="FreeSans, Arial, sans-serif" font-size="23" fill="#AAA9A4">
    <text x="64" y="518">Building digital experiences</text>
    <text x="64" y="552">through code &amp; creativity.</text>
  </g>

  <g font-family="FreeMono, monospace" font-size="15" letter-spacing="2" fill="#F3F1EC">
    <text x="1136" y="518" text-anchor="end">BEKASI, INDONESIA</text>
    <text x="1136" y="552" text-anchor="end" fill="#AAA9A4">FAHHERD@GMAIL.COM</text>
  </g>

  <rect x="1132" y="576" width="10" height="10" fill="#E8AD32"/>
</svg>`;

await sharp(Buffer.from(ogSvg))
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(path.join(imagesDir, 'og-default.jpg'));

console.log('Assets generated:');
console.log('  public/images/noise.webp');
console.log('  public/favicon.svg');
console.log('  public/apple-touch-icon.png');
console.log('  public/images/og-default.jpg');
