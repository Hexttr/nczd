const sharp = require('sharp');
const path = require('path');

const dir = path.join(__dirname, '../public/images');
const files = ['promo-endocrine.jpg', 'promo-cardiology.jpg', 'promo-gastro.jpg'];

async function run() {
  for (const file of files) {
    const input = path.join(dir, file);
    const output = path.join(dir, file.replace('.jpg', '.webp'));
    const info = await sharp(input)
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(output);
    console.log(file, '->', file.replace('.jpg', '.webp'), (info.size / 1024).toFixed(1) + ' KB');
  }
  console.log('Done');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
