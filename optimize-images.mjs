import sharp from 'sharp';
import fs from 'fs-extra';
import path from 'path';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';

const inputDir = 'originalAssets';
const tempDir = 'tempAssets';  // Temporary directory to hold rotated images
const outputDir = 'src/assets';

const rotateImages = async (inputDir, tempDir) => {
  const files = await fs.readdir(inputDir);

  await fs.ensureDir(tempDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const inputFile = path.join(inputDir, file);
    const outputFile = path.join(tempDir, file);

    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const image = sharp(inputFile);
      const metadata = await image.metadata();

      if (metadata.orientation) {
        await image.rotate().toFile(outputFile);
      } else {
        await fs.copy(inputFile, outputFile);
      }
    } else {
      await fs.copy(inputFile, outputFile);
    }
  }
};

const optimizeImages = async (tempDir, outputDir) => {
  const files = await imagemin([`${tempDir}/*.{jpg,png,svg}`], {
    destination: outputDir,
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({ quality: [0.5, 0.7] }),
      imageminSvgo({
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false }
        ]
      }),
      imageminWebp({ quality: 75 })
    ]
  });

  files.forEach(file => {
    console.log(`Optimized: ${file.sourcePath} -> ${file.destinationPath}`);
  });

  console.log('Images optimized:', files);
};

const main = async () => {
  try {
    await rotateImages(inputDir, tempDir);
    await optimizeImages(tempDir, outputDir);
    await fs.remove(tempDir);  // Clean up temporary directory
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
};

main();
