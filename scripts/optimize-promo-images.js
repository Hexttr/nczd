const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const assetsDir = path.join(__dirname, '../public/images');
const files = ['promo-endocrine.jpg', 'promo-cardiology.jpg', 'promo-gastro.jpg'];

Promise.all(
  files.map((file) => {
    const input = path.join(assetsDir, file);
    const output = path.join(assetsDir, file.replace('.jpg', '.webp'));
    return sharp(input)
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(output)
      .then((info) => {
        console.log(file, '->', path.basename(output), `(${(info.size / 1024).toFixed(1)} KB)`);
      });
  })
)
  .then(() => console.log('Done'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
