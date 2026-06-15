import fs from 'fs';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

async function generate() {
  console.log('Reading SVG...');
  const svg = fs.readFileSync('public/favicon.svg');
  
  console.log('Generating PNGs...');
  await sharp(svg).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  await sharp(svg).resize(192, 192).png().toFile('public/favicon-192x192.png');
  await sharp(svg).resize(48, 48).png().toFile('public/favicon-48x48.png');
  
  console.log('Generating ICO...');
  const icoBuf = await pngToIco('public/favicon-48x48.png');
  fs.writeFileSync('public/favicon.ico', icoBuf);
  
  console.log('Cleaning up temporary 48x48 png...');
  fs.unlinkSync('public/favicon-48x48.png');

  console.log('Favicons generated successfully.');
}

generate().catch(console.error);
