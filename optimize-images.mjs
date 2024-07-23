import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';

(async () => {
  const files = await imagemin(['src/assets/*.{jpg,png,svg}'], {
    destination: 'dist/assets',
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
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

  console.log('Images optimized');
})();

