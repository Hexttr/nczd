const sharp = require('sharp');
const path = require('path');

const input = path.join(__dirname, '../public/images/em.png');
const outputWebp = path.join(__dirname, '../public/images/em.webp');

sharp(input)
  .resize(1200, null, { withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile(outputWebp)
  .then((info) => {
    console.log('Optimized:', outputWebp, `(${(info.size / 1024).toFixed(1)} KB)`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
